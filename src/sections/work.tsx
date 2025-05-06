import { useContext } from "react";
import { TranslationContext } from "@/components/DataContext";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion";
import Image from "next/image";
import type { Work } from "../../declarations";

export default function Work() {
    const translations = useContext(TranslationContext)?.translations;
    if (!translations) return null; // Handle case when translations are not yet loaded
    return (
        <section id={translations.sections[4]} className={"text-white py-16 px-8 md:px-20 flex items-center justify-center"}>
            <div className="min-h-[30vh] max-w-[81vw] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
                <div>
                    <h1 className="text-blue-400 text-5xl font-bold leading-tight mb-8">{translations.workExperience}</h1>
                    <p className="text-gray-300 mb-12 text-xl">{translations.workExperienceDescription}</p>
                    {/* Map through the work experiences */}
                    <VerticalTimeline>
                        {translations.workExperiences.map((workExperience: Work, index: number) => (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#51a2ff', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #51a2ff' }}
                                date={workExperience.date}
                                iconStyle={{ background: '#51a2ff', color: '#fff', cursor: "pointer" }}
                                iconOnClick={() => {window.open(workExperience.website, "_blank")}}
                                icon={<Image alt="" src={workExperience.image} className="rounded-full" width={100} height={100}/>}
                            >
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -6,
                                        color: "var(--background)",
                                    }}
                                    whileTap={{ scale: 0.97 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeOut",
                                        type: "spring",
                                        stiffness: 120,
                                    }}
                                    style={{ cursor: "pointer" }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    onClick={() => {window.open(workExperience.website, "_blank")}}
                                >
                                    <h3 className="text-xl font-bold">{workExperience.title}</h3>
                                    <h4 className="text-lg">{workExperience.institution}</h4>
                                    <span style={{ display: 'block' }}>{workExperience.place}</span>
                                </motion.div>

                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
}