import React from 'react';
import TimelineItem from './TimelineItem';
import { useTranslation } from "react-i18next";

export default function Timeline() {
  const { t } = useTranslation();
   const experiences = t("experience", { returnObjects: true });
  const ITEMS = Object.entries(experiences).map(([key, exp], index) => ({
    id: index + 1,
    title: exp.title,
    org: exp.company,
    location: exp.location, // fallback if missing
    start: exp.date_start,
    end: exp.date_end,
    desc: exp.desc
  }));





  return (
    <section id="cv" className="py-12 reveal">
      <h2 className="text-2xl font-semibold mb-6">{t("nav.exp")}</h2>
      <div className="space-y-6">
        {ITEMS.map(item => (
          <TimelineItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
