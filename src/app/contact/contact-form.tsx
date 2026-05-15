"use client";

import { useState, type FormEvent } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      company: String(fd.get("company") ?? ""),
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      city: String(fd.get("city") ?? ""),
      project: String(fd.get("project") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(
          (typeof data?.error === "string" && data.error) ||
            "Échec de l'envoi. Réessayez ou écrivez-nous directement."
        );
        return;
      }
      setStatus("sent");
      // Reset the form after success
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setErrorMsg("Erreur réseau. Vérifiez votre connexion et réessayez.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="lg:col-span-7" noValidate>
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

        {/* Honeypot — hidden field, real users never fill it. Bots do. */}
        <label
          aria-hidden
          className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
          tabIndex={-1}
        >
          Site web
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
        <Button arrow>
          {status === "sending" ? "Envoi…" : "Envoyer ma demande"}
        </Button>
        <p className="text-xs text-muted">
          Vous serez contacté sous 48 h.
        </p>
      </div>

      <div
        role="status"
        aria-live="polite"
        className={cn(
          "mt-6 text-sm transition-opacity duration-300",
          status === "idle" || status === "sending"
            ? "opacity-0"
            : "opacity-100"
        )}
      >
        {status === "sent" && (
          <p className="text-ink">
            Demande reçue. Nous revenons vers vous sous 48 h.
          </p>
        )}
        {status === "error" && (
          <p className="text-ink">
            {errorMsg} Vous pouvez aussi nous écrire à{" "}
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
