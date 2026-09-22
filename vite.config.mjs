import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// CRA derived process.env.PUBLIC_URL from package.json's "homepage" field;
// Vite has no equivalent inference, so the deployed path is set explicitly
// here instead. src/utils/baseUrl.js reads this back out via
// import.meta.env.BASE_URL for the same string-concatenation call sites
// CRA's PUBLIC_URL used to serve.
//
// "/" because the site is served from the ROOT of an organisation GitHub
// Pages site (https://bachatealo.github.io/). GitHub gives exactly one root
// per account: a repo named <account>.github.io is served at that root,
// while every other repo under the same account is a project page served at
// <account>.github.io/<repo>/ and would need that subpath spelled out here
// instead. Getting this wrong is not subtle — every asset 404s and the page
// renders blank.
export default defineConfig({
  base: '/',
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
