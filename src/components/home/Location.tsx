import React from 'react';
import { motion } from 'framer-motion';

const Location = () => {
    return (
        <section className="py-16 px-4 bg-blue-900 text-white">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold text-cyan-400 mb-6">Beyond the Venue</h2>
                    <p className="text-xl mb-10">
                        Maximize your visit to Rwanda by exploring its natural wonders and cultural
                        heritage:
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="text-yellow-400 mr-3 mt-1">•</div>
                            <div>
                                <span className="text-yellow-400 font-bold">Akagera National Park: </span>
                                Enjoy a thrilling Big Five safari, 2.5 hours from Kigali.
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-yellow-400 mr-3 mt-1">•</div>
                            <div>
                                <span className="text-yellow-400 font-bold">Lake Kivu: </span>
                                Kayak, take boat trips, or relax at lakeside resorts.
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-yellow-400 mr-3 mt-1">•</div>
                            <div>
                                <span className="text-yellow-400 font-bold">Bisoke Crater Lake Hike: </span>
                                Trek to the crater lake in Volcanoes National Park.
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-yellow-400 mr-3 mt-1">•</div>
                            <div>
                                <span className="text-yellow-400 font-bold">Gishwati-Mukura Biosphere Reserve: </span>
                                Discover a UNESCO biodiversity treasure.
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-yellow-400 mr-3 mt-1">•</div>
                            <div>
                                <span className="text-yellow-400 font-bold">Gorilla Trekking: </span>
                                Meet mountain gorillas in Volcanoes National Park.
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-yellow-400 mr-3 mt-1">•</div>
                            <div>
                                <span className="text-yellow-400 font-bold">Nyungwe National Park: </span>
                                Explore ancient rainforests and observe over 300 bird species.
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold text-cyan-400 mb-6">Seamless Visa Process</h2>
                    <p className="text-xl mb-4">
                        Rwanda provides a fully digital e-Visa system for conferences, valid for up to 30
                        days. Nationals from <span className="text-yellow-400 font-bold">African Union, Commonwealth, and La Francophonie
                        countries</span> can access Visa on Arrival.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-cyan-400 mb-6">Accommodation</h2>
                    <p className="text-xl mb-6">
                        Kigali has hotel capacity to host over 5,000 guests, offering options from luxury to
                        budget. Top-tier hotels that are not far from the venue include:
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="text-white mr-3 mt-1">•</div>
                            <div>Radisson Blu Hotel</div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-white mr-3 mt-1">•</div>
                            <div>Kigali Marriott Hotel</div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-white mr-3 mt-1">•</div>
                            <div>Four Points by Sheraton</div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-white mr-3 mt-1">•</div>
                            <div>Mille Collines Hotel</div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-white mr-3 mt-1">•</div>
                            <div>Kigali Serena Hotel</div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-white mr-3 mt-1">•</div>
                            <div>Numerous boutique hotels, guesthouses, and serviced apartments</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Location;