import React from 'react';
import { motion } from 'framer-motion';
import Layout from "@/components/layout/Layout";

const ThemeCongressPage = () => {
    return (
        <Layout title="Theme and Congress Topics">
            
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <nav className="text-text-secondary text-sm">
                        <span>Programme</span> / <span className="text-text-primary">Theme and Congress Topics</span>
                    </nav>
                </div>
            </div>

            <section className="py-8 px-2 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl font-bold text-text-primary mb-8 uppercase tracking-wide">
                            WATER RESILIENCE & INNOVATION
                        </h2>
                        <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold text-text-primary mb-6 uppercase">Introduction</h3>
                        <div className="space-y-6 text-text-secondary leading-relaxed">
                            <p>
                                The 7th IAHR Africa Congress 2026 in Kigali is a landmark event that centers around the pivotal theme of
                                Water Resilience & Innovation. The global gathering will address the multifaceted challenges posed by
                                the dynamic intersection of water resources management, climate change adaptation, and the intricate
                                interplay between water, energy, food security, and nature. It shall provide a platform for experts,
                                researchers, and practitioners from around the world to converge and share cutting-edge insights,
                                groundbreaking research, and new solutions in the field of water engineering to meet these challenges.
                            </p>

                            <p>
                                As nations grapple with the effects of climate change, the Congress will delve into innovative water
                                engineering that adapts to the evolving challenges posed by a changing hydro-environment. Another focal
                                point of the Congress will be the exploration of innovative concepts that alleviate the increasing
                                pressure on the water-energy-food nexus and acknowledge the intrinsic linkages between these vital
                                resources. Understanding and optimizing this nexus is crucial for fostering sustainable development,
                                and the Congress shall promote the global exchange and collaboration for integrated approaches that
                                maximize these interconnected resources.
                            </p>

                            <p>
                                Finally, a key objective of the 7th IAHR Africa Congress 2026 in Kigali is to address the United Nations
                                Sustainable Development Goals (SDGs) related to water resources. These goals encompass a spectrum of
                                global targets to tackle issues ranging from clean water and sanitation access to sustainable cities
                                and communities, climate action, and life below water and on land.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-8 px-2 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="bg-white overflow-hidden flex justify-center"
                    >
                        <img
                            src="/images/programme.png"
                            alt="Congress Sub-Themes and Topics"
                            className="w-full max-w-5xl h-auto object-contain"
                        />
                    </motion.div>
                </div>
            </section>

        </Layout>
    );
};

export default ThemeCongressPage;