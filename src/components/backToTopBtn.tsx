import { FaArrowUp } from "react-icons/fa";
import { isMobile } from "@/utils/isMobile";
import { useContext } from "react";
import { Translation_Theme_Context } from "@/components/Provider";

export default function BackToTopButton() {
    const userTheme = useContext(Translation_Theme_Context)?.userTheme;
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed md:bottom-6 md:right-6 bottom-2 right-2 z-10 ${userTheme === 'dark' ? 'bg-[var(--headings)]' : 'bg-[var(--secondary)]'} hover:bg-[var(--accent)] text-[var(--text)] p-3 rounded-full shadow-lg transition duration-300`}
            aria-label="Back to top"
        >
            <FaArrowUp size={isMobile() ? 18 : 24} />
        </button>
    );
}