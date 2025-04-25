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
                            I am pleased to extend a warm invitation on behalf of the International Association for Hydro-Environment Engineering and Research (IAHR) to join us at the upcoming 7th IAHR Africa Congress in Kigali, Rwanda, taking place from October 12th to 15th, 2026.
                        </p>
                        <p className="text-gray-700 mb-6">
                            After a successful congress in Morocco in 2024, we are excited to continue the IAHR Africa Congress, a platform that unites distinguished experts to collectively tackle the urgent issues of climate change and water scarcity in Africa, with implications that extend globally. Your participation would be invaluable in fostering meaningful discussions, sharing expertise, and collectively paving the way towards sustainable solutions for the future.
                        </p>
                        <div className="flex justify-start mt-4">
                            <button className="px-4 py-2 bg-quaternary text-white rounded hover:bg-blue-700 transition">
                                READ MORE
                            </button>
                        </div>
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
                    <h4 className="font-medium text-gray-800">Prof. Joseph Sang</h4>
                    <p className="text-quaternary">President, IAHR</p>
                </div>
            </div>
        </section>
    );
};

export default PresidentMessage;