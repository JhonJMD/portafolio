// Language-neutral data + bilingual text objects ({ es, en }). UI strings live in src/content/ui.js.

export const siteConfig = {
  name: 'Jhon Jairo Marín Díaz',
  email: 'jjmdcampus@gmail.com',
  cvUrl: '/cv-jhon-marin.pdf',
  web3formsKey: import.meta.env?.VITE_WEB3FORMS_KEY || '',
  socials: {
    linkedin: 'https://www.linkedin.com/in/jhon-jairo-mar%C3%ADn-d%C3%ADaz-0685182a4/',
    github: 'https://github.com/JhonJMD',
    whatsapp: 'https://wa.me/573124198288',
  },
};

// Colors for the 3D scenes (must stay in sync with the CSS tokens in index.css).
export const scenePalette = {
  dark: { accent: '#5EEAD4', accent2: '#A78BFA', dim: '#2B3550' },
  light: { accent: '#0F766E', accent2: '#6D28D9', dim: '#9AA7C0' },
};

export const heroSkills = ['Python', 'TypeScript', 'LangGraph', 'LangChain', 'Node.js', 'React'];

export const helpItems = [
  {
    id: 'idea',
    icon: 'Lightbulb',
    title: { es: 'Aterrizar tu idea de negocio', en: 'Turn your business idea into a product' },
    text: {
      es: 'Te ayudo a convertir una idea en un producto digital concreto, con un alcance claro y por fases.',
      en: 'I help you turn an idea into a concrete digital product, with a clear scope delivered in phases.',
    },
  },
  {
    id: 'process',
    icon: 'Zap',
    title: { es: 'Optimizar y acelerar procesos', en: 'Optimize and speed up processes' },
    text: {
      es: 'Automatizo tareas manuales y repetitivas para que tu equipo trabaje más rápido y con menos errores.',
      en: 'I automate manual, repetitive tasks so your team works faster and with fewer mistakes.',
    },
  },
  {
    id: 'agents',
    icon: 'Bot',
    title: { es: 'Agentes de IA e integraciones', en: 'AI agents and integrations' },
    text: {
      es: 'Chatbots y agentes con LangChain y LangGraph, conectados a tus APIs, bases de datos y canales como WhatsApp.',
      en: 'Chatbots and agents built with LangChain and LangGraph, connected to your APIs, databases and channels like WhatsApp.',
    },
  },
];

