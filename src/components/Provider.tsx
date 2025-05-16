"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import enJson from "@/locales/en.json";
import itJson from "@/locales/it.json";
import { Translation_Theme_ContextType } from "../../declarations";

// Create the context
export const Translation_Theme_Context = createContext<Translation_Theme_ContextType | undefined>(undefined);

// Create the provider component
export const Translation_Theme_Provider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en"); // Default language
  const [translations, setTranslations] = useState<Record<string, any> | undefined>(undefined);
  const [userTheme, setUserTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    // Dynamically load the JSON based on the selected language
    const loadTranslations = async () => {
      setTranslations(language === "en" ? enJson : itJson);
    };
    loadTranslations();
  }, [language]);

  return (
    <Translation_Theme_Context.Provider value={{ translations, language, setLanguage, userTheme, setUserTheme }}>
      {children}
    </Translation_Theme_Context.Provider>
  );
};