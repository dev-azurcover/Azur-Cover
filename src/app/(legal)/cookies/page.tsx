import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Politique cookies",
  description: "Politique cookies — Azur Cover.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="Politique cookies."
      lead="Le site azurcover.com n'utilise actuellement aucun cookie de mesure d'audience ou publicitaire."
      blocks={[
        {
          heading: "Cookies strictement nécessaires",
          paragraphs: [
            "Seuls les cookies indispensables au fonctionnement technique du site sont déposés (par exemple : préférences d'accessibilité, prévention CSRF). Aucun consentement n'est requis pour ces cookies, conformément à la réglementation.",
          ],
        },
        {
          heading: "Cookies tiers",
          paragraphs: [
            "L'embed de Google Maps sur la page Contact peut déposer des cookies par Google. Vous pouvez les bloquer via les paramètres de votre navigateur.",
            "La vidéo de présentation est hébergée localement — aucun cookie tiers n'est déposé.",
          ],
        },
        {
          heading: "Modifier votre choix",
          paragraphs: [
            "Vous pouvez à tout moment supprimer ou bloquer les cookies via les paramètres de votre navigateur (Chrome, Firefox, Safari, Edge…).",
          ],
        },
      ]}
    />
  );
}
