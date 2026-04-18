"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center px-6 md:px-8 pt-24 pb-16"
    >
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">
            Senior Full-Stack Developer
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mb-8 text-zinc-50">
            TuDiablillo<span className="text-zinc-700">.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
            Diseño y construyo software end-to-end: apps iOS nativas,
            APIs en Node, Go y Python, bases de datos SQL/NoSQL, y
            arquitecturas serverless sobre AWS.
          </p>
          <div className="flex items-center gap-3 font-mono text-xs text-zinc-500">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400"></span>
            </span>
            <span className="uppercase tracking-[0.15em]">
              Disponible para proyectos
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
