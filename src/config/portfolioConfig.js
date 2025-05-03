// Portfolio configuration file
// This file allows easy customization of portfolio content
export const siteConfig = {
    // Personal Information
    name: "Developer Portfolio",
    title: "Full Stack Developer",
    email: "contact@example.com",
    // Site content
    bio: "Desarrollador Full Stack con una profunda pasión por la tecnología y el impacto que puede generar en la vida de las personas. Combino el dominio del backend y frontend para crear soluciones funcionales, escalables y centradas en el usuario. Mi experiencia en sistemas y mantenimiento me da una visión integral del ecosistema tecnológico. Me destaco por habilidades técnicas y blandas: liderazgo empático, comunicación clara y trabajo colaborativo.",
    mission: "Desarrollar soluciones digitales con propósito, que transformen experiencias y mejoren procesos en las personas y las organizaciones.",
    vision: "Convertirme en un referente en innovación tecnológica, creando software con impacto humano.",
    // Social Media Links
    socials: {
        linkedin: "https://linkedin.com/in/username",
        github: "https://github.com/username",
        whatsapp: "https://wa.me/123456789",
        discord: "https://discord.com/users/userid"
    },
    // Theme Colors
    colors: {
        primary: "#26010B",
        secondary: "#A64669",
        accent: "#F2DB94",
        light: "#F2F2F2",
        dark: "#0D0D0D"
    },
};

// Projects data
export const projectsData = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with product catalog, shopping cart, and payment processing.",
        image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        stack: ["React", "Node.js", "MongoDB", "Express", "Redux"],
        challenges: "Implementing a secure payment gateway and optimizing product search for large catalogs.",
        demo: "https://demo.example.com",
        repo: "https://github.com/username/ecommerce-platform"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team collaboration features.",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        stack: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
        challenges: "Implementing real-time synchronization and handling complex permission systems.",
        demo: "https://demo.example.com",
        repo: "https://github.com/username/task-management-app"
    },
    {
        id: 3,
        title: "AI Content Generator",
        description: "A web application that uses AI to generate content for various purposes, including blog posts and social media.",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        stack: ["React", "Python", "Flask", "OpenAI API", "PostgreSQL"],
        challenges: "Optimizing API usage for cost efficiency and implementing content filtering mechanisms.",
        demo: "https://demo.example.com",
        repo: "https://github.com/username/ai-content-generator"
    }
];

// Services data
export const servicesData = [
    {
        id: 1,
        title: "Desarrollo Web Full Stack",
        description: "Creación de aplicaciones web completas, desde el diseño de interfaz hasta la implementación del backend.",
        icon: "Code",
    },
    {
        id: 2,
        title: "Automatización de procesos",
        description: "Optimización de flujos de trabajo mediante herramientas de automatización y scripts personalizados.",
        icon: "Cog",
    },
    {
        id: 3,
        title: "Integración de APIs e inteligencia artificial",
        description: "Conexión de sistemas y servicios mediante APIs y aprovechamiento de tecnologías de IA para agregar valor.",
        icon: "Cable",
    },
    {
        id: 4,
        title: "Consultorías técnicas",
        description: "Asesoramiento en decisiones tecnológicas y acompañamiento en procesos de desarrollo.",
        icon: "HelpingHand",
    }
];