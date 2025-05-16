import { useContext, useEffect, useState } from "react";
import { Translation_Theme_Context } from "@/components/Provider";
import ProjectsTabs from "@/components/projectTabs";
import ProjectCard from "@/components/projectCard";
import ProjectModal from "@/components/projectModal";
import { Project } from '../../declarations'

export default function Projects() {
    const translations = useContext(Translation_Theme_Context)?.translations;
    const [activeTab, setActiveTab] = useState(""); // Default to an empty string
    const [open, setOpen] = useState(false); // State to control project modal visibility
    const [project, setProject] = useState<Project | null>(null); // State to hold the selected project
    // Set the active tab to the first category when translations are loaded and for each language change
    useEffect(() => {
        if (translations) {
            setActiveTab(translations.categories[0]);
            setProject(translations.projects.find((p: Project) => p.id === project?.id )); // Reset the project when the language changes
        }
    }, [translations]);
    
    if (!translations) return null; // Handle case when translations are not yet loaded

    function filterByTabCategory() : Project[] {
        if (!translations) return [];
        // return everything if the active tab is "All"
        if (activeTab === translations.categories[0]) return translations.projects;
        // return only the projects that match the active tab category
        return translations.projects.filter((project: Project) => {
            const projectCategories = project.category.split(";");
            return projectCategories.includes(activeTab);
        });
    }

    return (
        <section id={translations.sections[5]} className={"bg-[var(--secondary-background)] text-white py-16 px-8 md:px-20 flex items-center justify-center"}>
            <div className="min-h-[30vh] min-w-[81vw] max-w-[81vw] mx-auto px-6 flex flex-col">
                <div>
                    <h1 className="text-blue-400 text-5xl font-bold leading-tight mb-8">{translations.project}</h1>
                    <ProjectsTabs tabs={translations.categories.map((category: string) => ({id:category,label:category}))} activeTab={activeTab} setActiveTab={setActiveTab} />
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