"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
// Take jsonc in development and json in production
const enData = process.env.NODE_ENV === 'development'
  ? require('@/locales/en.jsonc').default
  : require('@/locales/en.json').default;
const itData = process.env.NODE_ENV === 'development'
  ? require('@/locales/it.jsonc').default
  : require('@/locales/it.json').default;

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
    console.log(enData);
    // Dynamically load the JSON based on the selected language
    const loadTranslations = async () => {
      if (language === "en") {
        setTranslations(enData);
      } else {
        setTranslations(itData);
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