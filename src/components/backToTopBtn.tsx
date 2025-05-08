import { FaArrowUp } from "react-icons/fa";
import { isMobile } from "@/utils/isMobile";
export default function BackToTopButton() {
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed md:bottom-6 md:right-6 bottom-2 right-2 z-10 bg-blue-400 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition duration-300"
            aria-label="Back to top"
        >
            <FaArrowUp size={isMobile() ? 18 : 24} />
        </button>
    );
}