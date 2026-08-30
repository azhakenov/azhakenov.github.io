export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  advisor?: string;
  gpa?: string;
  details: string;
}

export const education: Education[] = [
  {
    degree: "Ph.D. in Physics",
    institution: "Rutgers University",
    location: "New Brunswick, NJ",
    period: "2021 – Present",
    advisor: "Natan Andrei",
    details: "Research in integrable systems, impurity physics, and quantum many-body theory",
  },
  {
    degree: "M.Sc. in Theoretical Physics",
    institution: "Moscow Institute of Physics and Technology (MIPT)",
    location: "Moscow, Russia",
    period: "2019 – 2021",
    gpa: "4.92/5.0",
    advisor: "Vladimir Belavin",
    details: "Thesis on integrable structures in conformal field theory",
  },
  {
    degree: "B.Sc. in Applied Physics and Mathematics",
    institution: "Moscow Institute of Physics and Technology (MIPT)",
    location: "Moscow, Russia",
    period: "2015 – 2019",
    gpa: "4.86/5.0",
    advisor: "Vladimir Belavin",
    details: "Focus on theoretical and mathematical physics",
  },
];
