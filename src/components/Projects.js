import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  const { t } = useTranslation();

  const proj = t("projects", { returnObjects: true });
  const PROJECTS = Object.entries(proj).map(([key, p]) => ({
  id: key,
  title: p.title,
  desc: p.desc,
  tech: p.tech,
  img: p.img,
  video: p.video, // 👈 Add this line
  links: p.links,
}));

  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 2);

  return (
    <section id="projects" className="py-12 reveal">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        <AnimatePresence>
          {visibleProjects.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {PROJECTS.length > 2 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition"
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </section>
  );
}
