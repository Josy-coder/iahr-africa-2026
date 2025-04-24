import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from "@/components/home/Hero";

export default function Sponsorship() {
    return (
        <Layout title="Sponsorship - IAHR Africa Congress 2026">
            {/* Hero Section */}
            <Hero />

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
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Sponsorship</h2>

                            <p className="text-gray-700 mb-6">
                                Sponsorship packages for the 7th edition of the IAHR Africa Congress will be announced in early 2026.
                            </p>

                            <p className="text-gray-700 mb-6">
                                This event offers a significant opportunity for prominent organizations to support our mission and contribute to scholarships for African students. By becoming a sponsor, you'll gain visibility among leading water professionals, researchers, and policymakers from across Africa and globally.
                            </p>

                            <p className="text-gray-700 mb-6">
                                The 7th IAHR Africa Congress will feature several sponsorship tiers, each with unique benefits designed to maximize your organization's exposure before, during, and after the event.
                            </p>

                            <p className="text-gray-700 mb-8">
                                For more information about sponsorship opportunities, please contact us at{' '}
                                <a href="mailto:contact@iahr-af2026.com" className="text-blue-600 hover:underline">
                                    contact@iahr-af2026.com
                                </a>
                            </p>

                        </motion.div>
                    </div>
                </div>
            </section>

        </Layout>
    );
}