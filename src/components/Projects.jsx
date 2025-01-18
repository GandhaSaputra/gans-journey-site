import { useState } from 'react';
import { PROJECTS } from '../constants';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

const Projects = () => {
    // State to manage overlay visibility on mobile
    const [visibleProject, setVisibleProject] = useState(null);

    // Toggle overlay visibility for a project
    const toggleOverlay = (id) => {
        setVisibleProject((prev) => (prev === id ? null : id));
    };

    return (
        <section className='pt-20' id='projects'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mb-8 text-center text-3xl lg:text-4xl font-semibold tracking-tighter'
            >
                Projects
            </motion.h2>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
                {PROJECTS.map((project) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        key={project.id}
                        onClick={() => toggleOverlay(project.id)}
                        className='group relative overflow-hidden rounded-3xl cursor-pointer'
                    >
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            src={project.image}
                            alt={project.name}
                            className='h-full w-full object-cover transition duration-500 group-hover:scale-110'
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: visibleProject === project.id ? 1 : 0,
                            }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className='absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg bg-black/50 transition-opacity duration-500 group-hover:opacity-100'
                        >
                            <h3 className='mb-0 md:mb-2 text-xl'>
                                {project.name}
                            </h3>
                            <p className='mb-0 md:mb-4 p-4 text-sm md:text-lg'>
                                {project.description}
                            </p>
                            <div className='flex gap-2'>
                                {project.projectLink?.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300'
                                    >
                                        <div className='flex items-center'>
                                            <span>{link.type}</span>
                                            <MdArrowOutward />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
