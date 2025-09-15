import React from 'react';
import PropTypes from 'prop-types';

export default function TimelineItem({ title, org, location, start, end, desc }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="mt-1">
        <div className="w-3 h-3 rounded-full bg-primary-600" />
      </div>
      <div>
        <div className="flex items-baseline gap-4">
          <h3 className="font-semibold">{title}</h3>
          
          <span className="text-sm text-gray-500 dark:text-gray-400">{org} — {location}</span>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{start} — {end}</div>

        <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
        {(Array.isArray(desc) ? desc : [desc]).map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
      </div>
    </div>
  )}
    


TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  org: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  desc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
};

