import { motion } from 'framer-motion'
import Image from 'next/image';
import { useRef, useState } from "react";
import { Position,Education } from "../../declarations";

export default function EducationCard({ education }: { education: Education }) {
    const spotlightColor = "rgba(0, 229, 255, 0.2)";
    const divRef = useRef<HTMLDivElement>(null);
    const [applyOpacity, setApplyOpacity] = useState(false);
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setApplyOpacity(true);
    const handleMouseLeave = () => setApplyOpacity(false);

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{
                scale: 1.03,
                rotate: -1,
                y: -15,
                boxShadow: '0px 12px 20px rgba(0,0,0,0.12)',
                backgroundColor: 'rgba(10, 10, 114, 0.5)',
            }}
            style={applyOpacity ? { background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)` } : {}}
            transition={{ duration: 0 }}
            onClick={() => window.open(education.website, '_blank')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.97 }}
            className="relative bg-[var(--background)] rounded-2xl p-6 mb-4 cursor-pointer transition-all shadow-md overflow-hidden"
        >
            <div className="relative z-10">
                <div className="flex md:flex-row flex-col items-start">
                    <div className="w-full md:w-50 flex-shrink-0 flex items-center justify-center">
                        <Image
                            src={education.image}
                            alt=""
                            width={200}
                            height={133}
                            className="w-[200px] h-[133px] object-contain"
                        />
                    </div>
                    <div className="ml-5 md:mt-0 mt-5">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{education.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{education.institution}</p>
                        </div>
                        <span className="text-sm text-gray-400">{education.date}</span>
                        <p className="mt-4 text-gray-700 dark:text-gray-200">{education.place}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}