import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Camera, Download, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Media() {
    return (
        <Layout title="Media - IAHR Africa Congress 2026">
            {/* Hero Section */}
            <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/media-hero.jpg')" }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="container mx-auto px-4 h-full relative">
                    <div className="flex flex-col h-full justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Media Centre
                            </h1>
                            <p className="text-xl text-white">
                                Access photos, videos, and news about the 7th IAHR Africa Congress
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Placeholder Content */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Media Resources</h2>
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
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Downloadable Resources</h3>
                                    <p className="text-gray-600 mb-4">
                                        Official logos, banners, and promotional materials for the 7th IAHR Africa Congress
                                        will be made available for download once they are finalized.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Photo Gallery Placeholder */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Photos from previous IAHR events and the venue in Kigali, Rwanda will be displayed here.
                        </p>
                    </motion.div>

                    {/* Gallery Grid Placeholder */}
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

            {/* Contact Section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto bg-blue-50 p-8 rounded-lg shadow-md">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-center mb-6"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Media Inquiries</h2>
                            <p className="text-gray-600">
                                For media inquiries or to request additional information about the 7th IAHR Africa Congress,
                                please contact us at:
                            </p>
                        </motion.div>

                        <div className="text-center">
                            <p className="text-quaternary font-medium mb-4">
                                <a href="mailto:contact@iahr-af2026.com" className="hover:underline">
                                    contact@iahr-af2026.com
                                </a>
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-6 py-3 bg-quaternary hover:bg-blue-700 text-white font-bold rounded-md transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}