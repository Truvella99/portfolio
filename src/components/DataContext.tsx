"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define the shape of your context data
interface TranslationContextType {
  translations: Record<string, any> | undefined;
  language: string;
  setLanguage: (lang: string) => void;
}

// Create the context
export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Create the provider component
export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en"); // Default language
  const [translations, setTranslations] = useState<Record<string, any> | undefined>(undefined);

  useEffect(() => {
    // Dynamically load the JSON based on the selected language
    const loadTranslations = async () => {
      const isDev = process.env.NODE_ENV === "development";
      
      // Take jsonc in development and json in production
      const data =
        language === "en"
          ? await import(`@/locales/en.${isDev ? "jsonc" : "json"}`).then((mod) => mod.default)
          : await import(`@/locales/it.${isDev ? "jsonc" : "json"}`).then((mod) => mod.default);

      setTranslations(data);
    };
    loadTranslations();
  }, [language]);

  return (
    <TranslationContext.Provider value={{ translations, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};