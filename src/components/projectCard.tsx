import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { FaEye, FaCode } from "react-icons/fa";
import { ProjectCardProps } from "../../declarations";
import { isMobile } from "@/utils/isMobile";

const ROTATION_RANGE = 15;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export default function ProjectCard({ setOpen, project, setProject }: ProjectCardProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative md:h-[216px] md:w-[384px] sm:w-[312px] sm:h-[176px] h-[135px] w-[240px] rounded-xl bg-gradient-to-br from-[var(--background)] to-[var(--secondary-background)]"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-[#51a2ff] shadow-lg overflow-hidden group"
            >
                <Image
                    src={project.image}
                    alt="Card Image"
                    fill
                    className="object-cover"
                />

                {/* Overlay for buttons*/}
                <div className={`absolute bottom-0 left-0 w-full flex justify-around p-4 ${isMobile() ? '' : 'translate-y-full group-hover:translate-y-0 transition-all duration-300'}`}>
                    <button onClick={() => { setOpen(true); setProject(project); }}
                        className="text-2xl bg-white text-black px-4 py-2 rounded-xl shadow hover:bg-gray-100 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                        <FaEye />
                    </button>
                    <button onClick={() => window.open(project?.link, '_blank')} className="text-2xl bg-white text-black px-4 py-2 rounded-xl shadow hover:bg-gray-100 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                        <FaCode />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}