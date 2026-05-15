import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site azurcover.com — éditeur, hébergement, propriété intellectuelle.",
  alternates: { canonical: "/mentions-legales" },
};

// Source : la page /mentions-légales du site live ne contient à ce jour
// qu'un modèle Wix générique. Ce contenu est rédigé selon les obligations
// légales françaises (LCEN). Les champs entre crochets sont à compléter
// par l'éditeur avant publication.
export default function MentionsLegales() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Mentions légales."
      blocks={[
        {
          heading: "Éditeur du site",
          paragraphs: [
            `Le site ${site.url} est édité par Azur Cover.`,
            `Adresse : ${site.address.full}, ${site.address.country}.`,
            `Téléphone : ${site.phones[0]} · Email : ${site.email}.`,
            `Forme juridique, numéro SIREN/SIRET, capital social, numéro de TVA intracommunautaire et nom du directeur de publication : informations à compléter par l'éditeur.`,
          ],
        },
        {
          heading: "Hébergeur",
          paragraphs: [
            "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis. Téléphone : +1 (559) 288-7060.",
          ],
        },
        {
          heading: "Propriété intellectuelle",
          paragraphs: [
            "L'ensemble des contenus du site (textes, images, vidéos, logos, graphismes, code) est la propriété d'Azur Cover ou de ses partenaires, et est protégé par le droit français et international de la propriété intellectuelle.",
            "Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, est interdite sans autorisation écrite préalable d'Azur Cover.",
          ],
        },
        {
          heading: "Données personnelles",
          paragraphs: [
            "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'opposition, d'effacement et de portabilité des données vous concernant.",
            `Pour exercer ces droits, écrivez à ${site.email}.`,
            "Voir également notre Politique de confidentialité.",
          ],
        },
        {
          heading: "Règlement des litiges",
          paragraphs: [
            "Conformément aux articles L.616-1 et R.616-1 du code de la consommation, la Commission européenne fournit une plateforme de règlement en ligne des litiges accessible à l'adresse : https://ec.europa.eu/consumers/odr/.",
            "Azur Cover n'est ni disposée ni obligée à participer à une procédure de règlement des litiges devant un conseil d'arbitrage de la consommation.",
          ],
        },
        {
          heading: "Crédits",
          paragraphs: [
            "Conception et développement : Renew Editing.",
            "Photographies : Azur Cover et partenaires.",
          ],
        },
      ]}
    />
  );
}
