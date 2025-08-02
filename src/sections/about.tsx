import React from 'react';
import { useContext } from "react";
import { Translation_Theme_Context } from "@/components/Provider";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function computeAge(dateString: string): number {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export default function About() {
    const translations = useContext(Translation_Theme_Context)?.translations;
    if (!translations) return null; // Handle case when translations are not yet loaded

    return (
        <section id={translations.sections[1]} className="bg-[var(--secondary)] pb-16 px-8 md:px-20">
            <div className="min-h-[70vh] w-[81vw] mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">

                {/* LEFT: IMAGE */}
                <div className="relative flex flex-col items-center">
                    <DotLottieReact
                        src="./homeAnimation.lottie"
                        loop
                        className="h-[400px] w-[300px] sm:h-[500px] sm:w-[400px] md:h-[600px] md:w-[450px] lg:h-[700px] lg:w-[500px] object-cover object-center rounded-lg"
                        autoplay
                    />
                </div>

                {/* RIGHT: ABOUT TEXT */}
                <div>
                    <h1 className="text-[var(--headings)] text-5xl font-bold leading-tight mb-20">{translations.about}</h1>
                    <p className="text-[var(--text)] mb-20 text-xl">{translations.aboutDescription} </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[var(--text)] text-l">
                        <div className='flex flex-col gap-4'>
                            <p><span className="font-semibold text-[var(--text)]">{translations.nameTitle}:</span> {translations.name}</p>
                            <p><span className="font-semibold text-[var(--text)]">{translations.ageTitle}:</span> {computeAge('11/16/1999')} {translations.years}</p>
                            <p><span className="font-semibold text-[var(--text)]">{translations.occupationTitle}:</span> {translations.occupation}</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p><span className="font-semibold text-[var(--text)]">Email:</span> gagliardo9975@gmail.com </p>
                            <p><span className="font-semibold text-[var(--text)]">{translations.nationalityTitle}:</span> {translations.nationality}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
