export const site = {
  name: "Azur Cover",
  shortDescription: "Performance thermique et étanchéité, sans compromis.",
  // Source : description scrapée depuis azurcover.com
  description:
    "Étanchéité, cool roofing, vernis anti-chaleur Azur Reflect pour vitrages. Solutions anti-chaleur et performance thermique pour vos bâtiments.",
  url: "https://www.azurcover.com",
  // Source : email récupéré depuis azurcover.com (footer)
  email: "contact@azur-cover.com",
  // Source : numéros récupérés depuis azurcover.com (page Contact)
  phones: ["+33 6 99 52 23 20", "+33 6 59 88 76 35"],
  address: {
    street: "2721 chemin de Saint-Claude",
    postal: "06600",
    city: "Antibes",
    country: "France",
    full: "2721 chemin de Saint-Claude, 06600 Antibes",
  },
  // Réseaux sociaux : à fournir par le client. Liens placeholders en attendant.
  social: {
    linkedin: "",
    instagram: "",
    tiktok: "",
  },
  mapEmbed:
    "https://www.google.com/maps?q=2721%20Chemin%20de%20Saint-Claude%2C%2006600%20Antibes&output=embed",
  mapDeepLink:
    "https://maps.apple.com/?q=2721+Chemin+de+Saint-Claude,+06600+Antibes",
  nav: [
    { label: "Expertises", href: "/expertises" },
    { label: "Réalisations", href: "/realisations" },
    { label: "À propos", href: "/qui-sommes-nous" },
    { label: "Presse", href: "/presse" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
