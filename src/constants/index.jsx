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

import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';

export const NAVIGATION_LINKS = [
    { label: 'Bio', href: '#bio' },
    { label: 'Work Experience', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    // { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export const HERO = {
    greet: 'Hi! 👋🏻, my name is',
    name: `Gandha Saputra`,
    role: `I'm a Front-End Developer`,
    description:
        'I’m a Frontend & React Native developer with 4+ years of experience building production-grade mobile and web applications. I focus on performance optimization, realtime systems, and modular architectures that scale across clients. I have hands-on experience integrating RESTful APIs, implementing robust state management (Redux / Zustand), and shipping apps via CI/CD to the App Store and Google Play.',
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
    `I’m a Frontend and React Native engineer with 4+ years of experience delivering production-quality mobile and web applications. My work centers on building performant, maintainable systems: I design modular component libraries, optimize rendering and memory usage for mobile, and implement realtime features (chat, live updates) with resilient reconnection and offline strategies. I routinely integrate and harden RESTful APIs, collaborate with architects on efficient endpoints and caching strategies, and implement CI/CD pipelines for automatic builds and staged rollouts to App Store and Google Play.`,
    `On the frontend I prioritize clean, testable code—component-driven development, typed code with TypeScript, and predictable state management using Redux or Zustand. On the backend side I’ve worked with Node.js/Express services and databases (Postgres / MongoDB), building and consuming APIs with attention to security, rate-limiting, and data integrity. I enjoy turning ambiguous product requirements into clear technical plans, partnering closely with product, design, and QA to ship end-to-end features that improve key user metrics.`,
    `Outside of work I build side projects to deepen my backend and systems knowledge (scalable APIs, background processing, and observability), and I’m always refining performance profiles and monitoring to keep apps stable at scale.`,
];

export const SKILLS = [
    {
        icon: <SiTypescript className='text-4xl text-cyan-600 lg:text-5xl' />,
        name: 'Typescript & Javascript',
        experience: '4+ years',
    },
    {
        icon: <FaReact className='text-4xl text-cyan-400 lg:text-5xl' />,
        name: 'React & React Native',
        experience: '4+ years',
    },
    {
        icon: <SiRedux className='text-4xl text-indigo-600 lg:text-5xl' />,
        name: 'Redux / React Context / Zustand',
        experience: '4+ years',
    },
    {
        icon: <TbBrandNextjs className='text-4xl text-white lg:text-5xl' />,
        name: 'Next.js',
        experience: '3+ years',
    },
    {
        icon: <FaNodeJs className='text-4xl text-green-600 lg:text-5xl' />,
        name: 'Node.js',
        experience: '3+ years',
    },
    {
        icon: <SiMongodb className='text-4xl text-green-600 lg:text-5xl' />,
        name: 'MongoDB',
        experience: '2+ years',
    },
    {
        icon: (
            <BiLogoPostgresql className='text-4xl text-sky-700 lg:text-5xl' />
        ),
        name: 'PostgreSQL & MySQL',
        experience: '1+ years',
    },
];

export const EXPERIENCES = [
    {
        title: 'React Native Developer',
        company: 'VirtualSpirit',
        duration: 'September 2023 - Present (Remote) // Kuala Lumpur, MY',
        description:
            'At VirtualSpirit, I am responsible for developing core features of the Vinita dating app, including seamless swiping functionality, real-time chat, and advanced filtering options. My work has enhanced the user experience and engagement through performance optimization. I also collaborated on a white-label mobile app project, implementing a modular architecture for easy customization across different clients, ensuring scalability and efficient maintenance.',
    },
    {
        title: 'Front-end Developer',
        company: 'Accelist Lentera Indonesia',
        duration: 'January 2023 - September 2023 (Remote) // Jakarta, ID',
        description:
            'Collaborated with a cross-functional team, including Software Architect, Lead Engineer, QA, Backend, and UI/UX, to deliver high-performance Android and iOS mobile applications for Astra Isuzu, aimed at streamlining sales activity management. Additionally, I contributed to the development of a web application for participant registration in bootcamps, focusing on usability and responsive design.',
    },
    {
        title: 'React Native Developer',
        company: 'Sirkel ID',
        duration: 'July 2022 - September 2022 (Remote) // Bandung, ID',
        description:
            'Assisted in the development of a social media platform tailored for healthcare communities and hospitals, incorporating essential features like a content feed, consulting, and coaching. This project aimed to improve communication and collaboration within the healthcare ecosystem by providing a reliable and engaging platform for professionals and patients.',
    },
    {
        title: 'Front-end Developer',
        company: 'Gobuddy Asia',
        duration: 'November 2021 - December 2022 (Remote) // Hong Kong',
        description:
            'Worked in a dynamic team of app developers, UI/UX designers, backend engineers, and product strategists to develop mobile and web applications, contributing to business growth for clients. Delivered custom features for clients like Yoyokitchen and Sothai, aligning with their unique requirements and enhancing their user engagement.',
    },
];

export const EDUCATION = [
    {
        degree: 'Master of Science in Computer Science',
        institution: 'Stanford University',
        duration: 'September 2012 - June 2014',
        description:
            'Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.',
    },
    {
        degree: 'Bachelor of Science in Information Technology',
        institution: 'University of California, Berkeley',
        duration: 'September 2008 - June 2012',
        description:
            'Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.',
    },
];

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
