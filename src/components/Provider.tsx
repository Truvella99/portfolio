"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import enJson from "@/locales/en.json";
import itJson from "@/locales/it.json";
import { Translation_Theme_ContextType } from "../../declarations";
import { usePathname } from "next/navigation";
import { Lang } from "../../declarations";

// Create the context
export const Translation_Theme_Context = createContext<Translation_Theme_ContextType | undefined>(undefined);

// Create the provider component
export const Translation_Theme_Provider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [language, setLanguage] = useState<Lang>("en"); // Default language
  const [translations, setTranslations] = useState<Record<string, any> | undefined>(undefined);
  const [userTheme, setUserTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    // Read language from URL to set the state (es. /en/xxx o /it/xxx)
    const match = pathname.match(/^\/(en|it)/);
    if (match) {
      setLanguage(match[1] as Lang);
    }
    const lang = match ? match[1] : "en";
    // Dynamically load the JSON based on the language
    const loadTranslations = async () => {
      setTranslations(lang === "en" ? enJson : itJson);
    };
    loadTranslations();
  }, [language, pathname]);

  return (
    <Translation_Theme_Context.Provider value={{ translations, language, setLanguage, userTheme, setUserTheme }}>
      {children}
    </Translation_Theme_Context.Provider>
  );
};