export default function Footer() {
    return (
        <footer className="w-full py-6 bg-[var(--secondary-background)]">
            <div className="container mx-auto text-center">
                <p className="text-white text-sm flex items-center justify-center gap-1">
                    <span>&copy;</span> {new Date().getFullYear()} Domenico Gagliardo
                </p>
            </div>
        </footer>
    );
}