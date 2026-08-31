export interface Talk {
  title: string;
  event: string;
  location: string;
  date: string;
  type: string;
  link?: string;
  note?: string;
}

export const talks: Talk[] = [
  {
    title: "Dynamics and thermodynamics of quantum impurities at the edge of spin chains",
    event: "APS Global Physics Summit",
    location: "Denver, CO",
    date: "March 2026",
    type: "Contributed Talk",
  },
  {
    title: "Thermodynamics in a split Hilbert space: quantum impurity at the edge of 1d systems",
    event: "Rutgers Fall CMT Symposium 2025",
    location: "Rutgers University",
    date: "November 2025",
    type: "Conference Talk",
    link: "https://cmt.rutgers.edu/fall-2025-symposium/",
  },
  {
    title: "No Man is an Island and so the Quantum Impurity isn't...",
    event: "SSPAR (Seminars for Physics Students at Rutgers)",
    location: "Rutgers University",
    date: "October 2025",
    type: "Graduate Student Talk",
  },
  {
    title: "Thermodynamics in a split Hilbert space: quantum impurity at the edge of 1d systems",
    event: 'Seminars "Nonperturbative methods in QFT"',
    location: "Online (Zoom)",
    date: "September 2025",
    type: "Seminar Talk",
  },
  {
    title: "Impurity Effects in the Spin-S Heisenberg–Babujian Chain",
    event: "APS Global Physics Summit",
    location: "Anaheim, CA",
    date: "March 2025",
    type: "Contributed Talk",
  },
  {
    title: "Impurity Effects in the Spin-S Heisenberg–Babujian Chain",
    event: "Rutgers Spring CMT Symposium",
    location: "Rutgers University",
    date: "February 2025",
    type: "Poster Presentation",
    link: "https://cmt.rutgers.edu/2025-spring-symposium/",
  },
  {
    title: "Quantum Materials – Modern Alchemy",
    event: "Astana branch of the National School of Physics & Math",
    location: "Online",
    date: "November 2023",
    type: "Invited Lecture",
    note: "For middle- and high-school students",
  },
  {
    title: "Today's Magic",
    event: "Wiley research talk, Rutgers Upward Bound program",
    location: "Rutgers University",
    date: "July 2022",
    type: "Outreach Talk",
    note: "Outreach to first-generation and low-income students",
  },
  {
    title: "Integrability and Time-Dependent Hamiltonians",
    event: "New Jersey Quantum Matter and Information Forum",
    location: "Princeton University",
    date: "April 2022",
    type: "Conference Talk",
  },
  {
    title: "Derivation of the Painlevé Equations for Two-Spin Correlation Functions in the Ising Model",
    event: "Seminar at the School of Mathematical Physics",
    location: "Dubna, Russia",
    date: "May 2019",
    type: "Seminar Talk",
  },
];
