import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité d'Azur Cover : données personnelles, RGPD, cookies.",
  alternates: { canonical: "/confidentialite" },
};

// Source : la page /politique-de-confidentialité du site live ne contient
// qu'un modèle Wix générique. Ce contenu est rédigé selon les obligations
// RGPD applicables aux sites vitrine français.
export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Données personnelles"
      title="Politique de confidentialité."
      lead="Azur Cover s'engage à protéger les données personnelles que vous nous confiez, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés."
      blocks={[
        {
          heading: "1. Responsable du traitement",
          paragraphs: [
            `Le responsable du traitement des données personnelles collectées sur le site ${site.url} est Azur Cover, dont le siège social est situé ${site.address.full}.`,
            `Pour toute question relative à vos données : ${site.email}.`,
          ],
        },
        {
          heading: "2. Données que nous collectons",
          paragraphs: [
            "Lorsque vous nous contactez via le formulaire de la page Contact ou directement par email, nous collectons les informations suivantes : nom, prénom, entreprise, adresse email, téléphone, ville du bâtiment concerné, type de projet et contenu de votre message.",
            "Aucune donnée personnelle n'est collectée à votre insu lors de la simple consultation des pages du site.",
          ],
        },
        {
          heading: "3. Finalités",
          paragraphs: [
            "Vos données sont utilisées exclusivement pour : répondre à votre demande, vous établir un devis ou un planning d'intervention, et assurer le suivi commercial associé.",
            "Elles ne sont jamais cédées, louées ou revendues à des tiers à des fins commerciales.",
          ],
        },
        {
          heading: "4. Durée de conservation",
          paragraphs: [
            "Vos données sont conservées 3 ans à compter du dernier contact actif, sauf demande explicite de suppression de votre part ou obligation légale de conservation plus longue (par exemple comptable).",
          ],
        },
        {
          heading: "5. Vos droits",
          paragraphs: [
            "Vous disposez des droits suivants sur vos données personnelles :",
            "• Droit d'accès, de rectification et de mise à jour ;",
            "• Droit d'effacement de vos données ;",
            "• Droit d'opposition au traitement ;",
            "• Droit de limitation du traitement ;",
            "• Droit à la portabilité de vos données ;",
            "• Droit de définir des directives sur le sort de vos données après votre décès.",
            `Pour exercer ces droits, écrivez à ${site.email}. Nous nous engageons à vous répondre sous un délai d'un mois maximum.`,
            "Vous pouvez également introduire une réclamation auprès de la CNIL (https://www.cnil.fr).",
          ],
        },
        {
          heading: "6. Sécurité",
          paragraphs: [
            "Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l'usage abusif, l'accès non autorisé, la divulgation, l'altération ou la destruction.",
          ],
        },
        {
          heading: "7. Cookies",
          paragraphs: [
            "Pour plus d'informations sur les cookies utilisés, consultez notre Politique cookies.",
          ],
        },
      ]}
    />
  );
}
