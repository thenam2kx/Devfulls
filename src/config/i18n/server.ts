import "server-only";
import i18next from "i18next";
import Backend from "i18next-fs-backend";
import { getOptionsI18n } from "./settings";

const initI18next = async (lng: string, ns?: string) => {
  await i18next.use(Backend).init({
    ...getOptionsI18n(lng, ns),
    backend: { loadPath: "public/locales/{{lng}}/{{ns}}.json" },
  });
};

export const useTranslation = async (lng: string, ns?: string) => {
  await initI18next(lng, ns);
  return {
    t: i18next.getFixedT(lng, ns),
  };
};
