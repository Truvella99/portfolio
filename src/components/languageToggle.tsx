import React, { useState } from "react";
import { useContext } from "react";
import { TranslationContext } from "@/components/DataContext";
import { IoLanguage } from "react-icons/io5";
import { isMobile } from "@/utils/isMobile";

export default function LanguageToggle() {
    const language = useContext(TranslationContext)?.language;
    const setLanguage = useContext(TranslationContext)?.setLanguage;
    const [openDropDown, setOpenDropDown] = useState(false);

    /*const toggleLanguage = () => {
        if (language === "en") {
            setLanguage?.("it");
        } else {
            setLanguage?.("en");
        }
    };*/
    const toggleLanguage = (lang: string) => {
        setLanguage?.(lang);
        setOpenDropDown(false);
    };

    return (
        <div className="relative w-[80px] flex align-center justify-center">
            <div onClick={() => setOpenDropDown((oldValue) => !oldValue)} className={`p-1.5 md:ml-auto ${openDropDown ? 'bg-[#51a2ff]' : 'bg-transparent'} hover:bg-[#51a2ff] rounded-full text-white cursor-pointer`}>
                <IoLanguage size={isMobile() ? 18 : 24} />
            </div>
            
            <div className={`absolute z-10 mt-10 ${openDropDown ? '' : 'hidden'} bg-[#51a2ff] rounded-lg`}>
                <ul className="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a onClick={() => toggleLanguage('it')} className="block px-4 py-2 bg-[#51a2ff] cursor-pointer">Italian</a>
                    </li>
                    <li>
                        <a onClick={() => toggleLanguage('en')} className="block px-4 py-2 bg-[#51a2ff] cursor-pointer">English</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};