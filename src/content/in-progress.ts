// Work under way that has no arXiv number yet. Drawn from the CV's "current
// projects" and the Harvard research proposal. Keep this honest: these are
// projects, not papers — no titles that imply a preprint exists.

export interface InProgressItem {
  title: string;
  collaborators?: string;
  description: string;
}

export const inProgress: InProgressItem[] = [
  {
    title: "The quasi-local edge charge behind the split Hilbert space",
    description:
      "Exact diagonalization shows that the projector onto the boundary-string tower is an exponentially localized edge operator, with an operator Schmidt rank that saturates and a Pauli-string weight decaying away from the edge. The open question is dynamical, and needs matrix-product methods to reach the sizes and times where it can be answered: does an impurity-generated quasi-local charge obstruct thermalization near the edge?",
  },
  {
    title: "Integrable Kondo models in higher representations of su(n)",
    description:
      "Higher-rank Kondo physics has mostly been studied with impurity and bulk in the fundamental representation. I construct the antisymmetric higher representations by fusion of fundamental R-matrices, and have verified the Yang–Baxter equation for the (2,1) representation of su(3). The SU(3) chain with a boundary impurity gives a critical coupling ratio separating collective screening from screening by a localized bound state — a number that alkaline-earth atoms in optical lattices could be used to look for.",
  },
  {
    title: "Real-time Kondo dynamics by influence matrix",
    collaborators: "with the group of J. H. Pixley",
    description:
      "An influence-matrix approach to impurity dynamics in real time, which works because the temporal entanglement of the impurity's influence functional stays low. Both this and the quantum transfer matrix obtain the impurity as a boundary condition in a rotated channel, one in real time and one in imaginary time; whether they are the same construction at two orientations of the contour is open.",
  },
  {
    title: "Integrable structure of time-dependent BCS systems",
    collaborators: "with E. A. Yuzbashyan",
    description:
      "Non-equilibrium dynamics of time-dependent BCS systems and their relation to the Knizhnik–Zamolodchikov equations, extending the integrable structure from SU(2) to SU(3)-symmetric pairing models. Separately, a discrete-time path-integral treatment of functional determinants in Migdal–Eliashberg theory.",
  },
];
