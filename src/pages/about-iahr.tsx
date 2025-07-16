import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout'

const AboutIAHRPage = () => {
    return (
        <Layout title="About IAHR">
            
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <nav className="text-text-secondary text-sm">
                        <span>About</span> / <span className="text-text-primary">About IAHR</span>
                    </nav>
                </div>
            </div>

            
            <div
                className="relative h-96 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/kigali-landscape.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="container mx-auto px-4 h-full relative">
                    <div className="flex flex-col h-full justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-2xl md:text-5xl font-bold text-white mb-6 uppercase">
                                ABOUT IAHR
                            </h1>
                            <p className="text-xl text-white">
                                International Association for Hydro-Environment Engineering and Research
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            
            <section className="py-8 px-2 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-12">
                        
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-2/3"
                        >
                            <h2 className="text-2xl font-bold text-text-primary mb-6 uppercase">
                                WELCOME TO IAHR
                            </h2>

                            <div className="space-y-6 text-text-secondary leading-relaxed">
                                <p className="text-lg">
                                    The International Association for Hydro-Environment Engineering and Research (IAHR),
                                    founded in 1935, is a global organization of engineers and water specialists working
                                    in fields related to the hydro-environmental sciences and their practical application.
                                </p>

                                <p>
                                    With members and activities in more than 70 countries, IAHR promotes research and its
                                    practical application across topics such as river hydraulics, ecohydraulics, water
                                    resources management, hydroinformatics, and climate resilience.
                                </p>

                                <p>
                                    IAHR stimulates and promotes both research and its application, and by so doing
                                    contributes to sustainable development, the optimization of world water resources
                                    management and industrial flow processes.
                                </p>

                                <h3 className="text-xl font-bold text-primary mt-8 mb-4 uppercase">
                                    Our Mission
                                </h3>

                                <p>
                                    IAHR&apos;s mission is to be the leading global organization for hydro-environment
                                    engineering and research. We connect water professionals, promote excellence in
                                    education and research, and facilitate knowledge exchange to address the world&apos;s
                                    water challenges.
                                </p>

                                <h3 className="text-xl font-bold text-primary mt-8 mb-4 uppercase">
                                    Our Vision
                                </h3>

                                <p>
                                    A world where water engineering and research contribute to sustainable water
                                    management, environmental protection, and societal well-being through innovation,
                                    collaboration, and knowledge sharing.
                                </p>

                                <h3 className="text-xl font-bold text-primary mt-8 mb-4 uppercase">
                                    Key Areas of Focus
                                </h3>

                                <ul className="space-y-2 ml-6">
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span>Hydraulics and Fluid Mechanics</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span>Water Resources Management</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span>Environmental Hydraulics</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span>Ecohydraulics and Ecohydrology</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span>Hydroinformatics</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span>Ice Engineering</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span>Maritime and Coastal Engineering</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold text-primary mt-8 mb-4 uppercase">
                                    Global Network
                                </h3>

                                <p>
                                    IAHR operates through a network of regional divisions and technical committees,
                                    fostering collaboration and knowledge exchange among water professionals worldwide.
                                    Our divisions include Europe, Asia-Pacific, Americas, and Africa, each contributing
                                    unique perspectives and expertise to global water challenges.
                                </p>

                                <h3 className="text-xl font-bold text-primary mt-8 mb-4 uppercase">
                                    Publications and Resources
                                </h3>

                                <p>
                                    IAHR publishes leading scientific journals including the Journal of Hydraulic
                                    Engineering, Journal of Hydroinformatics, and Journal of Ecohydraulics. We also
                                    produce technical guidelines, reports, and educational materials to support the
                                    water engineering community.
                                </p>
                            </div>
                        </motion.div>

                        
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/3"
                        >
                            
                            <div className="bg-gray-50 p-8 rounded-lg mb-8 text-center">
                                <img
                                    src="/images/iahr-logo.png"
                                    alt="IAHR Logo"
                                    className="max-h-32 mx-auto mb-4"
                                />
                                <h3 className="text-xl font-bold text-text-primary mb-2">IAHR</h3>
                                <p className="text-text-secondary text-sm">
                                    International Association for Hydro-Environment Engineering and Research
                                </p>
                            </div>

                            
                            <div className="bg-primary text-white p-6 rounded-lg mb-8">
                                <h3 className="text-xl font-bold mb-4 uppercase">Quick Facts</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span>Founded:</span>
                                        <span className="font-semibold">1935</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Members:</span>
                                        <span className="font-semibold">4,000+</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Countries:</span>
                                        <span className="font-semibold">70+</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Divisions:</span>
                                        <span className="font-semibold">4</span>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-text-primary mb-4 uppercase">
                                    Contact IAHR
                                </h3>
                                <div className="space-y-3 text-text-secondary">
                                    <div>
                                        <h4 className="font-semibold text-text-primary">Headquarters</h4>
                                        <p className="text-sm">
                                            Paseo Bajo Virgen del Puerto, 3<br/>
                                            28005 Madrid, Spain
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-text-primary">Website</h4>
                                        <a
                                            href="https://www.iahr.org"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline text-sm"
                                        >
                                            www.iahr.org
                                        </a>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-text-primary">Email</h4>
                                        <a
                                            href="mailto:iahr@iahr.org"
                                            className="text-primary hover:underline text-sm"
                                        >
                                            iahr@iahr.org
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h1 className="text-lg text-text-primary">Are you Interested in Joining IAHR</h1>
                                <img
                                    src="/images/iahr-conference-discount.jpg"
                                    alt="Join IAHR"
                                    className="w-full h-auto rounded-lg mt-4"
                                />

                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default AboutIAHRPage;