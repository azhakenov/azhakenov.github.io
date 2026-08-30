// Central place for the two things that change when hosting changes
// (REBUILD_SPEC.md §4): the base path Vite/React Router mount under, and the
// canonical origin used in metadata, canonical links, and JSON-LD.
//
//   user site   (abayzhakenov.github.io)  -> base "/"
//   custom domain (abayzhakenov.com)      -> base "/", plus public/CNAME
//   project repo  (<user>.github.io/site) -> base "/site/"
//
// `base` is read from Vite's BASE_URL, which vite.config.ts derives from the
// VITE_BASE_PATH env var (defaulting to "/"). Nothing else in the app should
// hardcode a leading path segment.

export const SITE = {
  base: import.meta.env.BASE_URL,
  // Live on the user site. If a custom domain is added later, change this
  // back to "https://abayzhakenov.com" and add public/CNAME.
  url: "https://azhakenov.github.io",
};
