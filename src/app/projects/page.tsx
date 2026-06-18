"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/site-content";

export default function Projects() {
  return (
    <div className="min-h-screen px-6 pb-24 pt-32">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-4xl"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-accent">Projects</p>
          <h1 className="text-5xl font-heading font-bold leading-[1.02] text-white md:text-7xl">Experiments and product ideas.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/58 md:text-xl">
            These are learning projects, prototypes, and explorations. They are not presented as finished companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-6"
            >
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/45">{project.status}</span>
              <h2 className="mt-6 text-3xl font-heading font-bold text-white">{project.title}</h2>
              <p className="mt-4 min-h-32 leading-7 text-white/58">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-md border border-white/10 bg-black/22 px-3 py-1 text-sm font-semibold text-white/62">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
