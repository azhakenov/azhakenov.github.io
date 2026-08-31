export const profile = {
  name: "Abay Zhakenov",
  role: "PhD Candidate in Theoretical Condensed Matter Physics",
  institution: "Rutgers University",
  department: "Department of Physics & Astronomy",
  expectedDefense: "May 2027",
  email: "az417@physics.rutgers.edu",
  location: "Piscataway, NJ",
  advisor: "Natan Andrei",
};

// Build-time stamp from public/cv.pdf's mtime (see vite.config.ts) so the
// "last updated" line can never drift from the file it describes.
export const cvUpdated = __CV_UPDATED__;

export const scholarUrl: string | null = "https://scholar.google.com/citations?user=9oRfzvsAAAAJ&hl=en";

export const links = {
  cv: `${import.meta.env.BASE_URL}cv.pdf`,
  email: "mailto:az417@physics.rutgers.edu",
  orcid: "https://orcid.org/0000-0002-3027-1528",
  orcidId: "0000-0002-3027-1528",
  inspire: "https://inspirehep.net/authors/1799380",
  // arxiv.org/a/zhakenov_a_1 (INSPIRE's suggested author-page slug) 404s, so
  // this links a search that reliably resolves instead.
  arxiv: "https://arxiv.org/search/?searchtype=author&query=Zhakenov%2C+A",
  scholar: scholarUrl,
  linkedin: "https://www.linkedin.com/in/abay-zhakenov-4a086415a/",
};
