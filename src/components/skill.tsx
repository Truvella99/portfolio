import { motion } from "framer-motion";
import { SkillUtilityProps } from "../../declarations";

export default function SkillUtility({ icon, link }: SkillUtilityProps) {
    const box = { width: 50, height: 50, borderRadius: 5};

    return (
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={box}>
            <svg width={box.width} height={box.height} 
                style={{
                    cursor: 'pointer'
                }}
                onClick={() => window.open(link, '_blank')} // Open a new tab
            >
                <image href={`./skills/${icon}.svg`} />
            </svg>
        </motion.div>
    );
}