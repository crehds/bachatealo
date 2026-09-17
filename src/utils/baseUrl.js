// Vite's import.meta.env.BASE_URL always carries a trailing slash (e.g.
// "/bachatealo/"), while every call site here was written against CRA's
// process.env.PUBLIC_URL, which never did (e.g. "/bachatealo"). Stripping
// it back off here keeps every existing string concatenation
// (BASE_URL + '/images/...') byte-identical to what it produced before —
// a naive swap to BASE_URL alone would double up the slash.
export const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '');
