import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${project.title}`}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl z-10 max-w-3xl w-full overflow-auto">
        <div className="p-4 flex justify-between items-start">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <button onClick={onClose} aria-label="Close project modal" className="text-gray-600 dark:text-gray-300">✕</button>
        </div>
        <div className="p-4 border-t border-gray-100 dark:border-gray-800">
          <img src={project.img} alt={project.title} className="w-full h-64 object-cover rounded" />
          <p className="mt-4 text-gray-700 dark:text-gray-300">{project.desc}</p>
          <div className="mt-4 flex gap-3">
            <a href={project.links.github} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded">Source</a>
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="px-4 py-2 bg-primary-600 text-white rounded">Live demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}
