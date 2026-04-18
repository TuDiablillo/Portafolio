import { SectionHeading } from "@/components/sections/section-heading";

const projects = [
  {
    year: "2026",
    title: "GoldMax",
    description:
      "Plataforma de gestión de tickets: app iOS en SwiftUI, backend Node + Express + PostgreSQL y dashboard web.",
    tech: ["Swift", "Node", "Express", "PostgreSQL"],
    href: "https://github.com/TuDiablillo/GoldMax-Backend",
  },
  {
    year: "2026",
    title: "PackGo",
    description:
      "API logística en Fastify + Drizzle, app iOS nativa y documentación con Mintlify.",
    tech: ["Fastify", "Drizzle", "SwiftUI", "PostgreSQL"],
    href: "https://github.com/TuDiablillo/packgo-api",
  },
  {
    year: "2026",
    title: "EIE Farmacia",
    description:
      "Sistema de gestión para farmacia: backend API, panel web y app iOS.",
    tech: ["Node", "React", "Swift", "PostgreSQL"],
    href: "https://github.com/TuDiablillo/eie-farmacia",
  },
  {
    year: "2026",
    title: "IronLock",
    description:
      "Bot de seguridad multi-servidor para Discord con dashboard web.",
    tech: ["TypeScript", "Discord.js", "React"],
    href: "https://github.com/TuDiablillo/IronLock",
  },
];

export function Work() {
  return (
    <section
      id="proyectos"
      className="py-28 md:py-36 px-6 md:px-8 border-t border-zinc-900"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          number="02"
          label="Proyectos"
          title="Trabajo seleccionado."
        />
        <ul className="divide-y divide-zinc-900 -mx-2">
          {projects.map((p) => (
            <li key={p.title}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-8 px-2 rounded-sm transition-colors hover:bg-zinc-950/60"
              >
                <div className="flex items-baseline justify-between gap-6 mb-3">
                  <h3 className="text-xl md:text-2xl font-normal text-zinc-100">
                    {p.title}
                  </h3>
                  <span className="font-mono text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors whitespace-nowrap">
                    {p.year}{" "}
                    <span className="inline-block group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </span>
                </div>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-zinc-500 border border-zinc-800 rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-10 font-mono text-xs text-zinc-600">
          Más en{" "}
          <a
            href="https://github.com/TuDiablillo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-100 underline underline-offset-4 decoration-zinc-700 transition-colors"
          >
            github.com/TuDiablillo
          </a>
          .
        </p>
      </div>
    </section>
  );
}
