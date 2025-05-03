import { useContext } from "react";
import { TranslationContext } from "@/components/DataContext";
import { motion } from "framer-motion";
// https://motion.dev/docs/react-quick-start

// import { Tilt } from 'react-tilt';
// const tiltOptions = {
//         reverse:        false,  // reverse the tilt direction
//         max:            35,     // max tilt rotation (degrees)
//         perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
//         scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
//         speed:          1000,   // Speed of the enter/exit transition
//         transition:     true,   // Set a transition on enter/exit.
//         axis:           null,   // What axis should be disabled. Can be X or Y.
//         reset:          true,    // If the tilt effect has to be reset on exit.
//         easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
// }
// <Tilt options={tiltOptions}></Tilt>

export default function Skills() {
    const translations = useContext(TranslationContext)?.translations;
    if (!translations) return null; // Handle case when translations are not yet loaded
    return (
        <section id={translations.sections[2]} className="text-white py-16 px-8 md:px-20 flex items-center justify-center">
            <div className="min-h-[30vh] max-w-[81vw] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
                <div>
                    <h1 className="text-blue-400 text-5xl font-bold leading-tight mb-8">{translations.skills}</h1>
                    <p className="text-gray-300 mb-12 text-xl">{translations.skillsDescription}</p>
                    
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

interface SkillUtilityProps {
    icon: string;
    link: string;
}

function SkillUtility({ icon, link }: SkillUtilityProps) {
    const box = { width: 50, height: 50, borderRadius: 5};

    return (
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={box}>
            <svg width={box.width} height={box.height} 
                style={{
                    cursor: 'pointer',
                    // transition: 'opacity 0.3s ease', // Smooth transition when opacity changes
                }}
                // onMouseOver={(e) => (e.currentTarget.style.opacity = '0.5')} // Set to 50% transparency
                // onMouseOut={(e) => (e.currentTarget.style.opacity = '1')} // Reset to fully opaque
                onClick={() => window.open(link, '_blank')} // Open a new tab
            >
                <image href={`./skills/${icon}.svg`} />
            </svg>
        </motion.div>
    );
}