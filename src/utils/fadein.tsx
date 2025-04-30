import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

type FadeInOnScrollProps = {
    children: React.ReactNode;
};

export default function FadeInOnScroll({ children }: FadeInOnScrollProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}>
            {children}
        </motion.div>
    );
}
