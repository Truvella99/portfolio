import { useContext } from "react";
import { Translation_Theme_Context } from "@/components/Provider";
import type { Education } from "../../declarations";
import EducationCard from "@/components/educationCard";

export default function Education() {
    const translations = useContext(Translation_Theme_Context)?.translations;
    const userTheme = useContext(Translation_Theme_Context)?.userTheme;
    if (!translations) return null; // Handle case when translations are not yet loaded
    return (
        <section id={translations.sections[3]} className={"bg-[var(--secondary)] py-16 px-8 md:px-20 flex items-center justify-center"}>
            <div className="min-h-[30vh] w-[81vw] mx-auto flex flex-col-reverse lg:flex-row items-center">
                <div>
                    <h1 className="text-[var(--headings)] text-5xl font-bold leading-tight mb-8">{translations.education}</h1>
                    <p className="text-[var(--text)] mb-12 text-xl">{translations.educationDescription}</p>
                    <div key={userTheme} className="mx-auto">
                        {translations.educations.map((e: Education, i: number) => (
                            <EducationCard key={i} education={e} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

