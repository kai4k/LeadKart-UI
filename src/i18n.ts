// src/i18n.ts
import { createI18n } from "vue-i18n";
import ar from "@/assets/lang/ar.json";
import de from "@/assets/lang/de.json";
import en from "@/assets/lang/en.json";
import es from "@/assets/lang/es.json";
import fr from "@/assets/lang/fr.json";
import he from "@/assets/lang/he.json";
import it from "@/assets/lang/it.json";
import ko from "@/assets/lang/ko.json";
import nl from "@/assets/lang/nl.json";
import pt from "@/assets/lang/pt.json";
import ru from "@/assets/lang/ru.json";
import tr from "@/assets/lang/tr.json";
import vi from "@/assets/lang/vi.json";
import zh from "@/assets/lang/zh.json";
const messages = {
  en: en,
  fr: fr,
  ar: ar,
  es: es,
  de: de,
  it: it,
  nl: nl,
  pt: pt,
  ru: ru,
  tr: tr,
  vi: vi,
  zh: zh,
  ko: ko,
  he: he,
};

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: "en", // Default locale
  fallbackLocale: "en",
  messages,
});

export default i18n;
