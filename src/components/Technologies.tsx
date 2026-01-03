"use client";

import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaGit, FaDocker, FaPython } from 'react-icons/fa';
import {
  SiTypescript,
  SiDotnet,
  SiAngular,
  SiMysql,
  SiPostgresql,
  SiJira,
  SiGithub,
  SiGitlab,
  SiTypeorm,
  SiSharp,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiExpo,
  SiFastapi,
  SiTensorflow,
  SiNestjs,
  SiExpress,
  SiJest
} from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb";
import { VscAzure, VscCircuitBoard } from "react-icons/vsc";
import { useLanguage } from "@/contexts/LanguageContext";

const Technologies = () => {
  const { t } = useLanguage();

  const techCategories = [
    {
      title: t.technologies.categories.backend,
      techs: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-4xl" /> },
        { name: 'NestJS', icon: <SiNestjs className="text-red-500 text-4xl" /> },
        { name: 'Express', icon: <SiExpress className="text-gray-500 text-4xl" /> },
        { name: '.NET Core', icon: <SiDotnet className="text-purple-600 text-4xl" /> },
        { name: 'C#', icon: <SiSharp className="text-blue-600 text-4xl" /> },
        { name: 'Python', icon: <FaPython className="text-yellow-500 text-4xl" /> },
        { name: 'FastAPI', icon: <SiFastapi className="text-teal-500 text-4xl" /> },
        { name: 'Azure', icon: <VscAzure className="text-blue-500 text-4xl" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-400 text-4xl" /> },
      ]
    },
    {
      title: t.technologies.categories.frontend,
      techs: [
        { name: 'React', icon: <FaReact className="text-blue-500 text-4xl" /> },
        { name: 'Next.js', icon: <TbBrandNextjs className="text-white text-4xl" /> },
        { name: 'Angular', icon: <SiAngular className="text-red-600 text-4xl" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 text-4xl" /> },
        { name: 'React Native', icon: <SiExpo className="text-white text-4xl" /> },
        { name: 'Redux', icon: <SiRedux className="text-purple-500 text-4xl" /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
        { name: 'MUI', icon: <SiMui className="text-blue-500 text-4xl" /> },
      ]
    },
    {
      title: t.technologies.categories.database,
      techs: [
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700 text-4xl" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-600 text-4xl" /> },
        { name: 'TypeORM', icon: <SiTypeorm className="text-orange-500 text-4xl" /> },
        { name: 'Git', icon: <FaGit className="text-orange-500 text-4xl" /> },
        { name: 'GitHub', icon: <SiGithub className="text-white text-4xl" /> },
        { name: 'GitLab', icon: <SiGitlab className="text-orange-500 text-4xl" /> },
        { name: 'CI/CD', icon: <VscCircuitBoard className="text-blue-500 text-4xl" /> },
        { name: 'Jest', icon: <SiJest className="text-red-700 text-4xl" /> },
        { name: 'Jira', icon: <SiJira className="text-blue-500 text-4xl" /> },
        { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-400 text-4xl" /> },
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-base-100 relative" id="technologies">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent inline-block">
            {t.technologies.title}
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            {t.technologies.subtitle}
          </p>
        </motion.div>

        <div className="space-y-16">
          {techCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-2xl font-bold mb-8 text-center md:text-left border-l-4 border-primary pl-4">
                {category.title}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
              >
                {category.techs.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="group p-4 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-content/5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="p-3 rounded-xl bg-base-100 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-sm">{tech.name}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
