import { SectionHeading } from "@/components/sections/section-heading";

export function About() {
  return (
    <section
      id="sobre-mi"
      className="py-28 md:py-36 px-6 md:px-8 border-t border-zinc-900"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          number="01"
          label="Sobre mí"
          title="Ingeniero senior, enfoque full-stack."
        />
        <div className="space-y-6 text-zinc-400 leading-relaxed text-lg max-w-2xl">
          <p>
            Construyo productos completos: desde la base de datos hasta la
            interfaz, desde iOS nativo hasta el despliegue en AWS. Código
            mantenible, decisiones justificadas, observabilidad desde el
            día uno.
          </p>
          <p>
            He liderado proyectos en{" "}
            <span className="text-zinc-200">fintech</span>,{" "}
            <span className="text-zinc-200">logística</span>,{" "}
            <span className="text-zinc-200">farmacia</span> y{" "}
            <span className="text-zinc-200">seguridad</span>. Elijo el
            stack según el problema, no según la moda.
          </p>
          <p>
            Trabajo desde{" "}
            <span className="font-mono text-sm text-zinc-300">
              LosCasaFotunasNetwork.SRL
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
