import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Conditions Générales",
  description:
    "Conditions générales applicables aux prestations Azur Cover : étanchéité, Cool Roofing, Azur Reflect.",
  alternates: { canonical: "/cgv" },
};

// Le site live d'Azur Cover ne contient pas de page CGV publiée. Les
// conditions ci-dessous sont fournies à titre informatif et seront
// formalisées dans le devis pour chaque prestation. Les sections sensibles
// (acompte, pénalités, juridiction compétente) doivent être validées par
// un avocat avant publication définitive.
export default function CGVPage() {
  return (
    <LegalPage
      eyebrow="Conditions générales"
      title="Conditions générales."
      lead="Azur Cover réalise des prestations de services BTP sur devis. Les conditions définitives applicables à chaque chantier sont précisées dans le devis remis au client préalablement à toute intervention."
      blocks={[
        {
          heading: "1. Objet",
          paragraphs: [
            "Les présentes conditions générales s'appliquent à l'ensemble des prestations réalisées par Azur Cover : étanchéité, Cool Roofing, Azur Reflect, désamiantage, contrats d'entretien et prestations connexes.",
            "Elles sont complétées par les conditions particulières figurant dans chaque devis accepté par le client.",
          ],
        },
        {
          heading: "2. Devis",
          paragraphs: [
            "Tout devis émis par Azur Cover précise la nature des prestations, le matériel utilisé, le planning prévisionnel, le prix HT et TTC, et les modalités de paiement. Sa durée de validité est indiquée sur le devis (30 jours par défaut).",
            "L'acceptation du devis par le client (signature, bon de commande ou validation par email) vaut acceptation des présentes conditions générales et des conditions particulières du devis.",
          ],
        },
        {
          heading: "3. Délais",
          paragraphs: [
            "Les délais indiqués sont donnés à titre indicatif. Azur Cover s'engage à les respecter au mieux, sous réserve des conditions météorologiques, de la disponibilité des matériaux et de l'accessibilité du chantier.",
          ],
        },
        {
          heading: "4. Garanties",
          paragraphs: [
            "Les interventions d'étanchéité bénéficient de la garantie décennale légale (articles 1792 et suivants du Code civil).",
            "Les revêtements Cool Roofing et Azur Reflect bénéficient des garanties spécifiques précisées dans le devis.",
          ],
        },
        {
          heading: "5. Responsabilité",
          paragraphs: [
            "Azur Cover est assurée en responsabilité civile professionnelle et décennale.",
            "La responsabilité d'Azur Cover ne saurait être engagée pour des dommages liés à des défauts antérieurs non détectables lors du diagnostic, ni pour des cas de force majeure.",
          ],
        },
        {
          heading: "6. Règlement des litiges",
          paragraphs: [
            "Tout litige sera, à défaut de résolution amiable, soumis aux tribunaux compétents du ressort du siège social d'Azur Cover.",
            `Pour toute question relative à un devis ou à une intervention en cours : ${site.email}.`,
          ],
        },
      ]}
    />
  );
}
