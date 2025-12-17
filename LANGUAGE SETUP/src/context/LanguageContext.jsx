import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang(lang === "en" ? "gu" : "en");
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};