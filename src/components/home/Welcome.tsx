import React from 'react';
import { motion } from 'framer-motion';

const Welcome = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        WELCOME TO THE 7TH IAHR AFRICA CONGRESS
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="w-full"
                        >
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Congress Objectives</h3>
                            <p className="text-gray-600 mb-6">
                                The 7th IAHR Africa Congress aims to provide a vibrant platform for scientists, engineers, organizations, central and local authorities, companies, and young professionals to share recent advances, experiences, and innovative trends in hydro-environmental science and engineering.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Following the success of the 6th IAHR Africa Congress held in Morocco in 2024, the 2026 edition in Kigali represents a significant milestone in our collective efforts to advance sustainable, climate-resilient water management solutions tailored to Africa&#39;s unique challenges and opportunities.
                            </p>
                            <p className="text-gray-600">
                                Under the overarching theme &#34;Water Resilience and Innovation,&#34; the congress will foster collaboration, knowledge exchange, and actionable strategies for addressing water and environmental challenges across the continent.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;