import { SectionHeading } from "@/components/sections/section-heading";

const links = [
  {
    label: "email",
    value: "loscazafortunanetwork.srl@gmail.com",
    href: "mailto:loscazafortunanetwork.srl@gmail.com",
  },
  {
    label: "github",
    value: "@TuDiablillo",
    href: "https://github.com/TuDiablillo",
  },
];

export function Contact() {
  return (
    <section
      id="contacto"
      className="py-28 md:py-36 px-6 md:px-8 border-t border-zinc-900"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          number="04"
          label="Contacto"
          title="¿Tienes un proyecto en mente?"
        />
        <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-2xl">
          Abierto a colaboraciones, consultoría y roles senior en equipos
          que construyen productos serios. Respondo en menos de 24h.
        </p>
        <ul className="space-y-3 font-mono text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  l.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group inline-flex items-center gap-4 text-zinc-300 hover:text-white transition-colors"
              >
                <span className="text-zinc-600 w-20">{l.label}</span>
                <span className="underline underline-offset-4 decoration-zinc-700 group-hover:decoration-white transition-colors">
                  {l.value}
                </span>
                <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-zinc-500">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
