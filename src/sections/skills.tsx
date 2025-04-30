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
            <div className="min-h-[30vh] max-w-8xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
                <div>
                    <h1 className="text-blue-400 text-5xl font-bold leading-tight mb-8">{translations.skills}</h1>
                    <p className="text-gray-300 mb-12 text-xl">{translations.skillsDescription}</p>
                    
                    <div className="grid lg:grid-cols-14 md:grid-cols-10 grid-cols-6 gap-6 ">
                        <SkillUtility icon='android' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='androidstudio' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='api' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='assembly' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='azure' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='c' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='chartjs' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='chatgpt' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='chrome' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='clion' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='cpp' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='css' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='dart' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='discord' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='docker' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='excel' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='expressjs' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='firebase' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='flutter' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='gcp' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='git' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='github' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='githubactions' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='githubcopilot' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='githubpages' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='gitlab' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='gmail' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='googlecolab' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='gradle' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='grafana' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='hibernate' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='html' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='idea' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='java' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='javascript' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='json' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='jupyter' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='jwt' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='kafka' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='keycloak' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='kotlin' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='latex' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='linkedin' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='linux' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='materialui' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='mongodb' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='mysql' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='nextjs' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='ngrok' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='nodejs' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='notion' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='notepadpp' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='npm' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='numpy' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='obs' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='overleaf' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='postgresql' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='postman' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='powerpoint' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='prometheus' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='pycharm' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='python' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='pytorch' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='react' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='reactbootstrap' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='rust' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='spark' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='spring' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='sqlite' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='tailwindcss' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='teams' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='tomcat' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='typescript' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='vim' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='vite' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='vmwareworkstation' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='vscode' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='webstorm' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='windows' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='wireshark' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='word' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='wsl' link="https://www.typescriptlang.org/" />
                        <SkillUtility icon='yaml' link="https://www.typescriptlang.org/" />
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