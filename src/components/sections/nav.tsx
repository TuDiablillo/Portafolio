export function Nav() {
  const items = [
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#stack", label: "Stack" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/60 border-b border-zinc-900">
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <a
          href="#inicio"
          className="font-mono text-sm text-zinc-100 tracking-tight"
          aria-label="Ir al inicio"
        >
          TD<span className="text-zinc-600">/</span>
        </a>
        <div className="hidden sm:flex items-center gap-6 font-mono text-xs text-zinc-500">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="hover:text-zinc-100 transition-colors"
            >
              {it.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:loscazafortunanetwork.srl@gmail.com"
          className="font-mono text-xs text-zinc-300 hover:text-white transition-colors border border-zinc-800 hover:border-zinc-600 rounded-full px-3 py-1.5"
        >
          Contactar →
        </a>
      </div>
    </nav>
  );
}
