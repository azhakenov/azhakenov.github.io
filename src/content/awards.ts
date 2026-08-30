export interface Award {
  title: string;
  organization: string;
  year: string;
  type: "Academic" | "Olympiad";
}

export const awards: Award[] = [
  {
    title: "Peter Lindenfeld Graduate Fellowship",
    organization: "Department of Physics & Astronomy, Rutgers University",
    year: "2026",
    type: "Academic",
  },
  {
    title: "Louis Bevier Dissertation Completion Fellowship (alternate)",
    organization: "Rutgers University",
    year: "2026",
    type: "Academic",
  },
  {
    title: "Langreth Graduate Development Award",
    organization: "Department of Physics & Astronomy, Rutgers University",
    year: "2023",
    type: "Academic",
  },
  {
    title: "Boyd Scholarship",
    organization: "Department of Physics & Astronomy, Rutgers University",
    year: "2022",
    type: "Academic",
  },
  {
    title: 'Scholarship "Scientific Leadership Support Project"',
    organization: "Department of General and Applied Physics, MIPT",
    year: "2019",
    type: "Academic",
  },
  {
    title: "Third Prize – TUYMAADA International Olympiad in Physics",
    organization: "Republic of Sakha, Russia",
    year: "2014",
    type: "Olympiad",
  },
  {
    title: "Second Prize – Kazakhstan Republican Olympiad in Physics",
    organization: "Kazakhstan",
    year: "2014",
    type: "Olympiad",
  },
];
