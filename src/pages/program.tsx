import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import CountdownTimer from '../components/common/CountdownTimer';

interface ThemeSectionProps {
    title: string;
    subthemes: string[];
    image: string;
    isReversed?: boolean;
}

const ThemeSection: React.FC<ThemeSectionProps> = ({ title, subthemes, image, isReversed = false }) => {
    return (
        <div className="py-10 border-b border-gray-200 last:border-b-0">
            <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8`}>
                <motion.div
                    initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-72 object-cover rounded-lg shadow-md"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                >
                    <h3 className="text-2xl font-bold text-quaternary mb-4">{title}</h3>
                    <ul className="space-y-2">
                        {subthemes.map((subtheme: string, index: number) => (
                            <li key={index} className="flex items-start">
                                <span className="text-quaternary font-bold mr-2">{String.fromCharCode(97 + index)}.</span>
                                <span className="text-gray-700">{subtheme}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default function Program() {
    const themes = [
        {
            title: "Climate change-induced droughts and floods",
            subthemes: [
                "Monitoring and warning systems",
                "Risk assessment",
                "Resilience capacities"
            ],
            image: "/images/theme-climate.jpeg"
        },
        {
            title: "River basins management",
            subthemes: [
                "Hydrometry and database development",
                "Hydrology and hydraulic modelling",
                "Best practices for transboundary river basins management"
            ],
            image: "/images/theme-river.jpeg"
        },
        {
            title: "Hydraulic structures",
            subthemes: [
                "Hydraulic structures design and safety",
                "Hydropower for sustainable energy",
                "Nature based solutions"
            ],
            image: "/images/theme-hydraulic.jpg"
        },
        {
            title: "Urban water and wastewater",
            subthemes: [
                "Water supply systems",
                "Sewage systems, recycling and reuse",
                "Desalination and water treatment"
            ],
            image: "/images/theme-urban.jpeg"
        },
        {
            title: "Groundwater hydraulics and Management",
            subthemes: [
                "Flow and quality monitoring and modelling",
                "Groundwater recharge",
                "Coastal aquifer management"
            ],
            image: "/images/theme-groundwater.jpeg"
        },
        {
            title: "Lakes, estuaries and coasts",
            subthemes: [
                "Lake management",
                "Coastal engineering",
                "Estuaries and wetlands ecology"
            ],
            image: "/images/theme-lakes.jpeg"
        },
        {
            title: "Hydroinformatics for smart water management",
            subthemes: [
                "Modeling tools",
                "Artificial Intelligence applications",
                "Remote sensing and IoT for water data exchange"
            ],
            image: "/images/theme-hydroinformatics.jpeg"
        },
        {
            title: "Water governance",
            subthemes: [
                "Sustainable Development Goals",
                "Institutional water management",
                "Water policies at national and territorial levels",
                "Financing of water supply and wastewater treatment and reuse",
                "Data availability, access and decision support systems"
            ],
            image: "/images/theme-governance.jpeg"
        }
    ];

    return (
        <Layout title="Program - IAHR Africa Congress 2026">
            {/* Hero Section */}
            <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/conference.jpeg')" }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-bold mb-6">Congress Program</h1>
                    <p className="text-xl text-center max-w-2xl mb-8">
                        Explore our themes and plan your participation in the 7th IAHR Africa Congress
                    </p>
                </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-quaternary py-8">
                <div className="container mx-auto px-4">
                    <CountdownTimer targetDate="2026-10-12T00:00:00" />
                </div>
            </div>

            {/* Themes Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Themes and Sub-themes</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            The 7th IAHR Africa Congress is organized around eight themes, offering an integrative and
                            interdisciplinary platform where science, engineering, and policy converge to address Africa&#39;s water challenges.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {themes.map((theme, index) => (
                            <ThemeSection
                                key={index}
                                title={theme.title}
                                subthemes={theme.subthemes}
                                image={theme.image}
                                isReversed={index % 2 !== 0}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Schedule - Placeholder */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Program Schedule</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            The detailed program schedule will be announced closer to the event. Stay tuned for updates on keynote speakers,
                            presentations, workshops, and social events.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Abstract Submission */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="w-full md:w-1/2"
                        >
                            <img
                                src="/images/abstract-submission.jpeg"
                                alt="Abstract Submission"
                                className="w-full h-80 object-cover rounded-lg shadow-md"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-full md:w-1/2"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Abstract Submission</h3>

                            <h4 className="text-xl font-semibold text-quaternary mb-4">Abstract Submission Process:</h4>
                            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                                <li>The online abstract submission process will open in early 2026.</li>
                                <li>Submit your abstracts by June 2026 through our submission portal.</li>
                                <li>All abstracts will undergo peer review.</li>
                                <li>Selected contributors will be notified within 4-6 weeks of submission.</li>
                            </ul>

                            <h4 className="text-xl font-semibold text-quaternary mb-4">Full Paper Submission:</h4>
                            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                                <li>Authors interested in submitting full papers for proceedings are welcome to do so within six weeks after abstract notification.</li>
                                <li>Full papers will undergo a review process for final acceptance.</li>
                            </ul>

                            <button className="px-6 py-3 bg-quaternary hover:bg-blue-700 text-white rounded-md transition duration-300">
                                Register Interest
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}