import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
    return (
        <Layout title="About - IAHR Africa Congress 2026">
            {/* Hero Section */}
            <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/about-hero.jpg')" }}>
                <div className="absolute inset-0 bg-blue-900/70"></div>
                <div className="container mx-auto px-4 h-full relative">
                    <div className="flex flex-col h-full justify-center">
                        <div className="max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    About the 7th IAHR Africa Congress
                                </h1>
                                <p className="text-xl text-white">
                                    Welcome to the 7th IAHR Africa Congress! We invite you to join us in Kigali, Rwanda, from 12th to 15th October 2026, for an enriching experience in hydro-environmental science and engineering.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="bg-blue-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <Link href="/participate" className="flex-1 py-6 text-center border-r border-blue-600 hover:bg-blue-800 transition-colors">
                            Registration
                        </Link>
                        <Link href="/program" className="flex-1 py-6 text-center border-r border-blue-600 hover:bg-blue-800 transition-colors">
                            Abstracts
                        </Link>
                        <Link href="/participate" className="flex-1 py-6 text-center hover:bg-blue-800 transition-colors">
                            African Students Scholarship Program
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mark Your Calendar */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Mark Your Calendar</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
                                    <h3 className="text-2xl font-bold text-blue-700 mb-4">Dates</h3>
                                    <p className="text-xl text-gray-700">12th to 15th October 2026</p>
                                </div>

                                <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
                                    <h3 className="text-2xl font-bold text-blue-700 mb-4">Location</h3>
                                    <p className="text-xl text-gray-700">Kigali, Rwanda</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">About the 7th IAHR Africa Congress</h2>

                            <div className="space-y-6 text-gray-700">
                                <h3 className="text-2xl font-bold text-blue-700 mb-4">Congress Objectives:</h3>
                                <p>
                                    The 7th IAHR Africa Congress aims to provide a vibrant platform for scientists, engineers, organizations, central and local authorities, companies, and young professionals to share recent advances, experiences, and innovative trends in hydro-environmental science and engineering.
                                </p>

                                <p>
                                    Following the success of the 6th Congress in Morocco in 2024, this event represents a significant milestone in the ongoing efforts to advance water management solutions specifically designed for African contexts and challenges.
                                </p>

                                <h3 className="text-2xl font-bold text-blue-700 mt-10 mb-4">Themes and Topics:</h3>
                                <p>
                                    Organized around eight themes, our congress offers an integrative and interdisciplinary platform where science, engineering, and societal policy converge. Visit our program page for more details on the themes and sub-themes.
                                </p>

                                <p>
                                    The Congress will feature keynote lectures, technical sessions, workshops, and field visits that highlight Rwanda's innovative approaches to water management and environmental sustainability.
                                </p>

                                <h3 className="text-2xl font-bold text-blue-700 mt-10 mb-4">About IAHR:</h3>
                                <p>
                                    The International Association for Hydro-Environment Engineering and Research (IAHR) is a global organization of engineers and water specialists working in fields related to the hydro-environmental sciences and their practical application. Founded in 1935, IAHR has members and activities in more than 70 countries.
                                </p>

                                <p>
                                    IAHR stimulates and promotes both research and its application, and by so doing contributes to sustainable development, the optimization of world water resources management and industrial flow processes.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Abstract Submission */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">ABSTRACT SUBMISSION</h2>

                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="w-full md:w-1/2">
                                        <img
                                            src="/images/abstract-submission.jpg"
                                            alt="Abstract Submission"
                                            className="w-full h-72 object-cover rounded-lg"
                                        />
                                    </div>

                                    <div className="w-full md:w-1/2">
                                        <h3 className="text-xl font-bold text-blue-700 mb-4">Abstract Submission Process:</h3>
                                        <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                                            <li>The online abstract submission process will open in early 2026.</li>
                                            <li>Submit your abstracts by June 2026 through our submission portal.</li>
                                            <li>All abstracts will undergo peer review.</li>
                                            <li>Selected contributors will be notified by August 2026</li>
                                        </ul>

                                        <h3 className="text-xl font-bold text-blue-700 mb-4">Full Paper Submission:</h3>
                                        <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                                            <li>Authors interested in submitting full papers for proceedings are welcome to do so within six weeks after abstract notification.</li>
                                            <li>Full papers will undergo a review process for final acceptance.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-10">
                                <Link
                                    href="/participate"
                                    className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
                                >
                                    REGISTER
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}