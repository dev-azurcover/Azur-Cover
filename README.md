# Azur Cover — Site v3

Refonte complète **azurcover.com**, posture industrielle premium.
Stack : **Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind v4 · GSAP MotionPath · Swiper**.

22 routes statiques générées au build, contenu réel scrapé depuis le site live.

---

## Démarrage

```bash
pnpm install
bash scripts/download-assets.sh   # rapatrie images + vidéo depuis Wix CDN
pnpm dev                          # http://localhost:3000
pnpm build                        # build production (Turbopack)
pnpm start                        # serveur production local
pnpm lint
```

Node ≥ 20 requis. macOS recommandé pour `sips` (le script down-sample les images > 2 Mo automatiquement).

---

## Routes générées

| Route                              | Type     | Description                                |
| ---------------------------------- | -------- | ------------------------------------------ |
| `/`                                | Static   | Landing — hero, marquee, carrousel, etc.   |
| `/expertises`                      | Static   | Index des 4 expertises                     |
| `/expertises/etancheite`           | SSG      | Étanchéité — 45 ans expertise, 3 techno     |
| `/expertises/cool-roofing`         | SSG      | Aérogel silice, NASA, B-ROOF T3            |
| `/expertises/azur-reflect`         | SSG      | Vernis vitrages, 99% UV, 90% IR             |
| `/expertises/autres`               | SSG      | Désamiantage SS4, Laque Solaire, peinture  |
| `/realisations`                    | Static   | Index 12 chantiers récents                 |
| `/realisations/promocash`          | SSG      | 2 700 m² Cool Roofing en 3 semaines        |
| `/realisations/ecole-cannes`       | SSG      | Azur Reflect, mesures sondes vs témoins    |
| `/realisations/netto-grasse`       | SSG      | + 9 autres études de cas                    |
| `/qui-sommes-nous`                 | Static   | Histoire, 3 piliers (expertise/relation/innovation) |
| `/presse`                          | Static   | IN Magazine, Éric Pauget, Alain Bernard    |
| `/faq`                             | Static   | 14 questions structurées par catégorie     |
| `/contact`                         | Static   | Formulaire complet + map embed             |
| `/mentions-legales` `/cgv` `/confidentialite` `/cookies` | Static | Pages légales |

---

## Architecture

```
src/
├── app/
│   ├── layout.tsx                       # fonts, metadata, JSON-LD
│   ├── page.tsx                         # composition landing
│   ├── opengraph-image.tsx              # OG dynamique 1200×630
│   ├── globals.css                      # design tokens (Tailwind v4 @theme)
│   ├── expertises/
│   │   ├── page.tsx                     # index 4 expertises
│   │   └── [slug]/page.tsx              # détail (généré statiquement)
│   ├── realisations/
│   │   ├── page.tsx                     # index 12 chantiers
│   │   └── [slug]/page.tsx              # détail (généré statiquement)
│   ├── qui-sommes-nous/page.tsx
│   ├── faq/page.tsx
│   ├── presse/page.tsx
│   ├── contact/page.tsx
│   └── (legal)/                         # group route layout shared
│       ├── layout.tsx
│       ├── mentions-legales/page.tsx
│       ├── cgv/page.tsx
│       ├── confidentialite/page.tsx
│       └── cookies/page.tsx
├── components/
│   ├── layout/                          # Header, Footer, MobileDrawer
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ClientsMarquee.tsx
│   │   ├── Proposition.tsx
│   │   ├── SolutionsCarousel.tsx        # ⭐ pseudo-3D GSAP MotionPath full-width orbit
│   │   ├── SolutionsMobile.tsx          # fallback Swiper (< 1024px)
│   │   ├── VideoSection.tsx
│   │   ├── Sectors.tsx
│   │   ├── Realisations.tsx
│   │   ├── Methodology.tsx
│   │   ├── Contact.tsx
│   │   ├── PageHero.tsx                 # shared hero for sub-pages
│   │   └── LegalPage.tsx                # shared legal layout
│   ├── ui/                              # Button, Container, Eyebrow
│   └── motion/                          # ScrollReveal, BgHolder
├── content/                             # données 100% éditables
│   ├── site.ts                          # email, téléphones, adresse, nav
│   ├── expertises.ts                    # 4 expertises × hero/problem/solution/KPIs/sections/bullets
│   ├── clients.ts                       # 13 logos (PNG transparents)
│   ├── sectors.ts                       # Industrie / Tertiaire / Collectivités
│   ├── realisations.ts                  # 12 chantiers détaillés
│   ├── methodology.ts                   # 4 étapes 01-04
│   ├── about.ts                         # philosophie + 3 piliers
│   ├── faq.ts                           # 14 Q/R par catégorie
│   └── presse.ts                        # 4 mentions presse
├── lib/utils.ts
└── scripts/
    └── download-assets.sh               # idempotent
```

