import React from 'react';
import { motion } from 'framer-motion';

const Organizers = () => {
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
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">ORGANIZERS</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </motion.div>

                <div className="flex flex-wrap justify-center items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/4"
                    >
                        <img
                            src="/images/university-of-rwanda-logo.jpg"
                            alt="University of Rwanda"
                            className="max-h-24 mx-auto"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/4"
                    >
                        <img
                            src="/images/iahr-logo.png"
                            alt="IAHR - International Association for Hydro-Environment Engineering and Research"
                            className="max-h-24 mx-auto"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/4"
                    >
                        <img
                            src="/images/rwanda-water-resources-board-logo.png"
                            alt="Rwanda Water Resources Board"
                            className="max-h-24 mx-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Organizers;