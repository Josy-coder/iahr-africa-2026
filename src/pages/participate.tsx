import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Mail, Info, AlertTriangle } from 'lucide-react';
import CountdownTimer from '../components/common/CountdownTimer';

export default function Participate() {
    return (
        <Layout title="Registration - IAHR Africa Congress 2026">
            {/* Hero Section */}
            <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/conference.jpeg')" }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-bold mb-6">Registration</h1>
                    <p className="text-xl text-center max-w-2xl mb-8">
                        Join us in Kigali, Rwanda for the 7th IAHR Africa Congress from December 8-11, 2026
                    </p>
                    <a
                        href="#registration-form"
                        className="px-6 py-3 bg-quaternary hover:bg-blue-700 text-white rounded-md transition duration-300"
                    >
                        Register Now
                    </a>
                </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-quaternary py-8">
                <div className="container mx-auto px-4">
                    <CountdownTimer targetDate="2026-12-08T00:00:00" />
                </div>
            </div>

            {/* Registration Fees */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Registration Fees</h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </motion.div>

                    {/* Main Registration Fees Table */}
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-gray-800 text-center mb-6"
                    >
                        International & General Participants
                    </motion.h3>

                    <div className="overflow-x-auto mb-16">
                        <table className="w-full border-collapse">
                            <thead>
                            <tr className="bg-primary text-white">
                                <th className="p-4 text-left border border-primary"></th>
                                <th className="p-4 text-center border border-primary">Early Registration (D-90 days)</th>
                                <th className="p-4 text-center border border-primary">Standard Registration (D-30 days)</th>
                                <th className="p-4 text-center border border-primary">On-site Registration</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white">
                                <td className="p-4 text-left border border-gray-200">IAHR Member</td>
                                <td className="p-4 text-center border border-gray-200">$450</td>
                                <td className="p-4 text-center border border-gray-200">$600</td>
                                <td className="p-4 text-center border border-gray-200">$750</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-4 text-left border border-gray-200">Non – IAHR Member</td>
                                <td className="p-4 text-center border border-gray-200">$500</td>
                                <td className="p-4 text-center border border-gray-200">$650</td>
                                <td className="p-4 text-center border border-gray-200">$800</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="p-4 text-left border border-gray-200">Student (IAHR Member)</td>
                                <td className="p-4 text-center border border-gray-200">$200</td>
                                <td className="p-4 text-center border border-gray-200">$350</td>
                                <td className="p-4 text-center border border-gray-200">$400</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-4 text-left border border-gray-200">Student (Non – IAHR Member)</td>
                                <td className="p-4 text-center border border-gray-200">$250</td>
                                <td className="p-4 text-center border border-gray-200">$400</td>
                                <td className="p-4 text-center border border-gray-200">$550</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Local Africa Registration Fees Table */}
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-gray-800 text-center mb-6"
                    >
                        Special Rates for African Students & Experts
                    </motion.h3>

                    <div className="overflow-x-auto mb-12">
                        <table className="w-full border-collapse">
                            <thead>
                            <tr className="bg-primary text-white">
                                <th className="p-4 text-left border border-primary"></th>
                                <th className="p-4 text-center border border-primary">Early Registration (D-90 days)</th>
                                <th className="p-4 text-center border border-primary">Standard Registration (D-30 days)</th>
                                <th className="p-4 text-center border border-primary">On-site Registration</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white">
                                <td className="p-4 text-left border border-gray-200">IAHR Member</td>
                                <td className="p-4 text-center border border-gray-200">$225</td>
                                <td className="p-4 text-center border border-gray-200">$300</td>
                                <td className="p-4 text-center border border-gray-200">$375</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-4 text-left border border-gray-200">Non – IAHR Member</td>
                                <td className="p-4 text-center border border-gray-200">$250</td>
                                <td className="p-4 text-center border border-gray-200">$325</td>
                                <td className="p-4 text-center border border-gray-200">$400</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="p-4 text-left border border-gray-200">Student (IAHR Member)</td>
                                <td className="p-4 text-center border border-gray-200">$100</td>
                                <td className="p-4 text-center border border-gray-200">$175</td>
                                <td className="p-4 text-center border border-gray-200">$250</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-4 text-left border border-gray-200">Student (Non – IAHR Member)</td>
                                <td className="p-4 text-center border border-gray-200">$125</td>
                                <td className="p-4 text-center border border-gray-200">$200</td>
                                <td className="p-4 text-center border border-gray-200">$275</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Additional Info Cards */}
            <section className="py-12 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <div className="text-primary mb-4">
                                <Mail size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                            <p className="text-gray-600 mb-2">
                                For registration inquiries, please contact us at{' '}
                                <a href="mailto:contact@iahr-af2026.com" className="text-primary hover:underline">
                                    contact@iahr-af2026.com
                                </a>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <div className="text-primary mb-4">
                                <Info size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Why Rwanda?</h3>
                            <p className="text-gray-600 mb-4">
                                Rwanda has established itself as the hub for hybrid meetings and conventions in Africa, with excellent facilities and connectivity.
                            </p>
                            <p className="text-gray-600">
                                Getting around Kigali is easy with high-quality roads, good traffic management, and reliable public transport options.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <div className="text-primary mb-4">
                                <AlertTriangle size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Visa Information</h3>
                            <p className="text-gray-600">
                                Digital e-Visa system available. Visa on arrival for AU, Commonwealth, and La Francophonie countries. Accommodation options include over 5,000 hotel rooms across various price ranges.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Registration Form */}
            <section id="registration-form" className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Congress Registration</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Registration will open in 2026. Please check back closer to the event date.
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-quaternary mb-6">Explore Rwanda</h3>
                        <p className="text-gray-700 mb-6">
                            Maximize your visit to Rwanda by exploring its natural wonders and cultural heritage:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <li className="flex items-start">
                                <span className="text-quaternary font-bold mr-2">•</span>
                                <span className="text-gray-700">Akagera National Park: Enjoy a thrilling Big Five safari, 2.5 hours from Kigali.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-quaternary font-bold mr-2">•</span>
                                <span className="text-gray-700">Lake Kivu: Kayak, take boat trips, or relax at lakeside resorts.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-quaternary font-bold mr-2">•</span>
                                <span className="text-gray-700">Bisoke Crater Lake Hike: Trek to the crater lake in Volcanoes National Park.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-quaternary font-bold mr-2">•</span>
                                <span className="text-gray-700">Gishwati-Mukura Biosphere Reserve: Discover a UNESCO biodiversity treasure.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-quaternary font-bold mr-2">•</span>
                                <span className="text-gray-700">Gorilla Trekking: Meet mountain gorillas in Volcanoes National Park.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-quaternary font-bold mr-2">•</span>
                                <span className="text-gray-700">Nyungwe National Park: Explore ancient rainforests and observe over 300 bird species.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    );
}