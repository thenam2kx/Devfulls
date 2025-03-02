"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import i18next from "@/config/i18n/client";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [language, setLanguage] = useState(i18next.language)

  const changeLanguage = async (lng: string) => {
    await i18next.changeLanguage(lng);
    setLanguage(lng);
    router.refresh();
  };

  return (
    <div>
      <button onClick={() => changeLanguage("vi")}>🇻🇳 Tiếng Việt</button>
      <button onClick={() => changeLanguage("en")}>🇺🇸 English</button>
    </div>
  );
};

export default LanguageSwitcher;
