import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ProjectsTabsProps } from "../../declarations";
import { isMobile } from "@/utils/isMobile";

export default function ProjectsTabs({ activeTab, setActiveTab, tabs }: ProjectsTabsProps) {
  const [touchedTab, setTouchedTab] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setTouchedTab(tabId);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setTouchedTab(null), 300);
  };

  return (
    <div className="flex items-center justify-center py-4">
      <div className={`relative flex flex-wrap items-center justify-center gap-2 p-1`}>
        {/* Tabs */}
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <motion.button
              key={tab.id}
              className={`relative z-10 flex items-center justify-center px-5 ${isMobile() ? 'py-1' : 'py-3'} text-sm font-bold transition-colors duration-300 ${
                isActive ? "text-[var(--secondary)] bg-[var(--text)] rounded-full" : "text-[var(--text)] rounded-full"
              }`}
              onClick={() => handleTabClick(tab.id)}
              animate={{
                scale: isActive ? 1.15 : 1,
                opacity: touchedTab === tab.id ? 0.6 : 1,
              }}
              transition={{ duration: 0.25 }}
            >
              {tab.label}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
