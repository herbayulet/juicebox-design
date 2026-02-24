# juicebox-design

Slicing design: React + TypeScript + Vite — onboarding flow desain untuk Juicebox.

## Domain
- Kamu bisa liat live nya disini https://juicebox-design.vercel.app/ (karena sudah di deploy)

## Persyaratan
- Node.js (v16+)
- npm

## Instalasi
1. Clone repo dan masuk ke folder:
   ```bash
   git clone https://github.com/herbayulet/juicebox-design.git
   npm install
   ```
2. (Jika muncul error `Cannot find module '@hookform/resolvers/zod'`) jalankan:
   ```bash
   npm install @hookform/resolvers zod
   ```
   lalu restart TypeScript server di VS Code: *TypeScript: Restart TS Server*.

## Scripts
- Start dev: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`
- Lint (jika tersedia): `npm run lint`

## Struktur proyek (ringkasan)
- src/
  - main.tsx — bootstrap aplikasi
  - App.tsx — router / layout utama
  - pages/
    - Register.tsx — form pendaftaran (react-hook-form + zod)
    - Onboarding.tsx
    - Home.tsx
  - components/ — komponen UI
  - assets/ — gambar / ikon
- vite.config.ts
- tsconfig*.json
- package.json

## Catatan penting
- Validasi form menggunakan `react-hook-form` + `@hookform/resolvers/zod` + `zod`. Pastikan package resolver dan zod terinstall (lihat bagian Instalasi).
- Jika TypeScript tetap tidak menemukan modul setelah install, hapus `node_modules` dan `package-lock.json` lalu jalankan `npm install` ulang:
  ```bash
  rm -rf node_modules package-lock.json && npm install
  ```
- Untuk debugging di VS Code: restart TS server atau restart VS Code setelah instalasi package baru.
- Ini hanya untuk Mobile View saja, jadi harus inspect lalu pilih layar hp