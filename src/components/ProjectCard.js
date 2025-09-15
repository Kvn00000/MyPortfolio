import React from 'react';
import { FaGithub } from 'react-icons/fa'; // install react-icons if not already

export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      {/* <button onClick={onOpen} className="text-left w-full"> */}
      <img
        src={process.env.PUBLIC_URL + '/' + project.img} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{project.title}</h3>
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded hover:bg-gray-700 transition"
            >
              <FaGithub size={14} />
              GitHub
            </a>
          )}
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {project.desc}
        </p>
        <div className="mt-3 flex gap-2 flex-wrap">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full border dark:border-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      {/* </button> */}
    </article>
  );
}
