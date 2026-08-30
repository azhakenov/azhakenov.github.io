import multichannelScKondo from "@/assets/multichannel-sc-kondo.png";
import colorScKondo from "@/assets/color-sc-kondo.png";

export interface ResearchArea {
  title: string;
  description: string;
}

export const researchAreas: ResearchArea[] = [
  {
    title: "Integrable Systems",
    description: "Exactly solvable models using Bethe ansatz, R-matrix, and Yang-Baxter methods",
  },
  {
    title: "Quantum Many-Body Physics",
    description: "Strongly correlated systems, spin chains, and collective quantum phenomena",
  },
  {
    title: "Thermodynamic Bethe Ansatz",
    description: "Finite-temperature properties and thermodynamics of integrable models",
  },
  {
    title: "Impurity Models",
    description: "Kondo-type problems and quantum impurities in correlated systems",
  },
  {
    title: "Generalized Hydrodynamics",
    description: "Transport and non-equilibrium dynamics in integrable systems",
  },
];

export interface HighlightLink {
  label: string;
  url: string;
}

export interface Highlight {
  title: string;
  description: string;
  links: HighlightLink[];
  image: string;
  imageAlt: string;
}

export const highlights: Highlight[] = [
  {
    title: "Thermodynamic Bethe Ansatz for open boundary systems with boundary bound modes",
    description: `We worked out a systematic Thermodynamic Bethe Ansatz for integrable systems with open boundaries that support boundary bound modes — localized states the boundary interaction generates on its own. The formulation lets us treat boundary impurities in exactly the regime where those states appear.

We then used it to compute the impurity residual entropy, which is accessible in experiment, for a single superconducting wire, its multi-lead generalization, the Heisenberg spin chain, and higher-spin chains (in preparation).`,
    links: [
      { label: "Single superconducting wire", url: "https://arxiv.org/abs/2508.19330" },
      { label: "Multi-lead generalization", url: "https://arxiv.org/abs/2512.11965" },
      { label: "Heisenberg spin chain", url: "https://arxiv.org/abs/2508.19334" },
    ],
    image: multichannelScKondo,
    imageAlt:
      "Plot of impurity residual entropy versus temperature on a log scale, for four boundary-parameter values: all curves rise from ln(√3) at low temperature toward ln 2 at high temperature, with the largest parameter value briefly overshooting ln 2 before settling back down.",
  },
  {
    title: "Competition between superconductivity and the Kondo effect",
    description: `A Bethe Ansatz treatment of the Kondo effect in strongly interacting superconductors, where screening and pairing compete and the phase structure that comes out is not the conventional one.

Two applications: Kondo overscreening driven by a spin-1 superconducting wire, and a heavy-quark impurity at the edge of a bulk color superconductor. Both flow to nontrivial fixed points, with the impurity dynamics set by the competition between energy scales.`,
    links: [
      { label: "Kondo overscreening in a spin-1 superconducting wire (Phys. Rev. B)", url: "https://doi.org/10.1103/rg1x-bztv" },
      { label: "Heavy quark impurity in a color superconductor (Phys. Rev. D)", url: "https://doi.org/10.1103/q6kz-2vl2" },
    ],
    image: colorScKondo,
    imageAlt:
      "Renormalization-group flow diagram in the coupling plane (g, J): three families of flow lines, separated by dashed separatrix curves, run toward different fixed points depending on the initial couplings.",
  },
];
