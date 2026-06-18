"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/site-content";

export default function Projects() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#f6f9fc] px-6 pb-24 pt-32 text-[#0d253d]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[410px] bg-[radial-gradient(circle_at_14%_8%,rgba(245,233,212,0.95),transparent_18rem),radial-gradient(circle_at_54%_4%,rgba(185,185,249,0.65),transparent_20rem),radial-gradient(circle_at_90%_8%,rgba(234,34,97,0.16),transparent_18rem),linear-gradient(90deg,#f5e9d4,#f6f9fc)]" />
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-4xl"
        >
          <p className="mb-4 text-sm font-medium uppercase text-accent">Projects</p>
          <h1 className="text-5xl font-light leading-[1.03] text-[#0d253d] md:text-6xl">Experiments and product ideas.</h1>
          <p className="mt-6 max-w-3xl text-lg font-light leading-8 text-[#273951] md:text-xl">
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
              className="flex min-h-[360px] flex-col rounded-xl bg-white p-6 shadow-[0_12px_34px_rgba(13,37,61,0.06)] ring-1 ring-[#edf2f7]"
            >
              <span className="w-fit rounded-full bg-[#b9b9f9] px-3 py-1 text-xs font-medium uppercase text-[#4434d4]">{project.status}</span>
              <h2 className="mt-7 text-3xl font-light text-[#0d253d]">{project.title}</h2>
              <p className="mt-4 leading-7 text-[#64748d]">{project.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full bg-[#f6f9fc] px-3 py-1 text-sm font-medium text-[#273951]">
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
