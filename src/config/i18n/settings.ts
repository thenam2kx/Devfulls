export const fallbackLng = "vi";
export const languages = ["en", "vi"];
export const defaultNS = "common";

export const getOptionsI18n = (lng = fallbackLng, ns = defaultNS) => ({
  // Debugging (bật nếu cần)
  debug: false,
  supportedLngs: languages,
  fallbackLng,
  lng,
  fallbackNS: defaultNS,
  defaultNS,
  ns,
});
