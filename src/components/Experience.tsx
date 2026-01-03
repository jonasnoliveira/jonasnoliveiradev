"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
    const { t } = useLanguage();

    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
                        {t.experience.title}
                    </h2>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        {t.experience.subtitle}
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {t.experience.items.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-primary/30 transition-colors"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-50 group-hover:opacity-100 transition-opacity" />

                            <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                                <div className="space-y-2 flex-1">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                        {exp.role}
                                    </h3>
                                    <div className="flex items-center gap-2 text-lg font-semibold text-secondary">
                                        <FaBriefcase className="text-sm" /> {exp.company}
                                    </div>
                                    <div className="flex flex-wrap gap-4 text-sm text-base-content/60 mt-1">
                                        <span className="flex items-center gap-1">
                                            <FaCalendarAlt /> {exp.period}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaMapMarkerAlt /> {exp.location}
                                        </span>
                                    </div>
                                    <p className="mt-4 text-base-content/80 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
