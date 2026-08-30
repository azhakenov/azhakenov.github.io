export interface ResearchExperience {
  position: string;
  institution: string;
  institutionLink?: string;
  location: string;
  period: string;
  advisor: string;
  topics: string[];
}

export const experience: ResearchExperience[] = [
  {
    position: "Graduate Researcher",
    institution: "Center for Materials Theory, Rutgers University",
    institutionLink: "https://cmt.rutgers.edu/",
    location: "New Brunswick, NJ",
    period: "2021 – Present",
    advisor: "Natan Andrei",
    topics: [
      "Impurity effects in integrable spin chains",
      "Thermodynamic Bethe ansatz",
      "Generalized hydrodynamics",
      "Kondo-type problems",
    ],
  },
  {
    position: "Research Intern",
    institution: "Landau Institute for Theoretical Physics",
    location: "Moscow, Russia",
    period: "2018 – 2019",
    advisor: "V.A. Belavin",
    topics: [
      "AGT correspondence",
      "Integrable basis in Superconformal Field Theory",
      "Conformal blocks and modular transformations",
    ],
  },
];
