import React from 'react';
import { motion } from 'framer-motion';

const PresidentMessage = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="w-full md:w-3/4"
                    >
                        <p className="text-gray-700 mb-6">
                            On behalf of the International Association for Hydro-Environment Engineering and Research (IAHR), it is my great honor to invite you to the 7th IAHR Africa Congress in Kigali, Rwanda, from December 8th to 11th, 2026.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Following the success of our previous edition in Morocco, this congress continues to be a flagship event uniting leading experts, policymakers, and young professionals tackling climate resilience and water security challenges across Africa and globally. Your presence will enrich vital conversations and contribute to shaping innovative, actionable pathways for a better future.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/4 flex justify-center"
                    >
                        <div className="rounded-full overflow-hidden w-48 h-48 bg-gray-200">
                            <img
                                src="/images/profile-placeholder.jpg"
                                alt="IAHR President"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                <div className="text-center mt-6">
                    <h4 className="font-medium text-gray-800">Prof. Philippe Gourbesville</h4>
                    <p className="text-quaternary">President, IAHR</p>
                </div>
            </div>
        </section>
    );
};

export default PresidentMessage;