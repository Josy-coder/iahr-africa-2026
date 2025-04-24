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
                        Join us in Kigali, Rwanda for the 7th IAHR Africa Congress from October 12-15, 2026
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
                    <CountdownTimer targetDate="2026-10-12T00:00:00" />
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
                    <div className="overflow-x-auto mb-16">
                        <table className="w-full border-collapse">
                            <thead>
                            <tr className="bg-primary text-white">
                                <th className="p-4 text-left border border-primary"></th>
                                <th className="p-4 text-center border border-primary">Early registration (D-90 days)</th>
                                <th className="p-4 text-center border border-primary">Standard registration (D-30 days)</th>
                                <th className="p-4 text-center border border-primary">On-site registration</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white">
                                <td className="p-4 text-left border border-gray-200">IAHR Member</td>
                                <td className="p-4 text-center border border-gray-200">500 $</td>
                                <td className="p-4 text-center border border-gray-200">650 $</td>
                                <td className="p-4 text-center border border-gray-200">800 $</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-4 text-left border border-gray-200">Non – IAHR Member</td>
                                <td className="p-4 text-center border border-gray-200">550 $</td>
                                <td className="p-4 text-center border border-gray-200">700 $</td>
                                <td className="p-4 text-center border border-gray-200">850 $</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="p-4 text-left border border-gray-200">Student (IAHR Member)</td>
                                <td className="p-4 text-center border border-gray-200">250 $</td>
                                <td className="p-4 text-center border border-gray-200">400 $</td>
                                <td className="p-4 text-center border border-gray-200">550 $</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-4 text-left border border-gray-200">Student (Non – IAHR Member)</td>
                                <td className="p-4 text-center border border-gray-200">300 $</td>
                                <td className="p-4 text-center border border-gray-200">450 $</td>
                                <td className="p-4 text-center border border-gray-200">600 $</td>
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
                        Registration Fees for local Africa students and scholars
                    </motion.h3>

                    <div className="overflow-x-auto mb-12">
                        <table className="w-full border-collapse">
                            <thead>
                            <tr className="bg-primary text-white">
                                <th className="p-4 text-left border border-primary"></th>
                                <th className="p-4 text-center border border-primary">Early registration (D-90 days)</th>
                                <th className="p-4 text-center border border-primary">Standard registration (D-30 days)</th>
                                <th className="p-4 text-center border border-primary">On-site registration</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white">
                                <td className="p-4 text-left border border-gray-200">IAHR Member</td>
                                <td className="p-4 text-center border border-gray-200">250 $</td>
                                <td className="p-4 text-center border border-gray-200">325 $</td>
                                <td className="p-4 text-center border border-gray-200">400 $</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-4 text-left border border-gray-200">Non – IAHR Member</td>
                                <td className="p-4 text-center border border-gray-200">275 $</td>
                                <td className="p-4 text-center border border-gray-200">350 $</td>
                                <td className="p-4 text-center border border-gray-200">425 $</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="p-4 text-left border border-gray-200">Student (IAHR Member)</td>
                                <td className="p-4 text-center border border-gray-200">125 $</td>
                                <td className="p-4 text-center border border-gray-200">200 $</td>
                                <td className="p-4 text-center border border-gray-200">275 $</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-4 text-left border border-gray-200">Student (Non – IAHR Member)</td>
                                <td className="p-4 text-center border border-gray-200">150 $</td>
                                <td className="p-4 text-center border border-gray-200">225 $</td>
                                <td className="p-4 text-center border border-gray-200">300 $</td>
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
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Information</h3>
                            <p className="text-gray-600">
                                Information on recommended hotels, travel tips, and visa support will be provided as we get closer to the event.
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
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Cancellation and Refund Policy</h3>
                            <p className="text-gray-600">
                                Cancellations must be notified in writing. A refund policy will be provided based on specific terms closer to the event date.
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">IAHR Event Registration</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Registration will open in 2026. Please check back closer to the event date.
                        </p>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}