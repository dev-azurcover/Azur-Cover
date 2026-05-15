"use client";

import { useState, type FormEvent } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "opened" | "copied" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const company = String(fd.get("company") ?? "");
    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const phone = String(fd.get("phone") ?? "");
    const city = String(fd.get("city") ?? "");
    const project = String(fd.get("project") ?? "");
    const message = String(fd.get("message") ?? "");

    const subject = `Demande d'audit — ${company || name || "site web"}`;
    const body = [
      `Entreprise : ${company}`,
      `Nom : ${name}`,
      `Email : ${email}`,
      phone && `Téléphone : ${phone}`,
      city && `Ville du bâtiment : ${city}`,
      project && `Type de projet : ${project}`,
      "",
      "Message :",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Try to open the user's mail client
    const win = window.open(mailto, "_self");
    if (win === null) {
      // Popup blocked or no handler — fallback to copy
      void copyToClipboard(`${site.email}\n\n${subject}\n\n${body}`);
      setStatus("copied");
    } else {
      setStatus("opened");
    }
  };

  const copyEmailOnly = async () => {
    const ok = await copyToClipboard(site.email);
    setStatus(ok ? "copied" : "error");
  };

  return (
    <form onSubmit={handleSubmit} className="lg:col-span-7">
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

      <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
        <Button arrow>Envoyer ma demande</Button>
        <button
          type="button"
          onClick={copyEmailOnly}
          className="text-sm text-muted underline-grow hover:text-ink"
        >
          Ou copier l&apos;email
        </button>
      </div>

      <div
        role="status"
        aria-live="polite"
        className={cn(
          "mt-6 text-sm transition-opacity duration-300",
          status === "idle" ? "opacity-0" : "opacity-100"
        )}
      >
        {status === "opened" && (
          <p className="text-ink">
            Votre client mail s&apos;ouvre avec le message pré-rempli — il ne
            reste qu&apos;à valider l&apos;envoi.
          </p>
        )}
        {status === "copied" && (
          <p className="text-ink">
            Email copié dans le presse-papier. Vous pouvez nous écrire à{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-azur-deep hover:underline"
            >
              {site.email}
            </a>
            .
          </p>
        )}
        {status === "error" && (
          <p className="text-ink">
            Impossible de copier l&apos;email automatiquement. Notre adresse :{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-azur-deep hover:underline"
            >
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to legacy attempt
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
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
