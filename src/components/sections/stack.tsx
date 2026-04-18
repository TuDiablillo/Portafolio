import { SectionHeading } from "@/components/sections/section-heading";

const groups: { label: string; items: string[] }[] = [
  {
    label: "Lenguajes",
    items: [
      "TypeScript",
      "JavaScript",
      "Swift",
      "Go",
      "Python",
      "Node.js",
      "SQL",
      "Bash",
    ],
  },
  {
    label: "Bases de datos",
    items: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "MongoDB",
      "DynamoDB",
      "Drizzle",
      "Prisma",
    ],
  },
  {
    label: "AWS",
    items: [
      "EC2",
      "S3",
      "Lambda",
      "RDS",
      "API Gateway",
      "CloudFront",
      "CloudWatch",
      "IAM",
      "SQS / SNS",
      "ECS",
    ],
  },
  {
    label: "Frameworks & tooling",
    items: [
      "SwiftUI",
      "Next.js",
      "React",
      "Fastify",
      "Express",
      "Docker",
      "GitHub Actions",
      "Vercel",
    ],
  },
];

export function Stack() {
  return (
    <section
      id="stack"
      className="py-28 md:py-36 px-6 md:px-8 border-t border-zinc-900"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading number="03" label="Stack" title="Herramientas." />
        <div className="space-y-10">
          {groups.map((g) => (
            <div
              key={g.label}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-8"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 pt-1">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs text-zinc-300 border border-zinc-800 rounded-full px-3 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
