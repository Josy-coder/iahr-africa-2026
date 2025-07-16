import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Camera, Download, FileText } from 'lucide-react';

export default function Media() {
    return (
        <Layout title="Media - IAHR Africa Congress 2026">
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <nav className="text-text-secondary text-sm">
                        <span>Home</span> / <span className="text-text-primary">Media</span>
                    </nav>
                </div>
            </div>
            <section className="py-8 px-2 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl font-bold text-text-primary mb-4">Media Resources</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Media resources will be available closer to the event. Check back in 2026 for photos, videos, press releases, and other materials related to the 7th IAHR Africa Congress.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-lg shadow-sm"
                        >
                            <div className="flex items-start">
                                <div className="bg-quaternary p-3 rounded-full text-white mr-4">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Press Information</h3>
                                    <p className="text-gray-600 mb-4">
                                        Information for press and media representatives will be available closer to the event.
                                        This will include press releases, factsheets, and media accreditation details.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-lg shadow-sm"
                        >
                            <div className="flex items-start">
                                <div className="bg-quaternary p-3 rounded-full text-white mr-4">
                                    <Download size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-text-primary mb-3">Downloadable Resources</h3>
                                    <p className="text-text-secondary mb-4">
                                        Official logos, banners, and promotional materials for the 7th IAHR Africa Congress
                                        will be made available for download once they are finalized.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-8 px-2 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl font-bold text-text-primary mb-4">Photo Gallery</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Photos from previous IAHR events and the venue in Kigali, Rwanda will be displayed here.
                        </p>
                    </motion.div>

                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                            <div key={index} className="bg-gray-200 aspect-square rounded-lg overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    <Camera size={32} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </Layout>
    );
}