import { HERO } from '../constants';
import gansImg from '../assets/gans.png';
import { motion } from 'framer-motion';
const Hero = () => {
    return (
        <section className='flex min-h-screen flex-wrap items-center'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className='w-full md:w-1/2 '
            >
                <p className='mt-20 md:mt-0 p-2 text-xl tracking- lg:text-2xl'>
                    {HERO.greet}
                </p>
                <h2 className='mt-2 mb-2 px-2 text-2xl font-bold md:text-2xl lg:text-4xl'>
                    {HERO.name}
                </h2>
                <h2 className='mb-4 px-2 text-2xl font-bold md:text-2xl lg:text-4xl'>
                    {HERO.role}
                </h2>
                <p className='mb-4 p-2 text-md'>{HERO.description}</p>
                <motion.a
                    href='/Gandha-CV-2024.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='mx-2 inline-block rounded-md border-[1.5px] border-white px-4 py-2 
                    text-white font-inherit
                    hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 
                    hover:text-white hover:bg-clip-padding hover:border-transparent
                    transition-all duration-300 ease-in-out animate-bounce font-medium'
                >
                    Curriculum Vitae
                </motion.a>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className='w-full md:w-1/2 lg:p-8'
            >
                <div className='flex justify-center'>
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        src={gansImg}
                        width={550}
                        height={550}
                        alt={HERO.name}
                        className='rounded-3xl'
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
