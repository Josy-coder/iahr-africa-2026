import React from 'react';
import { motion } from 'framer-motion';

const DivisionChair = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/4 flex justify-center"
                    >
                        <div className="rounded-full overflow-hidden w-48 h-48 bg-gray-200">
                            <img
                                src="/images/profile-placeholder.jpg"
                                alt="Africa Division Chair"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-3/4"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Dear Esteemed Participants,</h3>
                        <p className="text-gray-700 mb-6">
                            The vitality of water research in Africa cannot be overstated. As we convene for the IAHR Africa Congress in Rwanda, let&#39;s harness our shared knowledge, passion, and vision for a water-secure future. The challenges are vast, but with our collective expertise and commitment, transformative solutions are within reach. Welcome to a congress of innovation, collaboration, and hope.
                        </p>
                        <p className="text-gray-700 mb-2">Warm regards,</p>

                        <div className="mt-4">
                            <h4 className="font-medium text-gray-800">Prof. Adebayo Adeloye</h4>
                            <p className="text-quaternary">Africa Division Chair, IAHR</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DivisionChair;