export const skillGroups = [
  { id: 'lang', label: { es: 'Lenguajes', en: 'Languages' }, items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL'] },
  { id: 'ai', label: { es: 'Backend e IA', en: 'Backend & AI' }, items: ['LangChain', 'LangGraph', 'LLMs', 'Node.js', 'Spring Boot', 'FastAPI'] },
  { id: 'front', label: { es: 'Frontend', en: 'Frontend' }, items: ['React', 'Vue 3', 'Vite', 'Tailwind CSS'] },
  { id: 'tools', label: { es: 'Herramientas', en: 'Tools' }, items: ['Git', 'GitHub', 'DevOps', 'Vercel'] },
];

export const experience = [
  {
    id: 'fullservice',
    type: 'work',
    period: { es: '2025 – Actualidad', en: '2025 – Present' },
    role: { es: 'Desarrollador Full Stack IA · Semi Senior', en: 'AI Full Stack Developer · Semi Senior' },
    org: 'FullService · Campuslands',
    note: { es: 'Equipo de desarrollo interno', en: 'In-house development team' },
    summary: {
      es: 'Diseño y desarrollo de agentes conversacionales y flujos lógicos con LangChain y LangGraph (Python y TypeScript) que automatizan procesos comerciales y reducen tareas manuales.',
      en: 'Design and development of conversational agents and logic flows with LangChain and LangGraph (Python and TypeScript) that automate business processes and cut manual work.',
    },
    projects: ['Orbit', 'Cajasan', 'Compumax', 'Cobranza AI', 'Avicampo', 'CasaBlanca', 'Guatemala', 'IA-Academy', 'Feria Juguetes'],
  },
  {
    id: 'campusdev',
    type: 'work',
    period: { es: '2025', en: '2025' },
    role: { es: 'Desarrollador Full Stack — IA / Chatbots', en: 'Full Stack Developer — AI / Chatbots' },
    org: 'CampusDev',
    note: { es: 'Startup de chatbots con IA', en: 'AI chatbot startup' },
    summary: {
      es: 'Soluciones Full Stack de extremo a extremo y agentes inteligentes con LangChain y LangGraph, aplicando buenas prácticas y trabajo en equipo.',
      en: 'End-to-end Full Stack solutions and intelligent agents with LangChain and LangGraph, following good practices and teamwork.',
    },
    projects: ['Iza', 'Denario'],
  },
  {
    id: 'biinteli',
    type: 'work',
    period: { es: 'Proyecto independiente', en: 'Independent project' },
    role: { es: 'Chatbot SaaS para gestión de pedidos', en: 'Order-management SaaS chatbot' },
    org: 'Biinteli',
    note: { es: 'Empresa aparte', en: 'Separate company' },
    summary: {
      es: 'Chatbot configurable y multiempresa para pedidos, recomendación de productos según síntomas y coordinación de envíos. Primera fase en el sector farmacéutico.',
      en: 'Configurable multi-company chatbot for orders, symptom-based product recommendations and delivery coordination. First phase in the pharmacy sector.',
    },
    projects: ['LangGraph', 'Qdrant', 'WhatsApp'],
  },
  {
    id: 'uts',
    type: 'education',
    period: { es: '2022 – Actualidad', en: '2022 – Present' },
    role: { es: 'Tecnólogo en Desarrollo de Sistemas Informáticos', en: 'Associate degree in Software Systems Development' },
    org: 'Unidades Tecnológicas de Santander',
    note: { es: 'En curso', en: 'In progress' },
    summary: { es: '', en: '' },
    projects: [],
  },
  {
    id: 'campuslands',
    type: 'education',
    period: { es: '2023 – 2024', en: '2023 – 2024' },
    role: { es: 'Técnico Laboral en Competencias de Programación de Software', en: 'Vocational Technician in Software Programming' },
    org: 'Campuslands',
    note: { es: '', en: '' },
    summary: { es: '', en: '' },
    projects: [],
  },
];

// category: 'ai' | 'fullstack' | 'freelance'
export const projects = [
  {
    id: 'orbit',
    name: 'Orbit',
    org: 'FullService',
    category: 'ai',
    description: {
      es: 'Agentes de llamadas con IA, panel de administración y servicio de agente en Python.',
      en: 'AI voice-call agents, an admin panel and a Python agent service.',
    },
    stack: ['Node.js', 'TypeScript', 'React', 'LangGraph', 'FastAPI'],
  },
  {
    id: 'cajasan',
    name: 'Intranet Cajasan',
    org: 'FullService',
    category: 'fullstack',
    description: {
      es: 'Intranet corporativa: API REST y aplicación web, desplegadas de forma independiente.',
      en: 'Corporate intranet: REST API and web app, deployed independently.',
    },
    stack: ['Express', 'TypeScript', 'Sequelize', 'MySQL', 'Vue 3'],
  },
  {
    id: 'compumax',
    name: 'Compumax',
    org: 'FullService',
    category: 'ai',
    description: {
      es: 'Agente conversacional con consulta de disponibilidad de parqueaderos, integración con su ERP y búsqueda semántica.',
      en: 'Conversational agent with parking availability lookup, ERP integration and semantic search.',
    },
    stack: ['Node.js', 'Vue 3', 'Qdrant', 'LangChain'],
  },
  {
    id: 'cobranza',
    name: 'Cobranza AI',
    org: 'FullService',
    category: 'ai',
    description: {
      es: 'Chatbot de cobranza de cartera, multi-tenant (SaaS), con control de acceso por roles y varios canales.',
      en: 'Receivables-collection chatbot, multi-tenant (SaaS), with role-based access control and multiple channels.',
    },
    stack: ['Node.js', 'Express', 'Vue 3', 'RBAC'],
  },
  {
    id: 'avicampo',
    name: 'Avicampo',
    org: 'FullService',
    category: 'ai',
    description: {
      es: 'Agente de IA con servicio en FastAPI y LangChain, backend en Node y aplicación web.',
      en: 'AI agent with a FastAPI + LangChain service, a Node backend and a web app.',
    },
    stack: ['FastAPI', 'LangChain', 'Node.js'],
  },
  {
    id: 'iza',
    name: 'Iza',
    org: 'CampusDev',
    category: 'ai',
    description: {
      es: 'Chatbot de Campuslands con panel administrativo y servicio de agente.',
      en: 'Campuslands chatbot with an admin panel and an agent service.',
    },
    stack: ['FastAPI', 'LangChain', 'Gemini', 'Node.js', 'React'],
  },
  {
    id: 'denario',
    name: 'Denario Capital',
    org: 'CampusDev',
    category: 'ai',
    description: {
      es: 'Bot conversacional con backend, frontend y agente para Denario Capital.',
      en: 'Conversational bot with backend, frontend and agent for Denario Capital.',
    },
    stack: ['Chatbot', 'Backend', 'Frontend'],
  },
  {
    id: 'biinteli',
    name: 'Biinteli',
    org: 'Independiente',
    category: 'ai',
    description: {
      es: 'Chatbot SaaS multiempresa para pedidos por WhatsApp, con paneles de administración. Primera fase: sector farmacéutico.',
      en: 'Multi-company SaaS chatbot for WhatsApp orders, with admin panels. First phase: pharmacy sector.',
    },
    stack: ['LangGraph', 'Qdrant', 'Express', 'TypeScript', 'WhatsApp'],
  },
  {
    id: 'odonto',
    name: { es: 'Agendamiento para odontologías', en: 'Dental clinic scheduling' },
    org: 'Freelance',
    category: 'freelance',
    description: {
      es: 'Automatización de la gestión y agendamiento de citas en consultorios odontológicos, reduciendo tareas manuales.',
      en: 'Automation of appointment management and scheduling for dental clinics, cutting manual work.',
    },
    stack: [],
  },
  {
    id: 'frutos',
    name: 'Frutos de la Loma',
    org: 'Freelance',
    category: 'freelance',
    description: {
      es: 'Catálogo web de café, cacao y vino artesanal de Santander; el cliente arma su pedido y lo envía por WhatsApp.',
      en: 'Web catalog of artisanal coffee, cacao and wine from Santander; customers build an order and send it via WhatsApp.',
    },
    stack: ['React', 'Vercel', 'WhatsApp'],
    link: 'https://frutos-de-la-loma.vercel.app',
  },
  {
    id: 'caseritas',
    name: 'Caseritas',
    org: 'Freelance',
    category: 'freelance',
    description: {
      es: 'Mockup web para Caseritas, tortas y mantecadas hechas en casa.',
      en: 'Web mockup for Caseritas, homemade cakes and muffins.',
    },
    stack: ['React', 'Node.js', 'Vercel'],
  },
];
