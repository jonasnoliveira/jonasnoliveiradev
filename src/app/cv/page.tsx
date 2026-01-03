"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaGlobe, FaPrint, FaArrowLeft, FaDownload } from "react-icons/fa";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitch from "@/components/LanguageSwitch";

export default function CVPage() {
    const { t } = useLanguage();

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-base-100 text-base-content print:bg-white print:text-black font-sans">
            {/* Navigation Bar - Hidden in Print */}
            <div className="print:hidden fixed top-0 w-full bg-base-100/80 backdrop-blur-md z-50 border-b border-base-content/10 shadow-sm">
                <div className="container mx-auto px-4 h-16 flex justify-between items-center max-w-5xl">
                    <Link href="/" className="flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors">
                        <FaArrowLeft /> {t.cv.backToPortfolio}
                    </Link>
                    <div className="flex items-center gap-4">
                        <LanguageSwitch />
                        <ThemeToggle />
                        <button
                            onClick={handlePrint}
                            className="btn btn-primary btn-sm gap-2 rounded-full px-6"
                        >
                            <FaPrint /> {t.cv.download}
                        </button>
                    </div>
                </div>
            </div>

            {/* CV Content */}
            <main className="container mx-auto px-4 py-24 max-w-[210mm] print:p-0 print:max-w-none">
                <div className="bg-base-100 print:bg-white p-8 md:p-12 shadow-2xl print:shadow-none rounded-xl print:rounded-none border border-base-content/5 print:border-none relative overflow-hidden">
                    {/* Decorative element for screen only */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full -mr-16 -mt-16 print:hidden pointer-events-none" />

                    {/* Header */}
                    <header className="flex flex-col md:flex-row justify-between items-center text-center md:text-left border-b-2 border-base-content/10 pb-8 mb-8 print:mb-6 print:pb-6 print:border-gray-200">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary leading-tight print:text-black">
                                Jonas Oliveira
                            </h1>
                            <h2 className="text-xl md:text-2xl font-medium text-secondary mt-1 print:text-gray-600">{t.cv.role}</h2>
                        </div>
                        <div className="mt-6 md:mt-0 flex flex-col gap-2 text-sm text-base-content/70 print:text-gray-600 items-center md:items-end">
                            <div className="flex items-center gap-2">
                                <span>{t.cv.location}</span> <FaMapMarkerAlt className="text-primary" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span>{t.cv.contact.phone}</span> <FaPhone className="text-primary" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span>{t.cv.contact.email}</span> <FaEnvelope className="text-primary" />
                            </div>
                            <div className="flex gap-4 mt-2 print:hidden">
                                <a href={`https://${t.cv.contact.linkedin}`} target="_blank" rel="noreferrer" className="text-2xl hover:text-primary transition-colors"><FaLinkedin /></a>
                                <a href={`https://${t.cv.contact.github}`} target="_blank" rel="noreferrer" className="text-2xl hover:text-primary transition-colors"><FaGithub /></a>
                                <a href={`https://${t.cv.contact.website}`} target="_blank" rel="noreferrer" className="text-2xl hover:text-primary transition-colors"><FaGlobe /></a>
                            </div>
                            {/* Print only links */}
                            <div className="hidden print:flex flex-col items-end gap-1 text-xs">
                                <span>{t.cv.contact.linkedin}</span>
                                <span>{t.cv.contact.github}</span>
                                <span>{t.cv.contact.website}</span>
                            </div>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 print:grid-cols-3 print:gap-8">
                        {/* Main Column */}
                        <div className="md:col-span-2 print:col-span-2 space-y-10 print:space-y-8">
                            {/* Summary */}
                            <section>
                                <h3 className="text-lg font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-2 mb-4 print:text-black print:border-gray-200">
                                    {t.cv.summary.title}
                                </h3>
                                <p className="text-base-content/80 leading-relaxed text-justify print:text-gray-800">
                                    {t.cv.summary.content}
                                </p>
                            </section>

                            {/* Experience */}
                            <section>
                                <h3 className="text-lg font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-2 mb-6 print:text-black print:border-gray-200">
                                    {t.cv.experience.title}
                                </h3>
                                <div className="space-y-8 print:space-y-6">
                                    {t.experience.items.map((exp, index) => (
                                        <div key={index} className="relative pl-4 border-l-2 border-primary/20 print:border-gray-300">
                                            <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-primary print:bg-gray-400" />
                                            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                                                <h4 className="text-lg font-bold text-base-content print:text-black">{exp.role}</h4>
                                                <span className="text-sm font-medium text-primary print:text-gray-600 whitespace-nowrap">{exp.period}</span>
                                            </div>
                                            <div className="text-base font-semibold text-base-content/70 mb-2 print:text-gray-700">{exp.company}</div>
                                            <p className="text-sm text-base-content/60 leading-relaxed text-justify print:text-gray-800">
                                                {exp.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar Column */}
                        <div className="space-y-10 print:space-y-8">
                            {/* Education */}
                            <section>
                                <h3 className="text-lg font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-2 mb-4 print:text-black print:border-gray-200">
                                    {t.cv.education.title}
                                </h3>
                                {t.cv.education.items.map((edu, index) => (
                                    <div key={index} className="mb-4">
                                        <h4 className="font-bold text-base-content print:text-black leading-tight">{edu.degree}</h4>
                                        <div className="text-primary/80 font-medium text-sm mt-1 print:text-gray-700">{edu.institution}</div>
                                        <div className="text-base-content/50 text-xs mt-1 print:text-gray-500">{edu.period}</div>
                                    </div>
                                ))}
                            </section>

                            {/* Skills */}
                            <section>
                                <h3 className="text-lg font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-2 mb-4 print:text-black print:border-gray-200">
                                    {t.cv.skills.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {t.cv.skills.techs.map((skill, index) => (
                                        <span key={index} className="px-3 py-1 bg-base-200 text-base-content/80 text-xs font-semibold rounded-full border border-base-content/5 print:bg-transparent print:border-gray-300 print:text-gray-800">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            {/* Languages */}
                            <section>
                                <h3 className="text-lg font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-2 mb-4 print:text-black print:border-gray-200">
                                    {t.cv.languages.title}
                                </h3>
                                <ul className="space-y-3">
                                    {t.cv.languages.items.map((lang, index) => (
                                        <li key={index} className="flex flex-col">
                                            <span className="font-semibold text-base-content print:text-black text-sm">{lang.name}</span>
                                            <span className="text-xs text-base-content/60 print:text-gray-600">{lang.level}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            <style jsx global>{`
                @media print {
                    @page {
                        margin: 0;
                        size: A4;
                    }
                    body {
                        background: white !important;
                        color: black !important;
                        -webkit-print-color-adjust: exact;
                    }
                    .print\\:hidden {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    );
}
