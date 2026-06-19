"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/site-content";

export default function Projects() {
  return (
    <div className="min-h-screen bg-white px-6 pb-24 pt-32 text-[#111318]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-sm font-medium uppercase text-accent">Projects</p>
          <h1 className="text-5xl font-light leading-[1.03] md:text-7xl">Experiments and product ideas.</h1>
          <p className="mt-7 max-w-3xl text-lg font-light leading-8 text-[#4c5562] md:text-xl">
            Learning projects and prototypes, presented honestly as experiments instead of inflated startup claims.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="grid gap-8 rounded-lg bg-[#f5f7fb] p-6 shadow-[0_18px_50px_rgba(17,19,24,0.055)] md:grid-cols-[0.38fr_1fr] md:p-8"
            >
              <div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#606873]">{project.status}</span>
                <h2 className="mt-6 text-4xl font-light">{project.title}</h2>
              </div>
              <div>
                <p className="text-lg font-light leading-8 text-[#4c5562]">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-[#27303a]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
