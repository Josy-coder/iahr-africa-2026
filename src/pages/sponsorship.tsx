import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Sponsorship() {
    return (
        <Layout title="Sponsorship - IAHR Africa Congress 2026">
            {/* Hero Section */}
            <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/sponsorship-hero.jpg')" }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="container mx-auto px-4 h-full relative">
                    <div className="flex flex-col h-full justify-center">
                        <div className="max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    Sponsorship Opportunities
                                </h1>
                                <p className="text-xl text-white">
                                    Support the advancement of hydro-environmental sciences in Africa
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sponsorship Info */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="w-full md:w-1/2"
                        >
                            <img
                                src="/images/sponsorship-image.jpg"
                                alt="Sponsorship"
                                className="w-full h-96 object-cover rounded-lg shadow-md"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-full md:w-1/2"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Sponsor?</h2>

                            <p className="text-gray-700 mb-6">
                                This congress presents a unique opportunity for leading organizations to support the advancement of hydro-environmental sciences in Africa and to contribute to initiatives such as scholarships for African students and youth leadership programs.
                            </p>

                            <p className="text-gray-700 mb-6">
                                By becoming a sponsor, your organization will gain high-profile visibility among a diverse audience of water professionals, researchers, innovators, young leaders, and policymakers from across Africa and beyond.
                            </p>

                            <p className="text-gray-700 mb-6">
                                The 7th IAHR Africa Congress will offer a variety of sponsorship tiers, each designed to maximize your organization&#39;s exposure before, during, and after the event — including branding opportunities, exhibition spaces, speaking engagements, and digital visibility.
                            </p>

                            <p className="text-gray-700 mb-8">
                                For more information about sponsorship opportunities, please contact us at{' '}
                                <a href="mailto:contact@iahr-af2026.com" className="text-quaternary hover:underline">
                                    contact@iahr-af2026.com
                                </a>
                            </p>

                            <button className="px-6 py-3 bg-quaternary hover:bg-blue-700 text-white rounded-md transition duration-300">
                                Download Sponsorship Brochure
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-center mb-6"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Interested in Sponsoring?</h2>
                            <p className="text-gray-600">
                                For more detailed information about sponsorship opportunities for the 7th IAHR Africa Congress,
                                please contact us. We would be happy to discuss customized sponsorship packages to meet your organization&#39;s objectives.
                            </p>
                        </motion.div>

                        <div className="text-center">
                            <p className="text-quaternary font-medium mb-4">
                                <a href="mailto:contact@iahr-af2026.com" className="hover:underline">
                                    contact@iahr-af2026.com
                                </a>
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-6 py-3 bg-quaternary hover:bg-blue-700 text-white font-bold rounded-md transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}