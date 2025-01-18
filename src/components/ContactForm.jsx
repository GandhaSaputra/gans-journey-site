import emailjs from '@emailjs/browser';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.message) {
            newErrors.message = 'Message is required';
        }
        return newErrors;
        // setErrors(newErrors);
        // return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSending(true);
            emailjs
                .send(
                    'service_3g9v6u6',
                    'template_3lpbqzl',
                    formData,
                    'p_ONMSChXjFHxhMtu'
                )
                .then((response) => {
                    console.log(response.text);
                    toast.success('Message sent successfully');
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    });
                })
                .catch((error) => {
                    console.log('FAILED...', error);
                    toast.error('Failed to send message, please try again');
                })
                .finally(() => {
                    setIsSending(false);
                });
        }
    };

    return (
        <div className='p-4 lg:w-3/4' id='contact'>
            <Toaster />
            <h2 className='my-8 text-center text-4xl font-semibold tracking-tighter'>
                Let&apos;s Connect
            </h2>
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                onSubmit={handleSubmit}
            >
                <div className='mb-4 flex space-x-4'>
                    <div className='lg:w-1/2'>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Name'
                            className='mb-4 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-s-teal-400 focus:outline-none'
                        />
                        {errors?.name && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className='text-sm text-red-500'
                            >
                                {errors.name}
                            </motion.p>
                        )}
                    </div>
                    <div className='lg:w-1/2'>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Email'
                            className='mb-4 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-s-teal-400 focus:outline-none'
                        />
                        {errors?.email && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className='text-sm text-red-500'
                            >
                                {errors.email}
                            </motion.p>
                        )}
                    </div>
                </div>
                <div className='mt-6 mb-8'>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Message'
                        rows={6}
                        className='mb-4 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-s-teal-400 focus:outline-none'
                    />
                    {errors?.message && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className='text-sm text-red-500'
                        >
                            {errors.message}
                        </motion.p>
                    )}
                </div>
                <button
                    type='submit'
                    disabled={isSending}
                    className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${
                        isSending ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                >
                    <div className='flex items-center justify-center gap-2'>
                        {isSending ? 'Sending...' : 'Send'}
                        <FiSend />
                    </div>
                </button>
            </motion.form>
        </div>
    );
};

export default ContactForm;
