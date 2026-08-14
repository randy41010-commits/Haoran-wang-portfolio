"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Locale = "de" | "en" | "zh";
type I18n = { locale: Locale; setLocale: (locale: Locale) => void };
const LocaleContext = createContext<I18n>({ locale: "de", setLocale: () => {} });

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("de");
  useEffect(() => { const saved = localStorage.getItem("haoran-locale") as Locale | null; if (saved === "de" || saved === "en" || saved === "zh") setLocaleState(saved); }, []);
  const setLocale = (next: Locale) => { setLocaleState(next); localStorage.setItem("haoran-locale", next); };
  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}
export const useLocale = () => useContext(LocaleContext);

export const copy = {
  de: { nav: ["Info", "Werke", "Musik", "Installation", "Kontakt"], top: "Oben ↑", footer: "MUSIK · KLANG · INSTALLATION", titles: ["Info", "Werke", "Musik", "Installation", "Kontakt"], intros: ["Biografie, Ausbildung und fortlaufende musikalische Forschung.", "Ausgewählte audiovisuelle Arbeiten: Komposition, Klang, Bild und Raumforschung.", "Kompositionen und veröffentlichte Musik.", "Räumliche Arbeiten, die Klang, Licht, Objekte und Architektur in Beziehung setzen.", "Für Aufträge, Ausstellungen, Kooperationen oder einen gemeinsamen Gedankenaustausch."] },
  en: { nav: ["Info", "Works", "Music", "Installation", "Contact"], top: "Top ↑", footer: "MUSIC · SOUND · INSTALLATION", titles: ["Info", "Works", "Music", "Installation", "Contact"], intros: ["Background, education and areas of ongoing musical research.", "Selected audiovisual works: composition, sound, image and spatial research.", "Compositions and recorded works.", "Spatial works bringing sound, light, objects and architecture into relation.", "For commissions, exhibitions, collaborations or simply an exchange of ideas."] },
  zh: { nav: ["简介", "作品", "音乐", "装置", "联系"], top: "顶部 ↑", footer: "音乐 · 声音 · 装置", titles: ["简介", "作品", "音乐", "装置", "联系"], intros: ["个人背景、教育经历与持续进行的音乐研究。", "精选视听作品：作曲、声音、影像与空间研究。", "作曲作品与已发布音乐。", "探索声音、光线、物体与建筑关系的空间作品。", "委约、展览、合作或交流想法，欢迎联系。"] },
} as const;
