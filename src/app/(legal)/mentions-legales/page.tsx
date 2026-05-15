import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site azurcover.com — éditeur, hébergement, propriété intellectuelle.",
};

export default function MentionsLegales() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Mentions légales."
      blocks={[
        {
          heading: "Éditeur",
          paragraphs: [
            `Le site ${site.url} est édité par Azur Cover.`,
            `Siège social : ${site.address.full}, ${site.address.country}.`,
            `Email : ${site.email} — Téléphone : ${site.phones[0]}.`,
            `Forme juridique, capital social, SIRET et numéro de TVA : à compléter par l'éditeur.`,
            `Directeur de la publication : représentant légal de Azur Cover.`,
          ],
        },
        {
          heading: "Hébergement",
          paragraphs: [
            "Site hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.",
          ],
        },
        {
          heading: "Propriété intellectuelle",
          paragraphs: [
            "L'ensemble des contenus présents sur ce site (textes, images, vidéos, logos, graphismes) est la propriété exclusive d'Azur Cover ou de ses partenaires, et est protégé par le droit français et international de la propriété intellectuelle.",
            "Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, est strictement interdite sans autorisation écrite préalable.",
          ],
        },
        {
          heading: "Données personnelles",
          paragraphs: [
            "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'opposition et d'effacement des données vous concernant. Pour exercer ces droits, écrivez à " +
              site.email +
              ".",
          ],
        },
      ]}
    />
  );
}
