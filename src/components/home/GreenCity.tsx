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
                    Discover RWANDA
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-2xl font-semibold text-yellow-400 mb-6"
                >
                    The Land of a Thousand Hills
                </motion.h3>
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
                        className="w-full md:w-full"
                    >
                        <h2 className="text-3xl font-bold text-blue-500 mb-6">WHY RWANDA?</h2>

                        <p className="text-gray-800 mb-6">
                            Rwanda has established itself as the hub for hybrid meetings and conventions in Africa.
                            Moreover, Rwanda is perceived as the leading African destination for first class
                            incentives and events. Also, being one of the leading MICE destinations in the Africa,
                            Rwanda national airline flies to over 30 destinations and the network is growing. Major
                            airlines that fly to Kigali international airport include KLM, Qatar, emirates, Ethiopian
                            airline and Kenyan airlines. All these advantages make Rwanda an ideal destination for
                            the IAHR 2026 Africa Congress.
                        </p>

                        <p className="text-gray-800 mb-6">
                            Kigali is easy to move around. In fact, transport in Kigali has improved massively in
                            recent years. High quality roads, decent traffic management, robust public transport,
                            and the introduction of ride hailing apps making easierthan most majorcities in
                            Africa.The city of Kigali has restored urban wetland / Ecotourism Parks that can be
                            considered in organizing the pre or post congress technical tours, to explore restored
                            ecosystems, including a fig forest of native species, rehabilitated streams, and ponds for
                            flood alleviation of the wetland and the reed-bed for pollution abatement of the
                            wetland.
                        </p>
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