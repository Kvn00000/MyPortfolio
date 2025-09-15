import React from 'react';
import SkillPill from './SkillPill';
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  const SKILLS = {
    programming: ['Python', 'C#', 'Java', 'Javascript', 'C', 'NodeJS', 'Html'],
    frameworks: ['Unity','NumPy', 'NetworkX', 'Pygame', 'Matplotlib', 'Dash', 'Plotly',  'GAMA'],
    tools: ['Linux', 'Git', 'Agile', 'Scrum', 'LATEX', 'Canva', 'Jira', 'Confluence']
  };

  return (
    <section id="skills" className="py-12 reveal">
      <h2 className="text-2xl font-semibold mb-4">{t("skills.title", "Skills")}</h2>

      <div className="grid sm:grid-cols-3 gap-4">
        {Object.entries(SKILLS).map(([groupKey, list]) => (
          <div key={groupKey} className="p-4 rounded-lg border dark:border-gray-800">
            <h4 className="font-semibold mb-2">{t(`skills.${groupKey}`)}</h4>
            <div className="flex flex-wrap gap-2">
              {list.map(skillKey => (
                <SkillPill key={skillKey} name={skillKey} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
