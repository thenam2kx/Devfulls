"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import { getOptionsI18n } from "./settings";

i18next
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    ...getOptionsI18n(),
    backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
  });

export default i18next;
