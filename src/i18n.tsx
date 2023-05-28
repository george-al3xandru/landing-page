import i18n, { ResourceLanguage } from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from "./locales/en-US.json";
import roRO from "./locales/ro-RO.json";

interface Resources {
  [key: string]: {
    translation: ResourceLanguage;
  };
}

const resources: Resources = {
  en: { translation: enUS },
  ro: { translation: roRO },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en",
  fallbackLng: localStorage.getItem("language") || "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
