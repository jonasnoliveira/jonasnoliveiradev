"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en';

type Translations = {
    header: {
        about: string;
        experience: string;
        technologies: string;
        contact: string;
    };
    hero: {
        greeting: string;
        role: string;
        description: string;
        cta: string;
    };
    about: {
        title: string;
        p1: ReactNode;
        p2: ReactNode;
        p3: ReactNode;
    };
    experience: {
        title: string;
        subtitle: string;
        present: string;
        items: {
            role: string;
            company: string;
            description: string;
            period: string;
            location: string;
        }[];
    };
    technologies: {
        title: string;
        subtitle: string;
        categories: {
            backend: string;
            frontend: string;
            database: string;
        };
    };
    contact: {
        title: string;
        subtitle: string;
        whatsapp: string;
        email: string;
        location: string;
        locationValue: string;
        form: {
            name: string;
            namePlaceholder: string;
            phone: string;
            phonePlaceholder: string;
            email: string;
            emailPlaceholder: string;
            subject: string;
            subjectPlaceholder: string;
            message: string;
            messagePlaceholder: string;
            send: string;
            sending: string;
        };
        errors: {
            nameRequired: string;
            phoneRequired: string;
            emailRequired: string;
            emailInvalid: string;
            subjectRequired: string;
            messageRequired: string;
        };
    };
    footer: {
        rights: string;
    };
    cv: {
        title: string;
        role: string;
        location: string;
        contact: {
            phone: string;
            email: string;
            linkedin: string;
            github: string;
            website: string;
        };
        summary: {
            title: string;
            content: string;
        };
        experience: {
            title: string;
        };
        education: {
            title: string;
            items: {
                degree: string;
                institution: string;
                period: string;
            }[];
        };
        skills: {
            title: string;
            techs: string[];
        };
        languages: {
            title: string;
            items: {
                name: string;
                level: string;
            }[];
        };
        download: string;
        backToPortfolio: string;
    };
};

