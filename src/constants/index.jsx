import {
    // FaXTwitter,
    FaGithub,
    FaLinkedin,
    // FaFacebook,
    // FaDiscord,
    FaInstagram,
} from 'react-icons/fa6';

import projectImage1 from '../assets/vinita-banner.png';
import projectImage2 from '../assets/sothai-banner.png';
import projectImage3 from '../assets/sam-banner.png';
import projectImage4 from '../assets/accelist-bootcamp-banner.png';
import projectImage5 from '../assets/yoyokitchen-banner.png';
import projectImage6 from '../assets/hospitalpreneur-banner.png';

import { SiTypescript } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';

export const NAVIGATION_LINKS = [
    { label: 'Bio', href: '#bio' },
    { label: 'Work Experience', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export const HERO = {
    greet: 'Hi, my name is',
    name: `Gandha Saputra`,
    role: `Mobile And Web Developer`,
    description:
        `Mobile and Web Developer with 4+ years of experience building and shipping mobile apps from scratch to production — across banking, healthcare, social media, and lifestyle platforms. Experienced in end-to-end delivery: architecture, API integration, state management, performance tuning, and App Store/Play Store releases. Currently building at scale inside BRI's flagship super app, Qitta.`,
};

export const PROJECTS = [
    {
        id: 1,
        name: 'Vinita Dating App',
        description:
            'Vinita Dating App redefines the dating experience, offering modern singles a seamless way to build genuine connections. With features like real-time chat, filters, super likes, boosts, and more, finding the right partner has never been easier.',
        image: projectImage1,
        projectLink: [
            {
                type: 'App Store',
                link: 'https://apps.apple.com/us/app/vinita-dating/id6464050904',
            },
            {
                type: 'Play Store',
                link: 'https://play.google.com/store/apps/details?id=com.vinitadating.app',
            },
        ],
        githubLink:
            'https://apps.apple.com/us/app/vinita-south-asian-dating/id6464050904',
    },

    {
        id: 2,
        name: 'Sales activity management (SAM)',
        description:
            'SAM Mobile App streamlines sales activities for Astra Isuzu representatives, offering tools to manage processes, track performance, monitor targets, and more—all with a user-friendly interface for seamless use on the go.',
        image: projectImage3,
        projectLink: [
            {
                type: 'App Store',
                link: 'https://apps.apple.com/id/app/isalesforce-id/id1611307615',
            },
            {
                type: 'Play Store',
                link: 'https://play.google.com/store/apps/details?id=com.isuzu.iami.dealer',
            },
        ],
        githubLink: 'https://github.com/user/task-management-tool',
    },
    {
        id: 3,
        name: 'Accelist Education Indonesia',
        description:
            'Accelist Edukasi Indonesia is a web application bootcamp that empowers aspiring developers with skills in frontend, backend, and fullstack development, preparing them to excel in web and mobile development.',
        image: projectImage4,
        projectLink: [
            {
                type: 'Web Link',
                link: 'https://edukasi.accelist.com/',
            },
        ],
        githubLink: 'https://github.com/user/weather-app',
    },
    {
        id: 4,
        name: 'So Thai Massage App',
        description:
            'So Thai App simplifies booking massage services online, connecting users with therapists in their area. Users can view availability, select preferred therapists, and make secure payments—all from the comfort of their homes.',
        image: projectImage2,
        projectLink: [
            {
                type: 'App Store',
                link: 'https://apps.apple.com/id/app/%E6%B3%B0%E5%A6%83-so-thai/id1660165440',
            },
            {
                type: 'Play Store',
                link: 'https://play.google.com/store/apps/details?id=com.gobuddysothaiapp',
            },
        ],
        githubLink: 'https://github.com/user/ecommerce-platform',
    },
    {
        id: 5,
        name: 'Yoyokitchen App',
        description:
            'Marketplace-based mobile application to make it easier for customers to order products or events provided by the company',
        image: projectImage5,
        projectLink: [
            {
                type: 'App Store',
                link: 'https://apps.apple.com/id/app/%E5%BE%A1%E5%A3%B9%E5%B7%A5%E6%88%BF-yoyokitchen/id1614644019',
            },
            {
                type: 'Play Store',
                link: 'https://play.google.com/store/apps/details?id=com.yoyokitchen.marketplace',
            },
        ],
        githubLink: 'https://github.com/user/blog-platform',
    },
    {
        id: 6,
        name: 'Hospitalpreneur Club App',
        description:
            'A social media app for communities, offering consulting, coaching, and business support to help hospitals and clinics overcome challenges and grow.',
        image: projectImage6,
        githubLink: '',
    },
];

export const BIO = [
    `I build production web and mobile applications with React, React Native, Next.js, JavaScript, and TypeScript. Across more than four years in frontend and mobile development, I have worked on banking, social media, healthcare, transportation, ordering, tracking, smart locker, sales management, and payment experiences.`,
    `My work includes RESTful API integration, predictable state management with Redux and Zustand, performance optimization, debugging, testing, and App Store and Google Play releases. I care about clean code, modular architecture, secure data handling, and codebases that remain readable and scalable as products grow.`,
    `I work closely with product managers, backend developers, QA engineers, and UI/UX designers to turn requirements into stable end-to-end features. I currently contribute to Qitta, BRI's banking super app and rebranded version of BRImo, as a Mobile Developer at PT Bank Rakyat Indonesia Tbk.`,
];

export const SKILLS = [
    {
        icon: <SiTypescript className='text-4xl text-cyan-600 lg:text-5xl' />,
        name: 'Frontend & Mobile',
        details:
            'JavaScript, TypeScript, HTML & CSS, React, React Native, Next.js, Expo',
    },
    {
        icon: <SiRedux className='text-4xl text-indigo-600 lg:text-5xl' />,
        name: 'State & Data',
        details: 'Redux, Zustand, React Query, Zod',
    },
    {
        icon: <FaNodeJs className='text-4xl text-green-600 lg:text-5xl' />,
        name: 'Backend & APIs',
        details:
            'Node.js, Express.js, RESTful APIs, JWT, OAuth, WebSocket, Firebase',
    },
    {
        icon: (
            <BiLogoPostgresql className='text-4xl text-sky-700 lg:text-5xl' />
        ),
        name: 'Databases',
        details: 'MySQL, PostgreSQL, MongoDB',
    },
    {
        icon: <FaGithub className='text-4xl text-white lg:text-5xl' />,
        name: 'Tooling & Delivery',
        details:
            'Git, GitHub, App Store releases, Google Play releases, staged rollouts',
    },
];

export const EXPERIENCES = [
    {
        title: 'Mobile Developer',
        company: 'PT Bank Rakyat Indonesia Tbk',
        duration: 'February 2026 - Present',
        highlights: [
            'Contribute to Qitta, a banking super app and rebranded version of BRImo, using React Native.',
            'Collaborate with QA engineers, backend developers, project managers, and UI/UX designers to deliver user-focused features.',
            'Refactor existing code toward a clean, maintainable, and scalable architecture.',
            'Perform testing, debugging, and performance optimization to improve stability, responsiveness, and reliability.',
        ],
    },
    {
        title: 'React Native Developer',
        company: 'Virtual Spirit Technology Sdn Bhd',
        duration: 'September 2023 - January 2026',
        highlights: [
            'Developed and maintained a large-scale React Native application used by thousands of active users, with a focus on performance, stability, and secure data handling.',
            'Integrated RESTful APIs and optimized state management to improve data flow and reduce UI rendering issues across multiple modules.',
            'Partnered with product managers and backend engineers to break down complex requirements and deliver business-critical features.',
            'Supported App Store and Google Play releases, including build preparation, release notes, and staged rollouts.',
        ],
        impact: [
            'Helped maintain a 4.5 App Store rating across more than 3,000+ user reviews.',
            'Helped deliver two production applications for admins and customers covering ordering, transportation, real-time tracking, and smart locker services.',
        ],
    },
    {
        title: 'Mobile Developer',
        company: 'PT Habilis Solutions Indonesia',
        duration: 'November 2024 - April 2025 | Freelance',
        highlights: [
            'Developed and maintained a subscription-based social media application with React Native and Expo.',
            'Implemented authentication, subscription payments, user feeds, and post creation workflows.',
            'Applied clean code and modular architecture practices to support scalability and maintainability.',
            'Collaborated with backend, QA, and UI/UX teams while handling debugging, testing, and performance optimization.',
        ],
        impact: [
            'Delivered the application on schedule against the agreed functional requirements.',
            'Contributed to a stable codebase designed to reduce technical debt and support long-term maintenance.',
        ],
    },
    {
        title: 'Front-end Developer',
        company: 'Accelist Lentera Indonesia',
        duration: 'January 2023 - September 2023',
        highlights: [
            'Worked with software architects, lead engineers, QA, backend, and UI/UX teams to develop Android and iOS applications for sales activity management.',
            'Built and maintained a responsive web application for participant registration in company-hosted bootcamps.',
            'Implemented structured data handling and input validation across multiple application flows.',
        ],
        impact: [
            'Delivered interactive sales charts, structured reporting sheets, and optimized large-data rendering for production use.',
            'Simplified registration flows with clear validation, error handling, and responsive behavior across devices.',
        ],
    },
    {
        title: 'React Native Developer',
        company: 'Sirkel ID',
        duration: 'July 2022 - September 2022 | Freelance',
        highlights: [
            'Helped develop a healthcare-focused social media application for hospitals and healthcare communities.',
            'Implemented content feeds, consulting, and coaching modules with smooth navigation and interaction.',
            'Worked with the team to improve communication and collaboration features across the healthcare ecosystem.',
        ],
        impact: [
            'Contributed to the delivery of a platform supporting structured collaboration among medical professionals and communities.',
        ],
    },
    {
        title: 'Front-end Developer',
        company: 'Gobuddy Asia',
        duration: 'November 2021 - December 2022',
        highlights: [
            'Built and maintained cross-platform iOS and Android applications with React Native.',
            'Integrated RESTful APIs, third-party services, and Stripe payment flows.',
            'Collaborated with design and product teams to deliver intuitive features under tight timelines.',
            'Applied clean architecture and maintainable coding practices across client applications.',
        ],
        impact: [
            'Shipped three production mobile applications within one year.',
            'Improved application stability through reliable API integration patterns and clean code.',
            'Enabled secure, well-tested payment experiences for end users.',
        ],
    },
];

export const EDUCATION = [
    {
        degree: 'Bachelor of Management',
        institution: 'Tanjungpura University',
        duration: '2017 - 2021',
        description:
            'Built communication, teamwork, and problem-solving skills through academic projects and student organizations. Volunteered for two months in a Tax Volunteer Program, assisting employees with personal tax reporting.',
    },
    {
        degree: 'Fullstack JavaScript Bootcamp',
        institution: 'DumbWays ID',
        duration: 'September 2021 - November 2021',
        description:
            'Completed an intensive fullstack program covering React, React Native, Node.js, Express.js, databases, REST APIs, and frontend-backend integration. Built a database-backed online book ordering PWA and mobile projects including a calculator and to-do application.',
    },
];

export const CONTACT_DETAILS = {
    phone: '+62 896-2662-4244',
    phoneHref: 'tel:+6289626624244',
    email: 'ganzs499@gmail.com',
    emailHref: 'mailto:ganzs499@gmail.com',
    linkedin: 'linkedin.com/in/gandha-saputra',
    linkedinHref: 'https://www.linkedin.com/in/gandha-saputra/',
};

export const SOCIAL_MEDIA_LINKS = [
    // {
    //     href: 'https://x.com/',
    //     icon: <FaFacebook fontSize={25} className='hover:opacity-80' />,
    // },
    // {
    //     href: 'https://x.com/',
    //     icon: <FaDiscord fontSize={25} className='hover:opacity-80' />,
    // },
    {
        href: 'https://www.instagram.com/gandhasptr/',
        icon: <FaInstagram fontSize={25} className='hover:opacity-80' />,
    },
    // {
    //     href: 'https://x.com/',
    //     icon: <FaXTwitter fontSize={25} className='hover:opacity-80' />,
    // },
    {
        href: 'https://github.com/GandhaSaputra',
        icon: <FaGithub fontSize={25} className='hover:opacity-80' />,
    },
    {
        href: 'https://www.linkedin.com/in/gandha-saputra/',
        icon: <FaLinkedin fontSize={25} className='hover:opacity-80' />,
    },
];
