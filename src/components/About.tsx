"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-base-200/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
              {t.about.title}
            </h2>
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto text-base-content/80 leading-relaxed text-justify">
            <p>
              {t.about.p1}
            </p>
            <p className="mt-4">
              {t.about.p2}
            </p>
            <p className="mt-4">
              {t.about.p3}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default About;
