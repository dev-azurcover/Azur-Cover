import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description:
    "Conditions générales de vente d'Azur Cover — interventions étanchéité, Cool Roofing, Azur Reflect.",
};

export default function CGVPage() {
  return (
    <LegalPage
      eyebrow="Conditions générales"
      title="Conditions Générales de Vente."
      lead="Les présentes conditions régissent les relations contractuelles entre Azur Cover et ses clients professionnels et publics."
      blocks={[
        {
          heading: "1. Objet",
          paragraphs: [
            "Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des prestations de services réalisées par Azur Cover : étanchéité, application de revêtements Cool Roofing, vernis anti-chaleur Azur Reflect, désamiantage, contrats d'entretien et prestations connexes.",
          ],
        },
        {
          heading: "2. Devis et acceptation",
          paragraphs: [
            "Tout devis émis par Azur Cover est valable 30 jours à compter de sa date d'émission. Sa validation par le client vaut acceptation des présentes CGV.",
            "Un acompte de 30 % est demandé à la signature du devis. Le solde est dû à la livraison du chantier.",
          ],
        },
        {
          heading: "3. Délais d'intervention",
          paragraphs: [
            "Les délais indiqués au devis sont donnés à titre indicatif. Azur Cover s'engage à respecter au mieux les délais convenus, sous réserve des conditions météorologiques et de la disponibilité des matériaux.",
          ],
        },
        {
          heading: "4. Garanties",
          paragraphs: [
            "Toutes les interventions d'étanchéité bénéficient de la garantie décennale, conformément à la réglementation en vigueur.",
            "Les revêtements Cool Roofing et Azur Reflect bénéficient d'une garantie spécifique précisée dans le devis.",
          ],
        },
        {
          heading: "5. Responsabilité",
          paragraphs: [
            "Azur Cover est assuré en responsabilité civile professionnelle. Notre responsabilité ne saurait être engagée pour les dommages liés à des défauts antérieurs non détectables lors du diagnostic.",
          ],
        },
        {
          heading: "6. Règlement des litiges",
          paragraphs: [
            "Tout litige relatif aux présentes CGV sera soumis aux tribunaux compétents du ressort du siège social d'Azur Cover, sauf disposition légale contraire.",
            "Pour toute question : " + site.email,
          ],
        },
      ]}
    />
  );
}
