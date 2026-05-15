export type PressItem = {
  date: string;
  source: string;
  title: string;
  excerpt: string;
  url?: string;
};

export const pressItems: PressItem[] = [
  {
    date: "Hiver 2024-2025",
    source: "IN Magazine",
    title: "Azur Cover dans le numéro spécial \"Born to be Boss\"",
    excerpt:
      "Le IN Magazine nous fait l'honneur de nous inviter dans son nouveau numéro spécial \"Born to be Boss\". Une belle reconnaissance qui met en lumière notre engagement à innover et à faire la différence dans notre secteur.",
  },
  {
    date: "2024",
    source: "Échange officiel",
    title: "Présentation à Éric Pauget, Député des Alpes-Maritimes",
    excerpt:
      "Nos solutions innovantes anti-chaleur ont retenu l'attention de Monsieur Éric Pauget, Député des Alpes-Maritimes. Un échange constructif où nous avons présenté nos technologies écoresponsables, conçues pour réduire la chaleur et améliorer l'efficacité énergétique des bâtiments.",
  },
  {
    date: "2024",
    source: "Partenariat",
    title: "Alain Bernard rejoint Azur Cover",
    excerpt:
      "Avec le soutien d'Alain Bernard, symbole d'excellence et de détermination, Azur Cover s'engage dans une mission ambitieuse : décarboner nos infrastructures pour limiter le réchauffement climatique. En alliant technologie de pointe et respect de l'environnement, nous œuvrons chaque jour pour une planète plus durable.",
  },
  {
    date: "2024",
    source: "Nice-Matin",
    title: "À 21 ans, les Antibois Théo et Tony lancent Azur Cover",
    excerpt:
      "À 21 ans, les Antibois Théo et Tony viennent de créer leur entreprise innovante : l'application d'une peinture miracle, économique et écologique. Ils attendaient ce moment depuis longtemps.",
  },
];
