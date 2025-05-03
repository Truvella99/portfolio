import React, { useState } from "react";
import { useContext } from "react";
import { TranslationContext } from "@/components/DataContext";
import Image from "next/image";

export default function LanguageToggle() {
    const language = useContext(TranslationContext)?.language;
    const setLanguage = useContext(TranslationContext)?.setLanguage;
    
    const toggleLanguage = () => {
        if (language === "en") {
            setLanguage && setLanguage("it");
        } else {
            setLanguage && setLanguage("en");
        }
    };

    return (
        <button
            onClick={toggleLanguage}
            style={{ backgroundColor: "#51a2ff" }}
            className={`relative w-16 h-9 rounded-full bg-gray-300 transition-colors duration-300 bg-#51a2ff`}
        >
            <div
                className={`absolute top-1 left-1 w-7 h-7 rounded-full bg-white shadow-md transform transition-transform duration-300 ${language === "it" ? "translate-x-7" : ""
                    }`}
            >
                <Image
                    src={language === "en" ? "./english.png" : "/italian.png"}
                    alt={language === "en" ? "English" : "Italian"}
                    className="w-full h-full object-cover rounded-full transform scale-90"
                    width={25}
                    height={25}
                /> 
            </div>
        </button>
    );
};