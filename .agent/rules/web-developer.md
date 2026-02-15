---
trigger: always_on
---

1. Tổng Quan & Phạm Vi (Overview & Scope)
Dự án: VAYLA Landing Page (Trang giới thiệu dự án).

Mô hình: Frontend-Only / Static Site.

Kiến trúc: Tối ưu hóa cho SEO, tốc độ tải trang và trải nghiệm người dùng (UX).

Hạ tầng: Deploy tự động qua GitHub Actions lên Hosting (Namecheap/cPanel) dưới dạng Static Export.

2. Tech Stack Bắt Buộc (Mandatory Tech Stack)
Framework: Next.js 14+ (App Router).

Cấu hình Build: output: 'export' (Tạo HTML tĩnh).

Ngôn ngữ: TypeScript (Strict Mode).

Styling: Tailwind CSS, Shadcn UI (cho UI components).

Animations: Framer Motion hoặc Lucide React (cho các hiệu ứng chuyển động).

Web3 Auth (Nếu có): Privy SDK (@privy-io/react-auth) - tích hợp phía Client.

3. Quy Tắc Coding (Coding Standards)
3.1 Nguyên Tắc Chung (General)
DRY (Don't Repeat Yourself): Tách các thành phần UI dùng chung (Button, Card, Section Title) vào thư mục src/components.

KISS (Keep It Simple, Stupid): Ưu tiên các giải pháp CSS/Animation đơn giản để tránh làm nặng trang web.

Type Safety: Không dùng any. Định nghĩa Interface/Type cho mọi Props của Component.

Asset Optimization: Mọi hình ảnh phải qua thẻ <Image /> của Next.js hoặc định dạng WebP/SVG để tối ưu dung lượng.

3.2 Frontend Rules (Next.js)
Server vs Client Components:

Mặc định sử dụng Server Components cho tất cả nội dung tĩnh (văn bản, cấu trúc trang) để tối ưu SEO.

Chỉ dùng 'use client' cho các thành phần cần tương tác (Menu di động, Swiper, Modal, Connect Wallet).

Cấu Trúc Thư Mục:

/src/app: Định nghĩa routes và layout chính.

/src/components/organisms: Các section lớn của Landing Page (Hero, Features, Roadmap).

/src/components/molecules: Các cụm UI nhỏ hơn (GlassAppIcon, SpotlightCard).

/src/assets: Chứa hình ảnh, icons và logo của Vayla.

Web3 Integration:

Nếu có hiển thị dữ liệu on-chain, sử dụng Wagmi và Viem để đọc dữ liệu trực tiếp từ RPC (không qua backend riêng).

4. Quy Tắc Triển Khai (Infrastructure & Deployment)
Tự động hóa (CI/CD): * Sử dụng GitHub Actions để tự động build dự án mỗi khi push code lên branch chính (feat/refactor-nextjs hoặc main).

Quy trình: Checkout -> Install -> Build (Export) -> FTP Deploy.

Môi trường Hosting (cPanel):

Triển khai vào thư mục public_html.

Sử dụng file .htaccess để xử lý các đường dẫn (nếu không dùng static export hoàn toàn).

Tối ưu hình ảnh: Vì sử dụng output: 'export', tính năng Image Optimization mặc định của Next.js sẽ không hoạt động trên hosting thường. Bắt buộc đặt unoptimized: true trong next.config.js hoặc tự tối ưu dung lượng ảnh thủ công trước khi upload.

5. Phong Cách Cam Kết Mã (Git Commit Style)
Sử dụng Conventional Commits:

feat: Thêm section mới (ví dụ: feat: add tokenomics section).

fix: Sửa lỗi hiển thị UI hoặc lỗi responsive.

chore: Cập nhật thư viện hoặc cấu hình build/deploy.

style: Chỉnh sửa CSS, màu sắc, font chữ mà không thay đổi logic.

perf: Các cải tiến về tốc độ load trang hoặc dung lượng ảnh.