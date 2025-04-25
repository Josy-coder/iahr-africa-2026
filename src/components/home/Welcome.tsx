import React from 'react';
import { motion } from 'framer-motion';

interface WelcomeProps {
    presidentName: string;
    presidentTitle: string;
}

const Welcome: React.FC<WelcomeProps> = ({ presidentName, presidentTitle }) => {
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        WELCOME TO THE 7TH IAHR AFRICA CONGRESS
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-full md:w-1/3 flex justify-center"
                        >
                            {/* Placeholder for president's photo - replace with actual image */}
                            <div className="rounded-full overflow-hidden w-64 h-64 bg-gray-200">
                                <img src="/images/profile-placeholder.jpg" alt={presidentName} className="w-full h-full object-cover" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="w-full md:w-2/3"
                        >
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Congress Organising</h3>
                            <p className="text-gray-600 mb-6">
                                The University of Rwanda is a center of excellence that trains a new generation of committed leaders, the builders of the new Africa. Its innovative approach puts research and innovation at the heart of its educational system as the engine of a business model in which students are the creators of solutions.
                            </p>
                            <p className="text-gray-600">
                                The construction of its programs is inspired by African challenges such as – food security, urbanization, industrialization, and the management of public policies. Applied research initiates the educational model and sparks innovation, allowing everyone – student, researcher, or professor, to see their projects to completion thanks to an entrepreneurial support system.
                            </p>

                            <div className="mt-6">
                                <h4 className="font-semibold text-gray-800">{presidentTitle}</h4>
                                <p className="text-quaternary font-medium">{presidentName}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;