import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import os from 'node:os';

// Keep Vite's dep cache OUTSIDE Dropbox — Dropbox sync locks files mid-rename
// and breaks dep optimization on Windows. Symptom: blank page, "deps file does
// not exist" warnings, EBUSY rename errors.
const cacheDir = path.join(os.tmpdir(), 'vite-vayla-react');

export default defineConfig({
  plugins: [react()],
  cacheDir,
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  server: {
    port: 5173,
    host: true,
    allowedHosts: ['.ngrok-free.dev', '.ngrok.app', '.ngrok.io', '.trycloudflare.com', '.loca.lt', 'localhost'],
    proxy: {
      '/api': { target: 'http://localhost:8787', changeOrigin: true },
    },
  },
  preview: {
    port: 5173,
    host: true,
    allowedHosts: ['.ngrok-free.dev', '.ngrok.app', '.ngrok.io', '.trycloudflare.com', '.loca.lt', 'localhost'],
  },
});
