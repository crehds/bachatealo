import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// CRA derived process.env.PUBLIC_URL from package.json's "homepage" field;
// Vite has no equivalent inference, so the deployed subpath is set
// explicitly here instead. src/utils/baseUrl.js reads this back out via
// import.meta.env.BASE_URL for the same string-concatenation call sites
// CRA's PUBLIC_URL used to serve.
export default defineConfig({
  base: '/bachatealo/',
  plugins: [react()],
  build: {
    // deploy (package.json) runs `gh-pages -d build`, and that directory
    // name is the live, already-deployed path — Vite defaults to "dist",
    // so this is pinned rather than touching the deploy script.
    outDir: 'build',
    // The CSS minifier strips vendor prefixes it judges unnecessary for
    // its own default target, which silently discarded the hand-written
    // -webkit-appearance reset on .burguer-button. Pinning the target
    // keeps the source's explicit intent instead of second-guessing it.
    cssTarget: ['chrome87', 'edge88', 'firefox78', 'safari14'],
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
