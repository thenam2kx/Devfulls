// import type { UserConfig } from "next-i18next";

// const i18nConfig: UserConfig = {
//   i18n: {
//     defaultLocale: "vi",
//     locales: ["en", "vi"],
//   }
// };

// export default i18nConfig;

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "vi"],
} as const;

export type Locale = (typeof i18n)["locales"][number];