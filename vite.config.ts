import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: change `base` to match your GitHub repo name.
// If your repo is github.com/yourname/lookout-midlands, the base is '/lookout-midlands/'.
// If you use a custom domain or publish at the root, set base: '/'.
export default defineConfig({
  plugins: [react()],
  base: '/lookout-midlands/',
});
