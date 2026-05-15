import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Demandez un audit gratuit. Nos équipes se déplacent partout en France. Réponse sous 48 h.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Contact"
          title="Parlons de votre projet."
          lead="Vous décrivez votre bâtiment. Nous revenons sous 48 h avec une estimation de gains thermiques et un planning d'intervention. Le diagnostic est gratuit et sans engagement."
        />

        <section className="pb-[clamp(120px,18vw,200px)]">
          <Container>
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
              {/* Form */}
              <form
                action={`mailto:${site.email}`}
                method="post"
                encType="text/plain"
                className="lg:col-span-7"
              >
                <Eyebrow>Demande d&apos;audit</Eyebrow>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field label="Entreprise" name="company" required />
                  <Field label="Nom & prénom" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Téléphone" name="phone" type="tel" />
                  <Field label="Ville du bâtiment" name="city" full />
                  <Select
                    label="Type de projet"
                    name="project"
                    full
                    options={[
                      "Cool Roofing toiture",
                      "Azur Reflect vitrages",
                      "Étanchéité",
                      "Désamiantage / Laque Solaire",
                      "Autre / Je ne sais pas encore",
                    ]}
                  />
                  <Textarea
                    label="Décrivez votre besoin"
                    name="message"
                    placeholder="Surface approximative, contraintes, planning souhaité…"
                  />
                </div>

                <div className="mt-10 flex items-center gap-6">
                  <Button arrow>Envoyer ma demande</Button>
                  <p className="text-xs text-muted">
                    Vous serez contacté sous 48 h.
                  </p>
                </div>
              </form>

              {/* Coordinates */}
              <aside className="lg:col-span-5 lg:border-l lg:border-line/60 lg:pl-16">
                <Eyebrow>Coordonnées</Eyebrow>
                <dl className="mt-10 space-y-8">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                      Adresse
                    </dt>
                    <dd className="mt-2 text-ink" style={{ fontSize: "1.0625rem", lineHeight: 1.5 }}>
                      {site.address.street}
                      <br />
                      {site.address.postal} {site.address.city}, {site.address.country}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                      Téléphone
                    </dt>
                    <dd className="mt-2 space-y-1">
                      {site.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s/g, "")}`}
                          className="block text-ink hover:text-azur-deep"
                          style={{ fontSize: "1.0625rem" }}
                        >
                          {p}
                        </a>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                      Email
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={`mailto:${site.email}`}
                        className="text-ink hover:text-azur-deep"
                        style={{ fontSize: "1.0625rem" }}
                      >
                        {site.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                      Zone d&apos;intervention
                    </dt>
                    <dd className="mt-2 text-ink" style={{ fontSize: "1.0625rem", lineHeight: 1.5 }}>
                      France entière. Nos équipes se déplacent partout pour les diagnostics et chantiers.
                    </dd>
                  </div>
                </dl>

                <div className="relative mt-10 aspect-square w-full overflow-hidden rounded-md border border-line/60 bg-white">
                  <iframe
                    src={site.mapEmbed}
                    title={`Carte — ${site.address.full}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </aside>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  full?: boolean;
};

function Field({ label, name, type = "text", required, full }: FieldProps) {
  return (
    <label className={full ? "md:col-span-2" : ""}>
      <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        {label}
        {required && " *"}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 block w-full border-b border-line/80 bg-transparent py-3 text-ink outline-none transition-colors duration-200 placeholder:text-muted/50 focus:border-ink"
        style={{ fontSize: "1.0625rem" }}
      />
    </label>
  );
}

function Textarea({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <label className="md:col-span-2">
      <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
      <textarea
        name={name}
        rows={5}
        placeholder={placeholder}
        className="mt-2 block w-full resize-y border-b border-line/80 bg-transparent py-3 text-ink outline-none transition-colors duration-200 placeholder:text-muted/50 focus:border-ink"
        style={{ fontSize: "1.0625rem" }}
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  full,
}: {
  label: string;
  name: string;
  options: string[];
  full?: boolean;
}) {
  return (
    <label className={full ? "md:col-span-2" : ""}>
      <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="mt-2 block w-full border-b border-line/80 bg-transparent py-3 text-ink outline-none transition-colors duration-200 focus:border-ink"
        style={{ fontSize: "1.0625rem" }}
      >
        <option value="" disabled>
          Sélectionner…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
