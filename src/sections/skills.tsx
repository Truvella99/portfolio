import { useContext } from "react";
import { Translation_Theme_Context } from "@/components/Provider";
import SkillUtility from "@/components/skill";

export default function Skills() {
    const translations = useContext(Translation_Theme_Context)?.translations;
    if (!translations) return null; // Handle case when translations are not yet loaded
    return (
        <section id={translations.sections[2]} className="py-16 px-8 md:px-20 flex items-center justify-center">
            <div className="min-h-[30vh] w-[81vw] mx-auto flex flex-col-reverse lg:flex-row items-center">
                <div>
                    <h1 className="text-[var(--headings)] text-5xl font-bold leading-tight mb-8">{translations.skills}</h1>
                    <p className="text-[var(--text)] mb-12 text-xl">{translations.skillsDescription}</p>

                    <div className="grid lg:grid-cols-14 md:grid-cols-10 grid-cols-5 gap-6 ">
                        {/* Map through the skills files and create a SkillUtility component for each skill*/}
                        {Object.entries(translations.technicalSkills as Record<string, string>).map(([key, value], index) => (
                            <SkillUtility key={index} icon={key} link={value} />
                        ))}
                        {Object.entries(translations.nonTechnicalSkills as Record<string, string>).map(([key, value], index) => (
                            <SkillUtility key={index} icon={key} link={value} />
                        ))}
                    </div>
                </div>                
            </div>
        </section>
    );
}