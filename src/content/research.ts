import multichannelScKondo from "@/assets/multichannel-sc-kondo.png";
import colorScKondo from "@/assets/color-sc-kondo.png";

export interface ResearchArea {
  title: string;
  description: string;
}

export const researchAreas: ResearchArea[] = [
  {
    title: "Integrability & Exact Methods",
    description: "Bethe ansatz, thermodynamic Bethe ansatz, and quantum transfer matrix techniques",
  },
  {
    title: "Quantum Impurity & Boundary Problems",
    description: "Kondo screening, boundary bound modes, and impurity entropy in strongly correlated hosts",
  },
  {
    title: "One-Dimensional Correlated Systems",
    description: "Spin chains, superconducting wires, and higher-rank su(n) models",
  },
  {
    title: "Boundary Conformal Field Theory",
    description: "Fixed points and boundary states of critical one-dimensional systems",
  },
  {
    title: "Non-Hermitian & Monitored Dynamics",
    description: "Dissipative and PT-symmetric impurities, and impurities under continuous measurement",
  },
  {
    title: "Tensor-Network Methods",
    description: "Matrix-product benchmarks and influence-matrix calculations of real-time dynamics",
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
