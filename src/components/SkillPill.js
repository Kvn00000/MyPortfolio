import React from 'react';

export default function SkillPill({ name }) {
  return (
    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full border dark:border-gray-700">
      {name}
    </span>
  );
}
