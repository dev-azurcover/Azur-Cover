export type Solution = "Étanchéité" | "Cool Roofing" | "Azur Reflect" | "Multi-solutions";

export type Realisation = {
  slug: string;
  title: string;
  client: string;
  city: string;
  solution: Solution;
  surface?: string;
  duration: string;
  year: string;
  /** Carousel + card description (≤200 chars) */
  short: string;
  /** Long-form story for the dedicated page (markdown-friendly paragraphs) */
  story: string[];
  results?: { value: string; label: string }[];
  image: { src: string; alt: string };
};

export const realisations: Realisation[] = [
  {
    slug: "promocash",
    title: "Toiture PromoCash",
    client: "Promocash",
    city: "Grasse",
    solution: "Cool Roofing",
    surface: "2 700 m²",
    duration: "3 semaines",
    year: "2024",
    short:
      "Application Cool Roofing sur la toiture industrielle de l'enseigne. Réduction immédiate des températures de surface et baisse mesurée de la consommation climatisation.",
    story: [
      "L'entrepôt PromoCash de Grasse cumulait deux contraintes : une toiture de 2 700 m² très exposée au sud, et une climatisation poussée à fond pour préserver la chaîne du froid des produits frais.",
      "Notre équipe a appliqué le revêtement Cool Roofing à l'aérogel de silice sur l'intégralité de la toiture en bac acier. Trois semaines de chantier, sans aucune interruption d'activité — l'enseigne a continué d'opérer en parallèle.",
      "À la livraison, les températures de surface mesurées en plein été sont passées de 78 °C avant intervention à 28 °C après. Le contrat d'entretien annuel garantit le maintien des performances dans la durée.",
    ],
    results: [
      { value: "−50°C", label: "en surface de toiture" },
      { value: "2 700 m²", label: "traités en 3 semaines" },
    ],
    image: {
      src: "/images/realisations/promocash.jpg",
      alt: "Toiture industrielle Promocash après application Cool Roofing",
    },
  },
  {
    slug: "ecole-cannes",
    title: "École Jacqueline de Romilly",
    client: "Mairie de Cannes",
    city: "Cannes",
    solution: "Azur Reflect",
    duration: "2 semaines",
    year: "2024",
    short:
      "Application Azur Reflect sur les vitrages d'une école primaire. Mesures par sondes : 3 à 4 °C de moins dans les classes traitées par rapport aux classes témoins.",
    story: [
      "À l'école Jacqueline de Romilly de Cannes, les épisodes de forte chaleur rendaient les conditions d'enseignement quasiment impraticables. Face à l'urgence et à l'inconfort des élèves, les enseignants avaient dû improviser des solutions de fortune, allant jusqu'à installer des couvertures de survie sur les vitres.",
      "Pour valider l'efficacité de notre intervention, nous avons mis en place des sondes : comparaison en temps réel entre les classes traitées par Azur Reflect et des classes témoins non traitées (exposition identique).",
      "Les relevés ont été sans appel. Lors des pics de chaleur, nous avons enregistré une différence moyenne de 3 à 4 °C en faveur des classes équipées. Confort visuel : contrairement aux couvertures de survie, Azur Reflect préserve la lumière naturelle et la transparence du verre.",
    ],
    results: [
      { value: "−4°C", label: "vs classes témoins, en pic chaleur" },
      { value: "100%", label: "lumière naturelle préservée" },
    ],
    image: {
      src: "/images/realisations/ecole-cannes.jpg",
      alt: "École primaire à Cannes traitée au vernis Azur Reflect",
    },
  },
  {
    slug: "netto-grasse",
    title: "Toiture Netto",
    client: "Netto",
    city: "Grasse",
    solution: "Cool Roofing",
    surface: "1 800 m²",
    duration: "3 semaines",
    year: "2023",
    short:
      "Étanchéité réflective et Cool Roofing sur la toiture du magasin. Préservation de la chaîne du froid alimentaire et économies de climatisation immédiates.",
    story: [
      "Magasin alimentaire de 1 800 m² avec contrainte forte de chaîne du froid. La toiture montait à 75 °C en surface en pic d'été, contraignant la climatisation à tourner en continu et augmentant l'usure des compresseurs.",
      "Intervention combinée : reprise des points faibles d'étanchéité, puis application du revêtement Cool Roofing sur l'ensemble de la toiture. Trois semaines de chantier sans fermeture du magasin.",
    ],
    image: {
      src: "/images/realisations/netto.jpg",
      alt: "Toiture du magasin Netto après application Cool Roofing",
    },
  },
  {
    slug: "uexpress-saint-laurent",
    title: "Façade vitrée U Express",
    client: "U Express",
    city: "Saint-Laurent-du-Var",
    solution: "Azur Reflect",
    duration: "2 jours",
    year: "2024",
    short:
      "Vitrines commerciales traitées Azur Reflect. Stop chaleur sans perte de transparence — la visibilité commerciale reste intacte.",
    story: [
      "Situé près de Nice, ce U Express dispose d'une large devanture vitrée. Si cette visibilité est un atout commercial, elle exposait la zone d'entrée et les premiers rayons à un rayonnement solaire intense, augmentant la température intérieure et sollicitant la climatisation de manière excessive.",
      "Nos équipes ont procédé à l'application de la solution Azur Reflect sur l'intégralité de la façade vitrée. L'objectif : stopper la chaleur tout en conservant la transparence pour laisser voir l'intérieur du magasin aux passants.",
    ],
    image: {
      src: "/images/realisations/netto.jpg",
      alt: "Vitrines U Express traitées au vernis Azur Reflect",
    },
  },
  {
    slug: "chu-grasse",
    title: "CHU de Grasse",
    client: "Centre Hospitalier de Grasse",
    city: "Grasse",
    solution: "Azur Reflect",
    duration: "3 jours",
    year: "2024",
    short:
      "Vitrages d'un service du CHU traités Azur Reflect. Confort thermique pour les patients et le personnel soignant.",
    story: [
      "Intervention dans un établissement public de santé, avec contraintes opérationnelles fortes : aucune interruption possible des soins, fenêtres traitées depuis l'extérieur uniquement, absence totale d'odeur ou de nuisance.",
      "Trois jours de chantier, équipes formées au protocole hospitalier, validation à chaque étape par les services techniques de l'hôpital.",
    ],
    image: {
      src: "/images/realisations/promocash.jpg",
      alt: "Vitrages du CHU de Grasse traités au vernis Azur Reflect",
    },
  },
  {
    slug: "mairie-fayence",
    title: "Mairie de Fayence",
    client: "Mairie de Fayence",
    city: "Fayence",
    solution: "Cool Roofing",
    duration: "1 semaine",
    year: "2024",
    short:
      "Toiture de la mairie traitée Cool Roofing. Marché public, livraison conforme aux délais et au cahier des charges architectural.",
    story: [
      "Bâtiment communal classé en zone patrimoniale. Notre teinte blanc cassé respecte les contraintes d'urbanisme et d'intégration paysagère, tout en délivrant les performances réflectives attendues.",
      "Marché public mené dans les délais avec validation des Bâtiments de France.",
    ],
    image: {
      src: "/images/realisations/ecole-cannes.jpg",
      alt: "Toiture de la mairie de Fayence après Cool Roofing",
    },
  },
  {
    slug: "marcel-fils",
    title: "Marcel & Fils",
    client: "Marcel & Fils",
    city: "La Fare-les-Oliviers",
    solution: "Azur Reflect",
    duration: "1 jour",
    year: "2024",
    short:
      "Application express d'Azur Reflect sur les vitrages du magasin bio. Une journée d'intervention, zéro perturbation pour les clients.",
    story: [
      "Réseau de magasins bio, vitrines traitées sur la façade sud très exposée. Une journée d'intervention en horaires décalés.",
    ],
    image: {
      src: "/images/realisations/netto.jpg",
      alt: "Vitrines Marcel & Fils traitées Azur Reflect",
    },
  },
  {
    slug: "satoriz-antibes",
    title: "Satoriz Antibes",
    client: "Satoriz Magasins Bio",
    city: "Antibes",
    solution: "Azur Reflect",
    duration: "1 jour",
    year: "2024",
    short:
      "Vitrages du magasin bio antibois traités Azur Reflect. Confort des clients et des produits sensibles à la chaleur.",
    story: [
      "Magasin bio sur Antibes, vitrines exposées plein sud avec impact sur la conservation des produits frais en rayon. Intervention sur une journée, gain immédiat sur la régulation thermique.",
    ],
    image: {
      src: "/images/realisations/netto.jpg",
      alt: "Vitrines Satoriz Antibes traitées Azur Reflect",
    },
  },
  {
    slug: "intermarche-nice",
    title: "Intermarché Nice",
    client: "Intermarché",
    city: "Nice",
    solution: "Azur Reflect",
    duration: "2 jours",
    year: "2024",
    short:
      "Vitrines et façade d'un Intermarché niçois traitées Azur Reflect. Réduction immédiate de la sollicitation des climatisations.",
    story: [
      "Magasin Intermarché niçois, application sur la totalité des baies vitrées de la galerie. Deux jours d'intervention en planifiant les phases sur les zones non commerciales.",
    ],
    image: {
      src: "/images/realisations/netto.jpg",
      alt: "Vitrines Intermarché Nice traitées Azur Reflect",
    },
  },
  {
    slug: "vitrolles",
    title: "Commune de Vitrolles",
    client: "Ville de Vitrolles",
    city: "Vitrolles",
    solution: "Cool Roofing",
    duration: "1 semaine",
    year: "2024",
    short:
      "Toitures d'équipements publics municipaux traitées Cool Roofing. Marché public mené sous délais courts.",
    story: [
      "Marché public sur plusieurs équipements municipaux. Coordination avec les services techniques de la commune, livraison sous une semaine, mesures de performance documentées.",
    ],
    image: {
      src: "/images/realisations/promocash.jpg",
      alt: "Équipement public à Vitrolles traité Cool Roofing",
    },
  },
  {
    slug: "laboratoire-braja",
    title: "Laboratoire Braja Vesigné",
    client: "Groupe Braja",
    city: "Gardanne",
    solution: "Cool Roofing",
    duration: "1 semaine",
    year: "2024",
    short:
      "Toiture bac acier d'un laboratoire pharmaceutique traitée Cool Roofing. Préservation des conditions de température réglementaires en intérieur.",
    story: [
      "Laboratoire avec contraintes de température intérieure réglementées. Toiture bac acier de surface importante, exposée plein sud à Gardanne.",
      "Application du revêtement Cool Roofing sur l'ensemble de la toiture en une semaine. Suivi par sonde pour valider la stabilité thermique post-intervention.",
    ],
    image: {
      src: "/images/realisations/promocash.jpg",
      alt: "Toiture bac acier du Laboratoire Braja Vesigné",
    },
  },
  {
    slug: "ehpad-petit-paris",
    title: "EHPAD Le Petit Paris",
    client: "EHPAD Le Petit Paris",
    city: "Grasse",
    solution: "Azur Reflect",
    duration: "1 jour",
    year: "2024",
    short:
      "Vitrages d'un EHPAD traités Azur Reflect. Confort thermique pour les résidents, intervention en une journée.",
    story: [
      "Établissement accueillant des personnes âgées, particulièrement sensibles aux pics de chaleur estivale. Intervention en une journée, sans perturbation du quotidien des résidents.",
      "Le personnel a noté une amélioration immédiate du confort dans les chambres exposées au sud dès la fin de l'intervention.",
    ],
    image: {
      src: "/images/realisations/ecole-cannes.jpg",
      alt: "EHPAD Le Petit Paris à Grasse traité Azur Reflect",
    },
  },
];

export function getRealisation(slug: string) {
  return realisations.find((r) => r.slug === slug);
}
