export const rutgersCourses = {
  introductory: ["115", "116"],
  intermediate: ["202", "203", "204", "205", "229", "273", "289", "301", "324"],
  grading: ["385", "397", "501"],
};

export interface TeachingRole {
  title: string;
  institution: string;
  period: string;
  description: string;
  type: string;
  featured?: boolean;
}

export const rutgersTeaching: TeachingRole[] = [
  {
    title: "Lecturer, Honors Physics III (PHY 273)",
    institution: "Rutgers University",
    period: "Fall 2026",
    description: "Lecturer for a full-semester honors course.",
    type: "Lecturer",
    featured: true,
  },
  {
    title: "Fundamentals of Modern Physics",
    institution: "Rutgers University",
    period: "Summer 2026, 3 seasons",
    description:
      "Founded and taught a 15-hour lecture course on quantum mechanics, quantum information, condensed matter, and particle physics for high-school students. Students carried out independent projects alongside the lectures — recent examples include a simulation study of quantum versus pseudo-random number generation, a numerical derivation and test of the quantum bit error rate that exposes an eavesdropper in the BB84 protocol, and an interactive three-body dynamics simulator.",
    type: "Instructor & Course Organizer",
  },
  {
    title: "Lecturer – Engineers of the Future Program",
    institution: "Rutgers University",
    period: "Summers 2025, 2026",
    description:
      'Designed and taught a foundational physics course in the "Engineers of the Future" program, a Rutgers School of Engineering program supporting under-resourced New Jersey students preparing for engineering studies at Rutgers.',
    type: "Lecturer",
  },
];

export const onlineTeaching: TeachingRole[] = [
  {
    title: "Quantum Computation: Foundations and Applications",
    institution: "Online (Zoom) with Kazakhstani Students",
    period: "Summer 2025",
    description:
      "Designed and led a six-week intensive course for high-school students on quantum algorithms, qubit dynamics, and Qiskit-based lab work. Mentored seven students through research projects on variational quantum algorithms, quantum walks, and quantum classifiers, culminating in a symposium reviewed by Rutgers faculty.",
    type: "Instructor & Course Organizer",
  },
];

export interface TeachingHistoryItem {
  title: string;
  period: string;
  description: string;
  organization?: string;
  icon: "graduationCap" | "bookOpen" | "users" | "school" | "award" | "globe";
}

export const miptTeaching: TeachingHistoryItem[] = [
  {
    title: "TA – Introduction to Quantum Field Theory (Advanced)",
    period: "Sep 2020 – Jan 2021",
    description: "Teaching Assistant for senior students course on advanced QFT",
    icon: "graduationCap",
  },
  {
    title: "Lectures on Random Partitions",
    period: "November 2020",
    description: 'Part of the course "Selected Topics of Theoretical and Mathematical Physics"',
    icon: "bookOpen",
  },
  {
    title: "Seminars – Selected Methods of Theoretical Physics",
    period: "Feb – Jun 2019",
    description: "Seminars for second-year students",
    icon: "users",
  },
  {
    title: "MIPT Mentoring Programme – Toda CFT",
    period: "Mar – May 2019",
    description: 'Mentoring research of third-year students on the topic "Toda CFT"',
    icon: "users",
  },
  {
    title: "Laboratory for IT Education",
    period: "June 2018",
    description: "Teaching Assistant at Science Olympiads Summer School for high school students",
    icon: "school",
  },
  {
    title: "Students' Scientific Pedagogical Team",
    period: "Nov 2017, Jul 2017, Jul 2016",
    description: 'Lecturer of "Olympiad Methods in Physics" course for high school students',
    icon: "award",
  },
  {
    title: "Training Laboratory for Gifted Children",
    period: "Sep 2015 – Feb 2016",
    description: "Assisting in training the Russian team for international physics olympiads (preparing problems, grading solutions)",
    icon: "award",
  },
];

