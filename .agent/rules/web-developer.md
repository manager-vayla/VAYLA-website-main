---
trigger: always_on
---

1. Tổng Quan & Phạm Vi (Overview & Scope)
Dự án: VAYLA.

Mô hình: Full-Stack Monolithic (hoặc Modular Monolith).

Kiến trúc: Client-Server qua REST API.

Hạ tầng: AWS EC2 t4g.large (ARM64/Graviton), Ubuntu 24.04 LTS. KHÔNG sử dụng Docker. Triển khai trực tiếp (Bare-metal) với Systemd và PM2.

2. Tech Stack Bắt Buộc (Mandatory Tech Stack)
Frontend
Framework: Next.js 14+ (App Router).

Ngôn ngữ: TypeScript (Strict Mode).

Styling: Tailwind CSS, Shadcn UI (cho components).

State Management: Zustand (client-state), TanStack Query (server-state).

Web3 Auth: Privy SDK (@privy-io/react-auth).

Wallet Interaction: Wagmi / Viem.

Backend
Framework: FastAPI (Python 3.11+).

Cơ sở dữ liệu: PostgreSQL 16 (Cài đặt native trên OS).

ORM: SQLAlchemy 2.0 (AsyncIO only).

Migration: Alembic.

Blockchain Interaction: Web3.py (AsyncHTTPProvider).

Task Queue: Asyncio background tasks (cho các tác vụ nhẹ) hoặc Celery + Redis (nếu cần xử lý nặng, hiện tại ưu tiên Asyncio để tiết kiệm RAM).

3. Quy Tắc Coding (Coding Standards)
3.1 Nguyên Tắc Chung (General)
DRY (Don't Repeat Yourself): Tách logic lặp lại thành các utils hoặc services.

KISS (Keep It Simple, Stupid): Ưu tiên giải pháp đơn giản, dễ đọc hơn giải pháp phức tạp.

Type Safety:

Frontend: Không dùng any. Định nghĩa Interface/Type cho mọi Props và API Response.

Backend: Sử dụng Pydantic Models cho mọi Schema (Input/Output). Sử dụng Type Hinting đầy đủ cho function arguments và return types.

3.2 Frontend Rules (Next.js)
Server vs Client Components:

Mặc định sử dụng Server Components để tối ưu SEO và performance.   

Chỉ sử dụng 'use client' khi cần tương tác UI (onClick, useState) hoặc truy cập Browser API.

Data Fetching:

Server: Sử dụng fetch hoặc gọi trực tiếp service (nếu mô hình cho phép).

Client: Bắt buộc dùng TanStack Query để quản lý caching và loading state.

Privy Integration:

KHÔNG bao giờ lộ App Secret ở phía Client.

Sử dụng usePrivy() để lấy getAccessToken(). Token này MỚI LÀ CHÌA KHÓA để gọi API Backend.

Luôn gửi token trong Header: Authorization: Bearer <access_token>.

3.3 Backend Rules (FastAPI & Python)
Async First:

Tất cả route handlers (def route(...)) PHẢI là async def.

Tất cả IO operations (Database, RPC calls, HTTP requests) PHẢI có await.   

❌ time.sleep(5) -> ✅ await asyncio.sleep(5).

Cấu Trúc Thư Mục:

/api: Chứa các route controllers (endpoints).

/core: Config, Security, Database Connection.

/services: Business Logic (Xử lý Funding, Blockchain Event Listening).

/schemas: Pydantic Models.

/models: SQLAlchemy Models.

Database Session Management:

Sử dụng Dependency Injection Depends(get_db) để lấy session.

Session phải là AsyncSession.

KHÔNG BAO GIỜ thực hiện commit trong get_db. Commit phải được gọi rõ ràng trong Service layer sau khi hoàn tất logic nghiệp vụ.

3.4 Bảo Mật & Xác Thực (Security & Auth)
Verify Token:

Backend KHÔNG TIN TƯỞNG bất kỳ request nào không có token (trừ các route public).

Middleware xác thực phải:

Lấy Bearer Token từ Header.

Decode JWT sử dụng Public Key của Privy (Ed25519).   

Kiểm tra iss (privy.io), aud (app-id), exp (hết hạn).

Inject user_id (DID) vào request context.

Input Validation:

Mọi dữ liệu đầu vào (từ form funding, số tiền invest) phải được validate chặt chẽ qua Pydantic.

Kiểm tra logic nghiệp vụ (Ví dụ: current_raise + amount <= target_raise) trước khi ghi vào DB.

4. Quy Tắc Hạ Tầng & Triển Khai (Infrastructure)
Môi trường ARM64:

Khi cài đặt thư viện Python (như uvloop, cryptography), đảm bảo hệ thống có đủ build-essential và libssl-dev để compile native extensions nếu không có wheel.   

PostgreSQL config phải được tối ưu cho RAM 8GB (Shared Buffers ~2GB).   

Nginx Reverse Proxy:

Cấu hình Nginx để forward header X-Forwarded-For, X-Real-IP vào Backend để rate limiting hoạt động đúng.   

SSL Termination thực hiện tại Nginx (Sử dụng Certbot).

Process Management:

Backend: Chạy dưới dạng Systemd Service (kinc-backend.service).

Frontend: Build static (npm run build) và serve qua PM2 hoặc Nginx trực tiếp.

5. Phong Cách Cam Kết Mã (Git Commit Style)
Sử dụng Conventional Commits:

feat: thêm chức năng tạo campaign

fix: sửa lỗi tính toán lãi suất

chore: cập nhật dependencies

docs: cập nhật hướng dẫn API