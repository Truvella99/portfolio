import { Translation_Theme_Context } from "@/components/Provider";
import { useContext } from "react";

export default function Footer() {
    const translations = useContext(Translation_Theme_Context)?.translations;
    if (!translations) return null; // Handle case when translations are not yet loaded
    return (
        <footer className="w-full py-6 bg-[var(--secondary-background)]">
            <div className="container mx-auto text-center">
                <p className="text-[var(--foreground)] text-sm flex items-center justify-center gap-1">
                    <span>&copy;</span> {new Date().getFullYear()} {translations.name} {' ' + translations.allrights}
                </p>
            </div>
        </footer>
    );
}