"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import enJson from "@/locales/en.json";
import itJson from "@/locales/it.json";

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
      setTranslations(language === "en" ? enJson : itJson);
    };
    loadTranslations();
  }, [language]);

  return (
    <TranslationContext.Provider value={{ translations, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};