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
        <section id={translations.sections[1]} className="bg-[var(--secondary-background)] text-white py-16 px-8 md:px-20">
            <div className="min-h-[70vh] max-w-[81vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* LEFT: IMAGE */}
                <div className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] relative flex flex-col items-center">
                    <DotLottieReact
                        src="./homeAnimation.lottie"
                        loop
                        className="h-[400px] w-[300px] sm:h-[500px] sm:w-[400px] md:h-[600px] md:w-[450px] lg:h-[700px] lg:w-[500px] object-cover object-center rounded-lg"
                        autoplay
                    />
                </div>

                {/* RIGHT: ABOUT TEXT */}
                <div className='min-h-[70vh]'>
                    <h1 className="text-blue-400 text-5xl font-bold leading-tight mb-20">{translations.about}</h1>
                    <p className="text-gray-300 mb-20 text-xl">{translations.aboutDescription} </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300 text-l">
                        <div className='flex flex-col gap-4'>
                            <p><span className="font-semibold text-white">{translations.nameTitle}:</span> {translations.name}</p>
                            <p><span className="font-semibold text-white">{translations.ageTitle}:</span> {computeAge('11/16/1999')} {translations.years}</p>
                            <p><span className="font-semibold text-white">{translations.occupationTitle}:</span> {translations.occupation}</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p><span className="font-semibold text-white">Email:</span> gagliardo9975@gmail.com </p>
                            <p><span className="font-semibold text-white">{translations.nationalityTitle}:</span> {translations.nationality}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
