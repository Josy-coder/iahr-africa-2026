import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setSubmitMessage('Thank you for your message. We will get back to you soon!');
            setIsSubmitting(false);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

            // Clear message after 5 seconds
            setTimeout(() => {
                setSubmitMessage('');
            }, 5000);
        }, 1500);
    };

    return (
        <Layout title="Contact Us - IAHR Africa Congress 2026">
            {/* Hero Section */}
            <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}>
                <div className="absolute inset-0 bg-blue-900/70"></div>
                <div className="container mx-auto px-4 h-full relative">
                    <div className="flex flex-col h-full justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Contact Us
                            </h1>
                            <p className="text-xl text-white">
                                Have questions about the 7th IAHR Africa Congress? Get in touch with our team.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Contact Form and Info */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-2/3"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

                            {submitMessage && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                                    {submitMessage}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors disabled:bg-blue-400"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/3"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="bg-blue-600 p-3 rounded-full text-white mr-4">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                                        <p className="text-gray-600">
                                            <a href="mailto:contact@iahr-af2026.com" className="hover:text-blue-600">
                                                contact@iahr-af2026.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-600 p-3 rounded-full text-white mr-4">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Congress Venue</h3>
                                        <p className="text-gray-600">
                                            Kigali Convention Centre<br />
                                            KG 2 Roundabout<br />
                                            Kigali, Rwanda
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-600 p-3 rounded-full text-white mr-4">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                                        <p className="text-gray-600">
                                            To be announced
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 p-6 bg-gray-50 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Organizing Institution</h3>
                                <p className="text-gray-600 mb-2">
                                    University of Rwanda<br />
                                    College of Science and Technology<br />
                                    KK 737 Street, Kigali<br />
                                    Rwanda
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-0">
                <div className="h-96 bg-gray-200 w-full">
                    {/* This would be replaced with an actual map component or embedded Google Map */}
                    <div className="h-full w-full flex items-center justify-center text-gray-400 text-lg">
                        Interactive map of Kigali will be embedded here
                    </div>
                </div>
            </section>
        </Layout>
    );
}