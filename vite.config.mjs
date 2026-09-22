import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// CRA derived process.env.PUBLIC_URL from package.json's "homepage" field;
// Vite has no equivalent inference, so the deployed path is set explicitly
// here instead. src/utils/baseUrl.js reads this back out via
// import.meta.env.BASE_URL for the same string-concatenation call sites
// CRA's PUBLIC_URL used to serve.
//
// "/" because the site is served from the root of
// https://bachatealo.carlos15erh.workers.dev/ (Cloudflare Workers static
// assets — see wrangler.jsonc). It used to be "/bachatealo/": GitHub Pages
// gives exactly one root per account, that one was kept for the owner's
// personal portfolio, and every other repo is a project page served at
// <account>.github.io/<repo>/. Moving hosts is what freed the root.
//
// Getting this wrong is not subtle — every asset 404s and the page renders
// blank — so if the host ever changes again, this line and the absolute
// URLs in index.html (og:url, og:image, twitter:image) move together.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    // "build", not Vite's "dist" default. The name is inherited from the
    // CRA layout this project was migrated off, and it is now load-bearing
    // in one more place: wrangler.jsonc points assets.directory at it, so
    // the two have to agree or the deploy ships an empty site. Renaming
    // this means renaming that in the same commit.
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
