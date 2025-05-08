// Declare .jsonc modules as objects
declare module "*.jsonc" {
    const value: Record<string, any>;
    export default value;
}
  
// ----------------------- INTERFACES ----------------------- //

interface TranslationContextType {
  translations: Record<string, any> | undefined;
  language: string;
  setLanguage: (lang: string) => void;
}

interface SectionVisibility {
    sectionId: string;
    visibleRatio: number;
}

interface ProjectsTabsProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  tabs: { id: string; label: string }[];
}

interface Education {
    title: string
    institution: string
    date: string
    place: string
    website: string,
    image: string
}
interface Position {
    x: number;
    y: number;
}

interface SkillUtilityProps {
    icon: string;
    link: string;
}

interface Work {
    title: string
    institution: string
    date: string
    place: string
    website: string,
    image: string
}

interface IconUtilityProps {
    Icon: IconType;
    link?: string;
}

interface Project {
    id: string,
    category: string,
    description: string
    image: string,
    link: string
}

interface ProjectCardProps {
    setOpen: (isOpen: boolean) => void;
    project: Project;
    setProject: (project: Project | null) => void;
}

interface ProjectModalProps {
    open: boolean;
    setOpen: (isOpen: boolean) => void;
    project: Project | null;
    setProject: (project: Project | null) => void;
    projects: Project[];
}

export {
    TranslationContextType,
    SectionVisibility,
    ProjectsTabsProps,
    Education,
    Position,
    SkillUtilityProps,
    Work, 
    IconUtilityProps,
    Project,
    ProjectCardProps,
    ProjectModalProps
};