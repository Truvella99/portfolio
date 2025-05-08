import { useContext } from "react";
import { TranslationContext } from "@/components/DataContext";
import type { Education } from "../../declarations";
import EducationCard from "@/components/educationCard";

export default function Education() {
    const translations = useContext(TranslationContext)?.translations;
    if (!translations) return null; // Handle case when translations are not yet loaded
    return (
        <section id={translations.sections[3]} className={"bg-[var(--secondary-background)] text-white py-16 px-8 md:px-20 flex items-center justify-center"}>
            <div className="min-h-[30vh] max-w-[81vw] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
                <div>
                    <h1 className="text-blue-400 text-5xl font-bold leading-tight mb-8">{translations.education}</h1>
                    <p className="text-gray-300 mb-12 text-xl">{translations.educationDescription}</p>
                    <div className="mx-auto">
                        {translations.educations.map((e: Education, i: number) => (
                            <EducationCard key={i} education={e} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

