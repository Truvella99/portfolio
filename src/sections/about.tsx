import React from 'react';
import Image from 'next/image';
import { useContext } from "react";
import { TranslationContext } from "@/components/DataContext";
import { Tilt } from 'react-tilt';

function computeAge(dateString: string): number {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export default function AboutMeSection() {
    const translations = useContext(TranslationContext)?.translations;
    if (!translations) return null; // Handle case when translations are not yet loaded

    const tiltOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (
        <section id={translations.sections[1]} className="bg-[var(--secondary-background)] text-white py-16 px-8 md:px-20">
            <div className="min-h-[70vh] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* LEFT: IMAGE */}
                <div className="min-h-[70vh] relative flex flex-col items-center">
                    <Tilt options={tiltOptions}>
                        <Image
                                src="./hero-bg.jpg"
                                alt="James Smith"
                                width={500}
                                height={700} // Intrinsic dimensions
                                className="h-[700px] w-[500px] object-cover object-center rounded-lg"
                        />
                    </Tilt>
                </div>

                {/* RIGHT: ABOUT TEXT */}
                <div className='min-h-[70vh]'>
                    <h1 className="text-blue-400 text-5xl font-bold leading-tight mb-20">{translations.about}</h1>
                    <p className="text-gray-300 mb-20 text-xl">{translations.description} </p>

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
