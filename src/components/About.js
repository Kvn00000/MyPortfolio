import React from 'react';
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();

  return (
    <section id="about" className="py-12 reveal">
      <h2 className="text-2xl font-semibold mb-4">{t("nav.about")}</h2>
      <p className="text-gray-700 dark:text-gray-300 max-w-3xl">
        {t("about.bio")}
      </p>
    </section>
  );
}
