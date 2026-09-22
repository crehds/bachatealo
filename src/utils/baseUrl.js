// Vite's import.meta.env.BASE_URL always carries a trailing slash — "/" at
// the site root, "/subpath/" when served from one — while every call site
// here was written against CRA's process.env.PUBLIC_URL, which never did.
// Stripping it back off here keeps every existing string concatenation
// (BASE_URL + '/images/...') producing exactly one slash whatever base
// vite.config.mjs carries; a naive swap to BASE_URL alone would double it.
// At the root this resolves to the empty string, so the concatenation is
// the path itself. That is why this seam stays even when base is "/": it is
// what lets the base move again without touching six call sites.
export const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '');
