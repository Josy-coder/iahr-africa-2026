import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
    return (
        <Layout title="About - IAHR Africa Congress 2026">
            {/* Hero Section */}
            <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/kigali-landscape.jpg')" }}>
                <div className="absolute inset-0 bg-black/40"></div>
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
                                    Welcome to the 7th IAHR Africa Congress! We invite you to join us in Kigali, Rwanda, from 8th to 11th December 2026, for an enriching experience in hydro-environmental science and engineering.
                                </p>
                            </motion.div>
                        </div>
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
                                    <h3 className="text-2xl font-bold text-quaternary mb-4">Dates</h3>
                                    <p className="text-xl text-gray-700">8th to 11th December 2026</p>
                                </div>

                                <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
                                    <h3 className="text-2xl font-bold text-quaternary mb-4">Location</h3>
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
                                <h3 className="text-2xl font-bold text-quaternary mb-4">Congress Objectives:</h3>
                                <p>
                                    The 7th IAHR Africa Congress aims to provide a vibrant platform for scientists, engineers, organizations, central and local authorities, companies, and young professionals to share recent advances, experiences, and innovative trends in hydro-environmental science and engineering.
                                </p>

                                <p>
                                    Following the success of the 6th IAHR Africa Congress held in Morocco in 2024, the 2026 edition in Kigali represents a significant milestone in our collective efforts to advance sustainable, climate-resilient water management solutions tailored to Africa&#39;s unique challenges and opportunities.
                                </p>

                                <p>
                                    Under the overarching theme &#34;Water Resilience and Innovation,&#34; the congress will foster collaboration, knowledge exchange, and actionable strategies for addressing water and environmental challenges across the continent.
                                </p>

                                <h3 className="text-2xl font-bold text-quaternary mt-10 mb-4">Themes and Topics:</h3>
                                <p>
                                    The congress will be organized around six integrative sub-themes, offering an interdisciplinary platform where science, engineering, and societal policy converge. Visit our program page for more details on the themes and sub-themes.
                                </p>

                                <ul className="list-disc pl-6 mt-4 mb-6 space-y-1">
                                    <li>Water Supply Technologies and Services</li>
                                    <li>Sanitation Technologies and Services</li>
                                    <li>Integrated Water Management and Planning</li>
                                    <li>Urban Resilience in African Cities</li>
                                    <li>Flood and Drought Management</li>
                                    <li>Wetlands and Critical Ecosystems Management</li>
                                </ul>

                                <p>
                                    The Congress will feature keynote lectures, technical sessions, workshops, and field visits that highlight Rwanda&#39;s innovative approaches to water management and environmental sustainability.
                                </p>

                                <h3 className="text-2xl font-bold text-quaternary mt-10 mb-4">About IAHR:</h3>
                                <p>
                                    The International Association for Hydro-Environment Engineering and Research (IAHR), founded in 1935, is a global organization of engineers and water specialists working in fields related to the hydro-environmental sciences and their practical application. With members and activities in more than 70 countries, IAHR promotes research and its practical application across topics such as river hydraulics, ecohydraulics, water resources management, hydroinformatics, and climate resilience.
                                </p>

                                <p>
                                    IAHR stimulates and promotes both research and its application, and by so doing contributes to sustainable development, the optimization of world water resources management and industrial flow processes.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About the Hosts */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About the Hosts</h2>

                            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
                                <h3 className="text-xl font-bold text-quaternary mb-4">UNIVERSITY OF RWANDA / COLLEGE OF SCIENCE AND TECHNOLOGY</h3>
                                <p className="text-gray-700 mb-4">
                                    The University of Rwanda is the country&#39;s largest public university, offering multidisciplinary education and research focused on national development priorities. Since its formation in 2013, UR has become a regional leader in innovation, science, and technology, with strong international partnerships and a commitment to community engagement and sustainability.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
                                <h3 className="text-xl font-bold text-quaternary mb-4">WATER PARTNERSHIP RWANDA</h3>
                                <p className="text-gray-700 mb-4">
                                    Water Partnership Rwanda is a community benefit organization accredited to the Global Water Partnership (GWP). It aims to be a leading water think tank, promoting sustainable development through research, capacity building, and innovative approaches to the water-energy-food nexus and climate resilience.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
                                <h3 className="text-xl font-bold text-quaternary mb-4">RWANDA YOUNG WATER PROFESSIONAL</h3>
                                <p className="text-gray-700 mb-4">
                                    RYWP is a youth-led NGO empowering young professionals in the water sector through knowledge sharing, innovation, and leadership development. Its work spans water resources, sanitation, environmental management, and climate change resilience—bridging science and community action to shape Rwanda&#39;s water future.
                                </p>
                            </div>

                            <div className="text-center mt-6">
                                <p className="text-gray-600 font-medium">With support from key government agencies:</p>
                                <ul className="list-disc text-left inline-block mt-4">
                                    <li className="text-gray-700">Water and Sanitation Corporation (WASAC) Group</li>
                                    <li className="text-gray-700">Rwanda Water Resources Board (RWB)</li>
                                    <li className="text-gray-700">Rwanda Environmental Management Authority (REMA)</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Congress Award Section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">COMPETITION AWARD</h2>

                            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-quaternary mb-4">Hohai–Africa Student Paper Competition Award</h3>
                                <p className="text-gray-700 mb-6">
                                    The Hohai–Africa Student Paper Competition Award recognizes outstanding papers by undergraduate and postgraduate students, based on both written and oral presentations at the IAHR Africa Congress 2026.
                                </p>
                                <p className="text-gray-700 mb-6">
                                    This prestigious award celebrates innovation, scientific excellence, and relevance to Africa&#39;s water and climate challenges. Open to students presenting original work aligned with the congress themes.
                                </p>
                                <p className="text-gray-700 mb-8">
                                    Winners receive official recognition and a certificate of excellence proudly supported by Hohai University and the IAHR Africa Division.
                                </p>

                                <div className="bg-white p-6 rounded-lg">
                                    <h4 className="font-bold text-gray-800 mb-4">PRIZES:</h4>
                                    <ul className="list-disc pl-6 text-gray-700">
                                        <li className="mb-2">1st Prize: $1,500</li>
                                        <li className="mb-2">2nd Prize: $1,000</li>
                                        <li className="mb-2">3rd Prize: $500</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="text-center mt-10">
                                <Link
                                    href="/participate"
                                    className="inline-block px-8 py-4 bg-quaternary hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
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