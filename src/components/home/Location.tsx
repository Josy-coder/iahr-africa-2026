import React from 'react';
import { motion } from 'framer-motion';

const Location = () => {
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Kigali</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                            <div className="h-64 overflow-hidden rounded-lg">
                                <img
                                    src="/images/kigali-1.jpg"
                                    alt="Kigali City"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="h-64 overflow-hidden rounded-lg">
                                <img
                                    src="/images/kigali-2.jpg"
                                    alt="Kigali Landscape"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <h3 className="text-xl font-semibold text-blue-600 mb-4">Welcome to Kigali</h3>
                        <p className="text-gray-700 mb-6">
                            Between tradition and modernity, Kigali is a city of unequalled sensations. Strolling through the clean streets and vibrant markets with their shimmering colors, the green city offers you a complete change of scenery. The hills of Kigali provide spectacular views, while the rich cultural experiences and warm hospitality will give a taste of Rwanda's unique charm.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Known as the cleanest city in Africa, Kigali combines natural beauty with innovative urban planning and sustainability initiatives, making it an ideal location for discussing water management and environmental solutions.
                        </p>
                        <div className="flex justify-start mt-8">
                            <button className="px-4 py-2 bg-quaternary text-white rounded hover:bg-blue-700 transition">
                                READ MORE
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Location;