const translations: Record<Language, Translations> = {
    pt: {
        header: {
            about: "Sobre",
            experience: "Experiência",
            technologies: "Tecnologias",
            contact: "Contato",
        },
        hero: {
            greeting: "Olá, eu sou Jonas Oliveira",
            role: "Desenvolvedor Full Stack",
            description: "Desenvolvedor Full Stack apaixonado por tecnologia, inovação e arquitetura de software de alta performance.",
            cta: "Saber mais",
        },
        about: {
            title: "Sobre mim",
            p1: <>Sou um <span className="text-primary font-semibold">Desenvolvedor Full Stack</span> apaixonado por inovação. Minha experiência inclui o desenvolvimento <strong>end-to-end</strong> de sistemas web e mobile, arquitetura de software, DevOps & Cloud, além de práticas avançadas de engenharia de software para garantir qualidade, eficiência e escalabilidade.</>,
            p2: <>Ao longo da minha carreira, trabalhei em projetos de alta complexidade, implementando metodologias ágeis (Scrum, Kanban) e práticas como <strong>Clean Code, TDD e Design Patterns</strong>. Minha abordagem combina back-end, front-end, banco de dados e infraestrutura em nuvem, garantindo soluções robustas e de alto desempenho.</>,
            p3: "Mais do que apenas escrever linhas de código, busco criar experiências digitais que façam a diferença.",
        },
        experience: {
            title: "Minha Jornada",
            subtitle: "Uma trajetória focada em entregar valor através da tecnologia e inovação.",
            present: "O momento",
            items: [
                {
                    role: "Analista Full Stack",
                    company: "Minas Verde John Deere",
                    description: "Responsável por todo o ciclo de desenvolvimento de software, desde a concepção até a implantação e manutenção.",
                    period: "Dez 2024 - O momento",
                    location: "Lavras, Minas Gerais, Brasil",
                },
                {
                    role: "Desenvolvedor Full Stack",
                    company: "Uai Code",
                    description: "Desenvolvimento e manutenção de sistemas web e mobile, incluindo ERPs e plataformas de transporte.",
                    period: "Out 2023 - Jan 2025",
                    location: "Minas Gerais, Brasil (Remoto)",
                },
                {
                    role: "Desenvolvedor Web",
                    company: "RAVANEDA CONSULTORIA E TECNOLOGIA LTDA",
                    description: "Desenvolvimento Full Stack com Angular e Node.js. Implementação de APIs robustas e interfaces performáticas.",
                    period: "Jun 2023 - Fev 2024",
                    location: "Curitiba, Paraná, Brasil (Remoto)",
                },
                {
                    role: "Desenvolvedor Full Stack",
                    company: "Obra Prima",
                    description: "Responsável pelo ciclo de desenvolvimento de projetos web, manutenção de portal do cliente e APIs.",
                    period: "Mai 2022 - Nov 2022",
                    location: "Curitiba, Paraná, Brasil (Remoto)",
                },
                {
                    role: "Desenvolvedor Full Stack",
                    company: "TI Moderna",
                    description: "Atuação como Desenvolvedor Web e Testador de Sistemas em diversos projetos de TI moderna.",
                    period: "Jun 2021 - Abr 2022",
                    location: "Minas Gerais, Brasil (Remoto)",
                },
            ]
        },
        technologies: {
            title: "Stack Tecnológico",
            subtitle: "Ferramentas e tecnologias que utilizo para transformar ideias em realidade.",
            categories: {
                backend: "Backend & Cloud",
                frontend: "Frontend & Mobile",
                database: "Banco de Dados & Ferramentas",
            }
        },
        contact: {
            title: "Entre em Contato",
            subtitle: "Vamos construir algo incrível juntos. Envie uma mensagem!",
            whatsapp: "WhatsApp",
            email: "Email",
            location: "Localização",
            locationValue: "Minas Gerais, Brasil",
            form: {
                name: "Nome",
                namePlaceholder: "Seu nome",
                phone: "Telefone",
                phonePlaceholder: "(00) 00000-0000",
                email: "Email",
                emailPlaceholder: "seu@email.com",
                subject: "Assunto",
                subjectPlaceholder: "Sobre o que vamos falar?",
                message: "Mensagem",
                messagePlaceholder: "Conte-me mais sobre o seu projeto...",
                send: "Enviar Mensagem",
                sending: "Enviando...",
            },
            errors: {
                nameRequired: "Nome é obrigatório",
                phoneRequired: "Número é obrigatório",
                emailRequired: "Email é obrigatório",
                emailInvalid: "Email inválido",
                subjectRequired: "Assunto é obrigatório",
                messageRequired: "Mensagem é obrigatória",
            }
        },
        footer: {
            rights: "Todos os direitos reservados.",
        },
        cv: {
            title: "Currículo",
            role: "Desenvolvedor Full Stack",
            location: "Minas Gerais, Brasil",
            contact: {
                phone: "+55 (35) 99974-6431",
                email: "jonasnoliveirabr@gmail.com",
                linkedin: "linkedin.com/in/jonas-n-oliveira",
                github: "github.com/jonas-oliveira",
                website: "jonasoliveiradev.vercel.app"
            },
            summary: {
                title: "Resumo Profissional",
                content: "Desenvolvedor Full Stack com experiência no desenvolvimento end-to-end de sistemas web e mobile. Expertise em arquiteturas modernas, DevOps, Cloud Computing e metodologias ágeis. Apaixonado por inovação, qualidade de código e entrega de soluções de alto valor."
            },
            experience: {
                title: "Experiência Profissional"
            },
            education: {
                title: "Formação Acadêmica",
                items: [
                    {
                        degree: "Ciência da Computação",
                        institution: "Unincor",
                        period: "2022 - 2025"
                    }
                ]
            },
            skills: {
                title: "Competências",
                techs: [
                    "Node.js", "TypeScript", "React", "Next.js", "Angular",
                    "React Native", "PostgreSQL", "MongoDB", "MySQL",
                    "Docker", "AWS", "Azure", "CI/CD", "Git"
                ]
            },
            languages: {
                title: "Idiomas",
                items: [
                    { name: "Português", level: "Nativo" },
                    { name: "Inglês", level: "Avançado" }
                ]
            },
            download: "Baixar PDF",
            backToPortfolio: "Voltar ao Portfolio"
        },
    },
    en: {
        header: {
            about: "About",
            experience: "Experience",
            technologies: "Technologies",
            contact: "Contact",
        },
        hero: {
            greeting: "Hello, I'm Jonas Oliveira",
            role: "Full Stack Developer",
            description: "Full Stack Developer passionate about technology, innovation, and high-performance software architecture.",
            cta: "Learn more",
        },
        about: {
            title: "About me",
            p1: <>I am a <span className="text-primary font-semibold">Full Stack Developer</span> passionate about innovation. My experience includes <strong>end-to-end</strong> development of web and mobile systems, software architecture, DevOps & Cloud, as well as advanced engineering practices to ensure quality, efficiency, and scalability.</>,
            p2: <>Throughout my career, I have worked on high-complexity projects, implementing agile methodologies (Scrum, Kanban) and practices like <strong>Clean Code, TDD, and Design Patterns</strong>. My approach combines back-end, front-end, databases, and cloud infrastructure, ensuring robust and high-performance solutions.</>,
            p3: "More than just writing lines of code, I strive to create digital experiences that make a difference.",
        },
        experience: {
            title: "My Journey",
            subtitle: "A trajectory focused on delivering value through technology and innovation.",
            present: "Present",
            items: [
                {
                    role: "Full Stack Analyst",
                    company: "Minas Verde John Deere",
                    description: "Responsible for the entire software development life cycle, from conception to deployment and maintenance.",
                    period: "Dec 2024 - Present",
                    location: "Lavras, Minas Gerais, Brazil",
                },
                {
                    role: "Full Stack Developer",
                    company: "Uai Code",
                    description: "Development and maintenance of web and mobile systems, including ERPs and transport platforms.",
                    period: "Oct 2023 - Jan 2025",
                    location: "Minas Gerais, Brazil (Remote)",
                },
                {
                    role: "Web Developer",
                    company: "RAVANEDA CONSULTORIA E TECNOLOGIA LTDA",
                    description: "Full Stack development with Angular and Node.js. Implementation of robust APIs and performant interfaces.",
                    period: "Jun 2023 - Feb 2024",
                    location: "Curitiba, Paraná, Brazil (Remote)",
                },
                {
                    role: "Full Stack Developer",
                    company: "Obra Prima",
                    description: "Responsible for the development cycle of web projects, maintenance of client portal and APIs.",
                    period: "May 2022 - Nov 2022",
                    location: "Curitiba, Paraná, Brazil (Remote)",
                },
                {
                    role: "Full Stack Developer",
                    company: "TI Moderna",
                    description: "Acting as Web Developer and System Tester in various modern IT projects.",
                    period: "Jun 2021 - Apr 2022",
                    location: "Minas Gerais, Brazil (Remote)",
                },
            ]
        },
        technologies: {
            title: "Tech Stack",
            subtitle: "Tools and technologies I use to turn ideas into reality.",
            categories: {
                backend: "Backend & Cloud",
                frontend: "Frontend & Mobile",
                database: "Database & Tools",
            }
        },
        contact: {
            title: "Get in Touch",
            subtitle: "Let's build something amazing together. Send a message!",
            whatsapp: "WhatsApp",
            email: "Email",
            location: "Location",
            locationValue: "Minas Gerais, Brazil",
            form: {
                name: "Name",
                namePlaceholder: "Your name",
                phone: "Phone",
                phonePlaceholder: "(00) 00000-0000",
                email: "Email",
                emailPlaceholder: "your@email.com",
                subject: "Subject",
                subjectPlaceholder: "What are we talking about?",
                message: "Message",
                messagePlaceholder: "Tell me more about your project...",
                send: "Send Message",
                sending: "Sending...",
            },
            errors: {
                nameRequired: "Name is required",
                phoneRequired: "Phone is required",
                emailRequired: "Email is required",
                emailInvalid: "Invalid email",
                subjectRequired: "Subject is required",
                messageRequired: "Message is required",
            }
        },
        footer: {
            rights: "All rights reserved.",
        },
        cv: {
            title: "Curriculum Vitae",
            role: "Full Stack Developer",
            location: "Minas Gerais, Brazil",
            contact: {
                phone: "+55 (35) 99974-6431",
                email: "jonasnoliveirabr@gmail.com",
                linkedin: "linkedin.com/in/jonas-n-oliveira",
                github: "github.com/jonas-oliveira",
                website: "jonasoliveiradev.vercel.app"
            },
            summary: {
                title: "Professional Summary",
                content: "Full Stack Developer with experience in end-to-end development of web and mobile systems. Expertise in modern architectures, DevOps, Cloud Computing, and agile methodologies. Passionate about innovation, code quality, and delivering high-value solutions."
            },
            experience: {
                title: "Professional Experience"
            },
            education: {
                title: "Education",
                items: [
                    {
                        degree: "Computer Science",
                        institution: "Unincor",
                        period: "2022 - 2025"
                    }
                ]
            },
            skills: {
                title: "Skills",
                techs: [
                    "Node.js", "TypeScript", "React", "Next.js", "Angular",
                    "React Native", "PostgreSQL", "MongoDB", "MySQL",
                    "Docker", "AWS", "Azure", "CI/CD", "Git"
                ]
            },
            languages: {
                title: "Languages",
                items: [
                    { name: "Portuguese", level: "Native" },
                    { name: "English", level: "Advanced" }
                ]
            },
            download: "Download PDF",
            backToPortfolio: "Back to Portfolio"
        }
    },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>('pt');

    useEffect(() => {
        // Check local storage first
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage) {
            setLanguageState(savedLanguage);
        } else {
            // Create auto detection based on browser language
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith('pt')) {
                setLanguageState('pt');
            } else {
                setLanguageState('en');
            }
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
