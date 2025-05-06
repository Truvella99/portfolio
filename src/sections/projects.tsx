import { useContext, useState } from "react";
import { TranslationContext } from "@/components/DataContext";
import ProjectsTabs from "@/components/projectTabs";
import ProjectCard from "@/components/projectCard";
import ProjectModal from "@/components/projectModal";
import { Project } from '../../declarations'

export default function Projects() {
    const translations = useContext(TranslationContext)?.translations;
    const [activeTab, setActiveTab] = useState(""); // Default to an empty string
    const [open, setOpen] = useState(false); // State to control project modal visibility
    const [project, setProject] = useState<Project | null>(null); // State to hold the selected project

    if (translations && !activeTab) {
        setActiveTab(translations.categories[0]);
    }
    if (!translations) return null; // Handle case when translations are not yet loaded

    function filterByTabCategory() : Project[] {
        if (!translations) return [];
        // return everything if the active tab is "All"
        if (activeTab === translations.categories[0]) return translations.projects;
        // return only the projects that match the active tab category
        return translations.projects.filter((project: Project) => project.category === activeTab);
    }

    return (
        <section id={translations.sections[5]} className={"bg-[var(--secondary-background)] text-white py-16 px-8 md:px-20 flex items-center justify-center"}>
            <div className="min-h-[30vh] min-w-[81vw] max-w-[81vw] mx-auto px-6 flex flex-col">
                <div>
                    <h1 className="text-blue-400 text-5xl font-bold leading-tight mb-8">{translations.project}</h1>
                    <ProjectsTabs tabs={translations.categories.map((t: string) => ({id:t,label:t}))} activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                <ProjectModal open={open} setOpen={setOpen} project={project} setProject={setProject} projects={filterByTabCategory()} />
                <div className="flex flex-wrap md:flex-row flex-col justify-center items-center gap-4 mt-8">
                    {filterByTabCategory().map((p: Project) => (
                        <ProjectCard key={p.id} setOpen={setOpen} project={p} setProject={setProject}/>
                    ))}
                </div>
            </div>
        </section>
    );
}