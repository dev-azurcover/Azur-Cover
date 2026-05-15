import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité d'Azur Cover — données personnelles, RGPD, cookies.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Données personnelles"
      title="Politique de confidentialité."
      lead="Azur Cover s'engage à protéger vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD)."
      blocks={[
        {
          heading: "Données collectées",
          paragraphs: [
            "Lorsque vous nous contactez via le formulaire ou par email, nous collectons : nom, prénom, entreprise, email, téléphone, ville et description de votre projet.",
            "Ces données sont utilisées exclusivement pour répondre à votre demande et établir un devis. Elles ne sont jamais cédées à des tiers.",
          ],
        },
        {
          heading: "Conservation",
          paragraphs: [
            "Vos données sont conservées 3 ans à compter du dernier contact, sauf demande explicite de suppression de votre part.",
          ],
        },
        {
          heading: "Vos droits",
          paragraphs: [
            "Vous disposez des droits suivants sur vos données : accès, rectification, opposition, effacement, portabilité, limitation du traitement.",
            "Pour exercer ces droits, écrivez à " + site.email + ".",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "Le site n'utilise actuellement aucun cookie de mesure d'audience ou publicitaire. Les seuls cookies présents sont strictement nécessaires au fonctionnement du site.",
          ],
        },
      ]}
    />
  );
}
