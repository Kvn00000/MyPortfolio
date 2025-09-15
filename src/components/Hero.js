import React from 'react';
import  { useTranslation } from "react-i18next";
export default function Hero() {

  const { t } = useTranslation();


  return (
    <section id="hero" className="py-12 reveal">
      <div className="grid md:grid-cols-1 gap-8 items-center w-full">
      <div className="w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          {t("hero.name")}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          {t("hero.tagline")}
        </p>
        <p className="text-gray-700 dark:text-gray-200 mb-6 text-justify">
          {t("about.bio")}
        </p>


          {/* <div className="flex gap-3">
            <a
              href="/assets/KEVIN_DING_RESUME.pdf"
              className="inline-block px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              download
            >
              Download CV
            </a>
            <a
              href="mailto:REPLACE_ME_EMAIL"
              className="inline-block px-4 py-2 bg-primary-600 text-white rounded-md hover:opacity-95"
            >
              Contact via Email
            </a>
          </div> */}
        </div>

        {/* <div className="w-full">
          <div className="rounded-2xl bg-gradient-to-tr from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 shadow-lg">
            <img src="/assets/project-placeholder-1.webp" alt="Project placeholder" className="w-full rounded" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
