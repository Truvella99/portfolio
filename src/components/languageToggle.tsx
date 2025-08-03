import React, { useState, useRef, useEffect } from "react";
import { IoLanguage } from "react-icons/io5";
import { isMobile } from "@/utils/isMobile";
import { Lang } from "../../declarations";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageToggle() {
    const router = useRouter();
    const pathname = usePathname();
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

    const toggleLanguage = (lang: Lang) => {
        // setLanguage?.(lang);
        // setOpenDropDown(false);
        // Redirect to language URL
        const newPathname = pathname.replace(/^\/(it|en)/, `/${lang}`);
        router.push(newPathname);
    };

    return (
        <div ref={dropdownRef} className="relative w-[80px] flex align-center justify-center">
            <div onClick={() => setOpenDropDown((oldValue) => !oldValue)} className={`p-1.5 md:ml-auto ${openDropDown ? 'bg-[var(--secondary)]' : 'bg-transparent'} hover:bg-[var(--secondary)] rounded-full text-[var(--text)] cursor-pointer`}>
                <IoLanguage size={isMobile() ? 18 : 24} />
            </div>
            
            <div className={`absolute z-10 mt-10 ${openDropDown ? '' : 'hidden'} bg-[var(--secondary)] rounded-lg`}>
                <ul className="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <img width={70} height={35} src='./italian.png' onClick={() => toggleLanguage('it')} className="block px-4 py-2 bg-[var(--secondary)] hover:opacity-50 cursor-pointer"/>
                    </li>
                    <li>
                        <img width={70} height={35} src='./english.png' onClick={() => toggleLanguage('en')} className="block px-4 py-2 bg-[var(--secondary)] hover:opacity-50 cursor-pointer"/>
                    </li>
                </ul>
            </div>
        </div>
    );
};