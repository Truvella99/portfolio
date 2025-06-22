import React, { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { Translation_Theme_Context } from "@/components/Provider";
import { IoLanguage } from "react-icons/io5";
import { isMobile } from "@/utils/isMobile";

export default function LanguageToggle() {
    const language = useContext(Translation_Theme_Context)?.language;
    const setLanguage = useContext(Translation_Theme_Context)?.setLanguage;
    const [openDropDown, setOpenDropDown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropDown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleLanguage = (lang: string) => {
        setLanguage?.(lang);
        setOpenDropDown(false);
    };

    return (
        <div ref={dropdownRef} className="relative w-[80px] flex align-center justify-center">
            <div onClick={() => setOpenDropDown((oldValue) => !oldValue)} className={`p-1.5 md:ml-auto ${openDropDown ? 'bg-[#51a2ff]' : 'bg-transparent'} hover:bg-[#51a2ff] rounded-full text-white cursor-pointer`}>
                <IoLanguage size={isMobile() ? 18 : 24} />
            </div>
            
            <div className={`absolute z-10 mt-10 ${openDropDown ? '' : 'hidden'} bg-[#51a2ff] rounded-lg`}>
                <ul className="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <img loading="lazy" width={70} height={35} src='./italian.png' onClick={() => toggleLanguage('it')} className="block px-4 py-2 bg-[#51a2ff] cursor-pointer"/>
                    </li>
                    <li>
                        <img loading="lazy" width={70} height={35} src='./english.png' onClick={() => toggleLanguage('en')} className="block px-4 py-2 bg-[#51a2ff] cursor-pointer"/>
                    </li>
                </ul>
            </div>
        </div>
    );
};