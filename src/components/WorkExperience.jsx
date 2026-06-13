import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const WorkExperience = () => {
    return (
        <section className='pt-12' id='work'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='mb-4 text-center text-4xl font-semibold tracking-tighter'
            >
                Work Experience
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='space-y-8 p-4 md:p-10'
            >
                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        key={index}
                        className='rounded-xl border border-stone-50/30 bg-white/10 p-4'
                    >
                        <h3 className='text-2xl font-semibold'>
                            {experience.title}
                        </h3>
                        <p className='text-xl'>{experience.company}</p>
                        <p className='text-sm text-stone-300'>
                            {experience.duration}
                        </p>
                        <ul className='mt-4 list-disc space-y-2 pl-5 text-sm md:text-base'>
                            {experience.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>
                        {experience.impact && (
                            <div className='mt-5 rounded-lg bg-black/20 p-4'>
                                <p className='mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-300'>
                                    Impact
                                </p>
                                <ul className='list-disc space-y-2 pl-5 text-sm md:text-base'>
                                    {experience.impact.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default WorkExperience;
