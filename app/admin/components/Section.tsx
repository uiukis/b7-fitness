"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SectionProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export function Section({ title, isActive, onClick, children }: SectionProps) {
  return (
    <div className="border rounded-lg mb-4">
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ backgroundColor: "#1e293b" }}
        onClick={onClick}
        className={`w-full text-left p-4 bg-slate-700 transition-all ${
          isActive ? "bg-slate-900" : ""
        }`}
      >
        {title}
      </motion.button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="p-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
