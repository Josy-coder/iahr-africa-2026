import React from 'react';
import { motion } from 'framer-motion';

const GreenCity = () => {
    return (
        <section className="relative py-24">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/kigali-green-city.jpg')",
                    filter: "brightness(0.4)"
                }}
            />
            <div className="relative container mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white mb-8"
                >
                    The Green City of Kigali, a sustainable economic, social and cultural ambition
                </motion.h2>
            </div>
        </section>
    );
};

const GreenCityDetails = () => {
    return (
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
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">The Green City of Kigali</h2>
                        <h3 className="text-xl text-quaternary mb-6">A sustainable economic, social and cultural ambition</h3>

                        <p className="text-gray-700 mb-6">
                            Launched through Rwanda&#39;s Vision 2050, the Green City initiative aims to establish Kigali as a model for sustainable urban development in Africa. The city is pioneering eco-friendly approaches to housing, transportation, waste management, and water conservation.
                        </p>

                        <p className="text-gray-700 mb-6">
                            With its innovation hub, renewable energy infrastructure, and commitment to green spaces, Kigali is positioning itself as a world-class example of how African cities can address environmental challenges while promoting economic growth and quality of life for residents.
                        </p>

                        <div className="mt-8">
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
                        className="w-full md:w-1/2"
                    >
                        <div className="h-full">
                            <img
                                src="/images/kigali-development.jpg"
                                alt="Green City Project"
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const GreenCitySection = () => {
    return (
        <>
            <GreenCity />
            <GreenCityDetails />
        </>
    );
};

export default GreenCitySection;