### Comment éditer le contenu

| Quoi                          | Où                              |
| ----------------------------- | ------------------------------- |
| Email, téléphones, adresse, nav | `src/content/site.ts`         |
| Détail des 4 expertises       | `src/content/expertises.ts`     |
| Logos clients (marquee)       | `src/content/clients.ts`        |
| Cards Secteurs                | `src/content/sectors.ts`        |
| 12 réalisations               | `src/content/realisations.ts`   |
| Étapes méthodologie           | `src/content/methodology.ts`    |
| Histoire / piliers            | `src/content/about.ts`          |
| FAQ                           | `src/content/faq.ts`            |
| Presse                        | `src/content/presse.ts`         |
| Méta SEO + JSON-LD            | `src/app/layout.tsx`            |
| Pages légales                 | `src/app/(legal)/`              |

---

## Direction artistique

### Palette (5 tokens + 1 accent)

| Token              | Valeur     | Usage                                        |
| ------------------ | ---------- | -------------------------------------------- |
| `--color-ink`      | `#0a0a0b`  | Texte principal                              |
| `--color-graphite` | `#1d1d1f`  | Sections sombres + footer                    |
| `--color-muted`    | `#6e6e73`  | Texte secondaire                             |
| `--color-line`     | `#d2d2d7`  | Bordures fines                               |
| `--color-bg`       | `#fbfbfd`  | Fond clair                                   |
| `--color-azur`     | `#00a6a6`  | Accent unique (3 occurrences max / viewport) |

### Typographie (UNE famille)

- **Inter Variable** (locale, `public/fonts/InterVariable.woff2`) — weight 100→900 + italic
- **JetBrains Mono** (locale) — labels/eyebrows uniquement

### Animations

- Easing global : `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)
- Carrousel solutions desktop : **GSAP 3.15 + MotionPathPlugin**, 4 planètes le long d'une courbe SVG full-width avec dots+labels sous chaque position, autoplay 7 s + chrono circulaire, contrôles play/pause/prev/next centrés sous l'orbite, clavier ←/→
- Carrousel mobile + Réalisations : **Swiper 12** (modules A11y + Keyboard)
- `prefers-reduced-motion` désactive l'autoplay et raccourcit les transitions

### Logos clients

Tous traités via Pillow pour fond transparent (`scripts/clean_logos.py` à conserver pour ré-update si besoin) — nécessaire pour un rendu propre sur la marquee blanc-gris-clair.

---

## Vidéo

`public/video/` contient :

- `azur-cover-presentation.mp4` (1080p source, 21 Mo)
- `azur-cover-presentation-720p.mp4` (720p mobile, 6,4 Mo)
- `azur-cover-poster.jpg` (frame à 3 s)

---

## Déploiement Vercel

```bash
pnpm dlx vercel        # preview
pnpm dlx vercel --prod # production
```

Aucune variable d'environnement requise.

---

## Accessibilité

- Lang `fr`, skip link, focus visible global, contraste WCAG AA
- Carrousel solutions : `role=tablist` / `aria-selected` + clavier ←/→
- `prefers-reduced-motion` respecté
- Marquee logos désactivé sur mobile (grille statique 3 colonnes)
- Tap targets ≥ 44 px

---

## Limites connues / à valider

- **Téléphones et SIRET** : valeurs prises du brief, à confirmer client.
- **Mapping image ↔ contenu** : certaines photos de réalisations partagent la même source car le site live ne fournit pas de visuel dédié pour chacune. À enrichir.
- **URLs réseaux sociaux** dans `src/content/site.ts` : à vérifier (LinkedIn, Instagram, TikTok).
- **CMS / cookie banner / analytics** : aucun par défaut.
- **Lighthouse jamais mesuré formellement** — viser ≥ 95 desktop / ≥ 90 mobile via Vercel Analytics une fois en prod.

---

Site conçu par Renew Editing.
