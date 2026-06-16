# Vayla Technology INC Website

Website chính thức của Vayla Technology INC - The Protocol for Borderless Fandom.

## Công nghệ sử dụng

- **Next.js 14** - React framework với App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Wagmi** - React Hooks cho Ethereum
- **RainbowKit** - Wallet connection UI
- **Viem** - TypeScript Ethereum library

## Yêu cầu

- Node.js 18+ 
- npm hoặc yarn

## Cài đặt và chạy

1. **Clone repository và cài đặt dependencies:**
   ```bash
   npm install
   ```

2. **Tạo file `.env.local` và cấu hình:**
   ```bash
   cp .env.example .env.local
   ```
   
   Thêm WalletConnect Project ID vào file `.env.local`:
   ```
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
   ```
   
   Lấy Project ID từ: https://cloud.walletconnect.com

3. **Chạy development server:**
   ```bash
   npm run dev
   ```
   
   Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt.

4. **Build cho production:**
   ```bash
   npm run build
   npm start
   ```

## Cấu trúc dự án

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/       # React components
│   ├── molecules/    # Small reusable components
│   ├── organisms/    # Complex components
│   └── providers/    # Context providers
├── config/          # Configuration files
├── styles/          # Global styles
└── types/           # TypeScript type definitions
```

## Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build cho production
- `npm start` - Chạy production server
- `npm run lint` - Chạy ESLint

## Migration từ Vite

Dự án đã được refactor từ Vite sang Next.js với các cải tiến:
- ✅ SSR support cho Web3 providers
- ✅ Optimized font loading với next/font
- ✅ Image optimization với next/image
- ✅ Better SEO với metadata API
- ✅ Improved performance với App Router
