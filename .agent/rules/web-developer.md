---
trigger: always_on
---

KINC Project Rules & Technology Stack (Frontend Focus)

1. Core Framework & Language
   Framework: React 18+ (Vite)

Language: TypeScript (Bắt buộc). Phải định nghĩa Interface/Type cho mọi dữ liệu từ API và Smart Contract.

State Management:

Global: Zustand (Nhẹ, hiệu năng cao hơn Context API cho các tác vụ lưu trữ trạng thái ví/session).

Server State & Blockchain Data: TanStack Query (React Query) để cache và sync dữ liệu RWA.

Routing: React Router DOM (v6+).

2. Web3 & Blockchain Integration
   Provider & Library: Wagmi kết hợp với Viem (Tối ưu tốc độ và type-safe hơn Web3.js).

Wallet Connection: RainbowKit (Đã cấu hình cho Polygon Mainnet).

Data Handling:

Luôn sử dụng BigInt cho các giá trị Token.

Sử dụng formatUnits và parseUnits từ Viem để xử lý số thập phân (Decimals) của USDT/KCT.

RPC Management: Sử dụng Alchemy hoặc QuickNode (Cấu hình qua biến môi trường .env).

3. Styling & UI System
   Engine: Tailwind CSS.

Design Pattern: Atomic Design (Atoms, Molecules, Organisms).

Visual Style:

Glassmorphism: Sử dụng backdrop-blur và bg-opacity.

Theme: Dark Mode mặc định (Navy/Blue/Gold).

Responsiveness: Quy tắc Mobile-First. Kiểm tra nghiêm ngặt trên breakpoint 375px (iPhone SE) và 414px.

4. Project Structure (Standardized)
   Plaintext

src/
├── assets/ # Images, Fonts, Icons
├── components/ # Reusable UI components
├── constants/ # ABI, Contract Addresses, Configs
├── hooks/ # Custom hooks (useContractRead, useFunding, etc.)
├── layouts/ # MainLayout, AuthLayout
├── pages/ # Screen views
├── services/ # API calls (Axios instances)
├── store/ # Zustand stores
├── types/ # TypeScript definitions (.d.ts)
└── utils/ # Formatters, Helpers (address shorten, date) 5. Coding Rules & Best Practices
5.1. Type Safety & Validation
Tuyệt đối không sử dụng any.

Các hàm tương tác Contract phải được bọc trong try-catch và có thông báo lỗi (Toast) cho người dùng.

5.2. Component Design
Functional Components: Sử dụng arrow functions.

Props: Phải được định nghĩa Type cụ thể.

Performance: Sử dụng React.memo cho các component hiển thị bảng giá hoặc danh sách dự án Funding lớn để tránh re-render thừa.

5.3. Naming Convention
Components/Pages: PascalCase.tsx

Hooks: useCamelCase.ts

Variables/Functions: camelCase

Constants: UPPER_SNAKE_CASE

5.4. Git Workflow (Strict)
Commits: Tuân thủ Conventional Commits:

feat: Tính năng mới.

fix: Sửa lỗi.

refactor: Tối ưu code nhưng không đổi tính năng.

chore: Cập nhật thư viện, cấu hình build.

Branching: main -> develop -> feature/feature-name.

6. Deployment Context (AWS t4g.large)
   Build Output: Tối ưu hóa Vite build (manualChunks) để giảm kích thước tệp JS, giúp Nginx trên AWS EC2 phục vụ file nhanh hơn.

Environment: Toàn bộ API URL và Contract Address phải nằm trong .env. Không hardcode thông tin nhạy cảm.
