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

                <div className="text-center mb-10">
                    <p className="text-gray-700 max-w-3xl mx-auto">
                        The event is hosted through a collaboration of Water Partnership Rwanda, the University of Rwanda/ College of Science and Technology, the Rwanda Young Water Professional with the support of key government agencies and various partner organizations.
                    </p>
                </div>

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
                            src="/images/water-partnership-rwanda-logo.png"
                            alt="Water Partnership Rwanda"
                            className="max-h-24 mx-auto"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/4"
                    >
                        <img
                            src="/images/rwanda-young-water-professional-logo.png"
                            alt="Rwanda Young Water Professional"
                            className="max-h-24 mx-auto"
                        />
                    </motion.div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 font-medium">With support from key government agencies:</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
                        <div className="w-full md:w-auto">
                            <img
                                src="/images/wasac-logo.png"
                                alt="Water and Sanitation Corporation (WASAC) Group"
                                className="max-h-16 mx-auto"
                            />
                        </div>
                        <div className="w-full md:w-auto">
                            <img
                                src="/images/rwb-logo.png"
                                alt="Rwanda Water Resources Board"
                                className="max-h-16 mx-auto"
                            />
                        </div>
                        <div className="w-full md:w-auto">
                            <img
                                src="/images/rema-logo.png"
                                alt="Rwanda Environmental Management Authority"
                                className="max-h-16 mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Organizers;