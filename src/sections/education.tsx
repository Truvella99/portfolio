import { useContext } from "react";
import { TranslationContext } from "@/components/DataContext";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { RiGraduationCapFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";

export default function EducationAndWork({isEducation}: {isEducation: boolean}) {
    const translations = useContext(TranslationContext)?.translations;
    if (!translations) return null; // Handle case when translations are not yet loaded
    return (
        <section id={isEducation ? translations.sections[3] : translations.sections[4]} className={isEducation ? "bg-[var(--secondary-background)] text-white py-16 px-8 md:px-20 flex items-center justify-center" :
            "text-white py-16 px-8 md:px-20 flex items-center justify-center"}>
            <div className="min-h-[30vh] max-w-[81vw] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
                {isEducation ? 
                <div>
                    <h1 className="text-blue-400 text-5xl font-bold leading-tight mb-8">{translations.education}</h1>
                    <p className="text-gray-300 mb-12 text-xl">{translations.educationDescription}</p>
                    {/* Map through the educations */}
                    <VerticalTimeline>
                        {translations.educations.map((education: { [key: string]: string }, index: number) => (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#51a2ff', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #51a2ff' }}
                                date={education.date}
                                iconStyle={{ background: '#51a2ff', color: '#fff' }}
                                icon={<RiGraduationCapFill />}
                            >
                                <h3 className="text-xl font-bold">{education.title}</h3>
                                <h4 className="text-lg">{education.institution}</h4>
                                <span style={{ display: 'block' }}>{education.place}</span>
                                <a href={education.website} target="_blank" className="mt-2 inline-block hover:underline hover:text-blue-500">
                                    Website
                                </a>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div> :
                    <div>
                        <h1 className="text-blue-400 text-5xl font-bold leading-tight mb-8">{translations.workExperience}</h1>
                        <p className="text-gray-300 mb-12 text-xl">{translations.workExperienceDescription}</p>
                        {/* Map through the work experiences */}
                        <VerticalTimeline>
                            {translations.workExperiences.map((workExperience: { [key: string]: string }, index: number) => (
                                <VerticalTimelineElement
                                    key={index}
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#51a2ff', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #51a2ff' }}
                                    date={workExperience.date}
                                    iconStyle={{ background: '#51a2ff', color: '#fff' }}
                                    icon={<MdOutlineWork />}
                                >
                                    <h3 className="text-xl font-bold">{workExperience.title}</h3>
                                    <h4 className="text-lg">{workExperience.institution}</h4>
                                    <span style={{ display: 'block' }}>{workExperience.place}</span>
                                    <a href={workExperience.website} target="_blank" className="mt-2 inline-block hover:underline hover:text-blue-500">
                                        Website
                                    </a>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                    }
            </div>
        </section>
    );
}