export const otherTeaching: TeachingHistoryItem[] = [
  {
    title: "Online Seminars – Foundations of Quantum Field Theory",
    organization: "Nazarbayev University & L.N. Gumilyov ENU",
    period: "Oct 2020 – Mar 2021",
    description: "Online seminars for physics students in Kazakhstan via Zoom",
    icon: "globe",
  },
  {
    title: "Baikal School of Physics and Mathematics",
    organization: "Irkutsk, Russia",
    period: "June 2019",
    description: "Seminars on physics for high school students",
    icon: "school",
  },
  {
    title: 'Center for Additional Education "Pifagor"',
    organization: "Astana, Kazakhstan",
    period: "Mar – Aug 2014",
    description: 'Teaching course "Olympiad Physics" for 9th grade pupils',
    icon: "school",
  },
];

export const olympiadExperience: TeachingHistoryItem[] = [
  {
    title: "Student-Jury – All-Russian Physics Olympiad",
    organization: "Tomsk, Russia",
    period: "April 2019",
    description: "Student-jury of the final step of All-Russian High School Olympiad in physics",
    icon: "award",
  },
  {
    title: "Student-Jury – All-Russian Physics Olympiad",
    organization: "Tyumen, Russia",
    period: "April 2018",
    description: "Student-jury of the final step of All-Russian High School Olympiad in physics",
    icon: "award",
  },
  {
    title: "Student-Jury – Maxwell Olympiad",
    organization: "Sochi, Russia",
    period: "April 2016",
    description: "Student-jury of the final step of All-Russian School Olympiad in physics for 7th and 8th grade pupils",
    icon: "award",
  },
];

export interface TeachingResourceItem {
  title: string;
  description: string;
  format: "Interactive page" | "PDF";
  // Relative to the site's base path — no leading slash. Resolved with
  // SITE.base at render time (see pages/TeachingResources.tsx), the same way
  // links.cv resolves in content/site.ts.
  href: string;
}

export interface TeachingResourceGroup {
  group: string;
  items: TeachingResourceItem[];
}

export const teachingResources: TeachingResourceGroup[] = [
  {
    group: "PHY 273 — Honors Physics III",
    items: [
      {
        title: "The 273 Math Toolkit",
        description:
          "A 14-problem diagnostic and twelve short reference sections on the maths PHY 273 leans on but never re-derives: complex numbers and Euler's formula, Taylor expansion, gradient, divergence and curl with the two integral theorems, the two ODEs that keep coming back, Gaussian integrals, delta functions.",
        format: "Interactive page",
        href: "resources/273/math-toolkit.html",
      },
    ],
  },
  {
    group: "Private Tutoring — Middle School Physics",
    items: [
      {
        title: "Units, Conversions & Measurements",
        description:
          "Conversion drills to warm up — miles to km, feet to inches, liters to fluid ounces — then word problems: converting wizarding currency, a race between runners timed in different units, reading a scale, and a speedometer calibrated in a unit I made up.",
        format: "PDF",
        href: "resources/tutoring/conversions-and-measurements.pdf",
      },
      {
        title: "Ohm's Law & Current",
        description:
          "A homework sheet on V = IR. Qualitative questions first — what happens if you double the resistance, or halve the voltage — then calculations of current, voltage and resistance, charge from current and time, and how many electrons that is. It ends with a circuit problem that needs all of it, plus a question about why conventional current points the wrong way.",
        format: "PDF",
        href: "resources/tutoring/electricity.pdf",
      },
    ],
  },
];

export interface TutoringService {
  title: string;
  levels: string[];
  topics: string[] | null;
}

export const tutoringServices: TutoringService[] = [
  {
    title: "Physics & Math Tutoring",
    levels: ["High School", "Undergraduate", "Graduate"],
    topics: null,
  },
  {
    title: "Competition Preparation",
    levels: ["Kazakhstan Republic Olympiad", "All-Russian Physics Olympiad"],
    topics: ["Problem-solving strategies", "Advanced techniques", "Mock exams"],
  },
  {
    title: "Adult Learners",
    levels: ["All Levels"],
    topics: [
      "Consulted and taught advanced physics topics to interested adult learners, adjusting material complexity to individual interests and experience level",
    ],
  },
];
