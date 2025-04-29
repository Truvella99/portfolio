"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import enJsonc from "@/locales/en.jsonc"; // Import JSONC files
import itJsonc from "@/locales/it.jsonc"; // Import JSONC files

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
      if (language === "en") {
        setTranslations(enJsonc);
      } else {
        setTranslations(itJsonc);
      }
    };
    loadTranslations();
  }, [language]);

  return (
    <TranslationContext.Provider value={{ translations, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};