import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

export default function Committees() {
    return (
        <Layout title="Committees - IAHR Africa Congress 2026">
            {/* Hero Section */}
            <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/committees-hero.jpg')" }}>
                <div className="absolute inset-0 bg-blue-900/70"></div>
                <div className="container mx-auto px-4 h-full relative">
                    <div className="flex flex-col h-full justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Congress Committees
                            </h1>
                            <p className="text-xl text-white">
                                Meet the dedicated team of professionals organizing and guiding the 7th IAHR Africa Congress
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scientific Committee */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Scientific Committee</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-lg shadow-md mb-12"
                        >
                            <p className="text-gray-700 mb-6">
                                We are honored to present the members of the Scientific Committee for the 7th IAHR African Congress, comprised of esteemed scientists from the international community, Africa, and local scholars.
                            </p>
                            <p className="text-gray-700">
                                This diverse group guarantees the event&#39;s high scientific value. Please note that the committee is currently being formed, and the full list of members will be updated as confirmations are received.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <p className="text-gray-600 italic">
                                The full list of Scientific Committee members will be announced in 2025.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Organizing Committee */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Organizing Committee</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg overflow-hidden shadow-md"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src="/images/profile-placeholder.jpg"
                                    alt="Committee Chair"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Prof. Jean Bosco Niyomugabo</h3>
                                <p className="text-blue-600 font-medium mb-2">Congress Chair</p>
                                <p className="text-gray-600">University of Rwanda</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg overflow-hidden shadow-md"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src="/images/profile-placeholder.jpg"
                                    alt="Committee Co-Chair"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Prof. Umaru Garba Wali</h3>
                                <p className="text-blue-600 font-medium mb-2">Congress Co-Chair</p>
                                <p className="text-gray-600">University of Rwanda</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg overflow-hidden shadow-md"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src="/images/committee-secretary.jpg"
                                    alt="Committee Secretary"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. Marie Claire Nyiransabimana</h3>
                                <p className="text-blue-600 font-medium mb-2">Congress Secretary</p>
                                <p className="text-gray-600">Rwanda Water Resources Board</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <p className="text-gray-600 italic">
                            Additional Organizing Committee members will be announced as planning progresses.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* International Advisory Board */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">International Advisory Board</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-lg shadow-md"
                        >
                            <p className="text-gray-700 mb-6">
                                The International Advisory Board for the 7th IAHR Africa Congress consists of distinguished experts from around the world who provide strategic guidance and support for the event.
                            </p>
                            <p className="text-gray-700">
                                The Board includes representatives from IAHR leadership, past Congress organizers, and prominent figures in hydro-environmental engineering and research. Their involvement ensures continuity and alignment with IAHR&#39;s mission and values.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-center mt-12"
                        >
                            <p className="text-gray-600 italic">
                                The full list of International Advisory Board members will be announced in 2025.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}