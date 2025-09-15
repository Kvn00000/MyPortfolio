import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const NAV = [
    { id: "cv", label: t("nav.exp") },
    { id: "skills", label: t("nav.skills") },
    { id: "projects", label: t("nav.projects") },
  ];

  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("prefers-dark");
    if (stored !== null) return stored === "true";
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("prefers-dark", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("prefers-dark", "false");
    }
  }, [dark]);

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-[var(--page-max-width)] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + tagline */}
        <div className="flex items-center gap-3">
          <div className="text-primary-600 font-semibold">Kevin DING</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {t("hero.tagline")}
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className="text-sm hover:text-primary-600 focus:outline-none"
            >
              {item.label}
            </button>
          ))}

          <a
            href="https://github.com/Kvn00000"
            target="_blank"
            rel="noreferrer"
            className="text-sm px-3 py-1 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-ding-56a3722a8/"
            target="_blank"
            rel="noreferrer"
            className="text-sm px-3 py-1 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            LinkedIn
          </a>
          <a
            href={`${t("pdf")}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm px-3 py-1 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            CV
          </a>

          {/* Dark mode */}
          <button
            onClick={() => setDark((prev) => !prev)}
            aria-label="Toggle dark mode"
            className="p-2 rounded focus:ring-2 focus:ring-primary-500"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          {/* Language toggle */}
          <button
            onClick={() => changeLanguage(i18n.language === "en" ? "fr" : "en")}
            className="px-3 py-1 rounded bg-indigo-500 text-white hover:bg-indigo-600"
          >
            {i18n.language === "en" ? "FR" : "EN"}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          {/* Dark mode */}
          <button
            onClick={() => setDark((prev) => !prev)}
            aria-label="Toggle dark mode"
            className="p-2 rounded focus:ring-2 focus:ring-primary-500"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          {/* Lang */}
          <button
            onClick={() => changeLanguage(i18n.language === "en" ? "fr" : "en")}
            className="px-2 py-1 rounded bg-indigo-500 text-white text-sm hover:bg-indigo-600"
          >
            {i18n.language === "en" ? "FR" : "EN"}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="p-2 rounded focus:ring-2 focus:ring-primary-500"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-14 right-4 bg-white dark:bg-gray-900 border rounded-lg p-4 shadow-md md:hidden">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToId(item.id);
                setMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 hover:text-primary-600"
            >
              {item.label}
            </button>
          ))}

          <a
            href="https://github.com/Kvn00000"
            target="_blank"
            rel="noreferrer"
            className="block w-full text-left px-3 py-2 hover:text-primary-600"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-ding-56a3722a8/"
            target="_blank"
            rel="noreferrer"
            className="block w-full text-left px-3 py-2 hover:text-primary-600"
          >
            LinkedIn
          </a>
          <a
            href={`${t("pdf")}`}
            target="_blank"
            rel="noreferrer"
            className="block w-full text-left px-3 py-2 hover:text-primary-600"
          >
            CV
          </a>
        </div>
      )}
    </header>
  );
}
