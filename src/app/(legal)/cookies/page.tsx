import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Politique cookies",
  description: "Politique de cookies — Azur Cover.",
  alternates: { canonical: "/cookies" },
};

// Source : structure et contenu adaptés depuis la page /politique-de-cookies
// du site live, simplifiés pour refléter le fait qu'aucun cookie de mesure
// d'audience ou publicitaire n'est déposé sur la version actuelle du site.
export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="Politique cookies."
      lead="Cette politique décrit l'usage que nous faisons des cookies et autres technologies similaires sur le site azurcover.com."
      blocks={[
        {
          heading: "1. Qu'est-ce qu'un cookie ?",
          paragraphs: [
            "Un cookie est un petit fichier composé de lettres et de chiffres, téléchargé sur votre ordinateur lorsque vous accédez à certains sites Web. Les cookies permettent à un site de reconnaître votre navigateur d'une visite à l'autre.",
            "Les cookies que nous déposons servent uniquement à améliorer la convivialité du site (mémoriser vos préférences d'accessibilité, par exemple).",
          ],
        },
        {
          heading: "2. Pourquoi utilisons-nous des cookies ?",
          paragraphs: [
            "Sur la version actuelle du site, les seuls cookies que nous utilisons sont strictement nécessaires au fonctionnement technique : sécurité (prévention CSRF), préférences d'affichage et accessibilité.",
            "Aucun cookie de mesure d'audience, de publicité ou de profilage n'est déposé sans votre consentement explicite. Si une telle solution est ajoutée à l'avenir (par exemple un outil d'analyse), un bandeau de consentement apparaîtra avant tout dépôt.",
          ],
        },
        {
          heading: "3. Cookies tiers",
          paragraphs: [
            "L'embed Google Maps présent sur la page Contact est susceptible de déposer des cookies tiers par Google. Vous pouvez les bloquer via les paramètres de votre navigateur ou en n'interagissant pas avec la carte.",
            "La vidéo de présentation est hébergée localement, aucun cookie tiers n'est déposé pour la lire.",
          ],
        },
        {
          heading: "4. Vos choix",
          paragraphs: [
            "Pour en savoir plus sur les cookies (comment voir lesquels sont déposés, comment les supprimer ou les bloquer), consultez par exemple https://www.allaboutcookies.org/fr/.",
            "Vous pouvez également empêcher votre navigateur d'accepter les cookies en modifiant les paramètres concernés. Vous trouverez ces paramètres dans le menu \"Préférences\" ou \"Paramètres\" de votre navigateur (Chrome, Firefox, Safari, Edge).",
            "La suppression ou le blocage des cookies peut affecter le fonctionnement de certaines parties du site.",
          ],
        },
        {
          heading: "5. Mises à jour",
          paragraphs: [
            "Nous pouvons mettre à jour cette politique en matière de cookies à tout moment. Nous vous encourageons à consulter régulièrement cette page pour obtenir les dernières informations.",
          ],
        },
      ]}
    />
  );
}
