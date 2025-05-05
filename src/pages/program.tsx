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
            title: "Water Supply Technologies and Services",
            subthemes: [
                "Water supply systems",
                "Water treatment innovations",
                "Water quality monitoring"
            ],
            image: "/images/theme-water-supply.jpeg"
        },
        {
            title: "Sanitation Technologies and Services",
            subthemes: [
                "Wastewater treatment systems",
                "Sanitation infrastructure",
                "Recycling and reuse technologies"
            ],
            image: "/images/theme-sanitation.jpeg"
        },
        {
            title: "Integrated Water Management and Planning",
            subthemes: [
                "Integrated water resources management",
                "Transboundary water governance",
                "Water policy and regulation"
            ],
            image: "/images/theme-integrated.jpeg"
        },
        {
            title: "Urban Resilience in African Cities",
            subthemes: [
                "Climate-resilient urban infrastructure",
                "Sustainable urban water management",
                "Water-sensitive urban design"
            ],
            image: "/images/theme-urban.jpeg"
        },
        {
            title: "Flood and Drought Management",
            subthemes: [
                "Risk assessment and modeling",
                "Early warning systems",
                "Climate adaptation strategies"
            ],
            image: "/images/theme-flood.jpeg"
        },
        {
            title: "Wetlands and Critical Ecosystems Management",
            subthemes: [
                "Wetland restoration and conservation",
                "Ecosystem services valuation",
                "Nature-based solutions"
            ],
            image: "/images/theme-wetlands.jpeg"
        }
    ];

    return (
        <Layout title="Program - IAHR Africa Congress 2026">
            {/* Hero Section */}
            <div className="relative h-96 bg-cover bg-center"
                 style={{backgroundImage: "url('/images/conference.jpeg')"}}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-bold mb-6">Congress Program</h1>
                    <p className="text-xl text-center max-w-2xl mb-8">
                        Theme: Water Resilience & Innovation<br/>
                        December 8-11, 2026 | Kigali, Rwanda
                    </p>
                </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-quaternary py-8">
                <div className="container mx-auto px-4">
                    <CountdownTimer targetDate="2026-12-08T00:00:00"/>
                </div>
            </div>

            {/* Themes Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.7}}
                        viewport={{once: true}}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Congress Sub-Themes</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            The 7th IAHR Africa Congress is organized around six integrative sub-themes, offering an
                            interdisciplinary platform where science, engineering, and societal policy converge to
                            address Africa&#39;s water challenges.
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

            {/* Program Schedule */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.7}}
                        viewport={{once: true}}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Program Overview</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    </motion.div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                            <tr className="bg-quaternary text-white">
                                <th className="p-4 text-left border border-gray-300">TUESDAY 08 DECEMBER</th>
                                <th className="p-4 text-left border border-gray-300">DAILY SCHEDULE (WEDNESDAY –
                                    FRIDAY)
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white">
                                <td className="p-4 text-left border border-gray-300">09:00 – 15:00 |
                                    SHORTCOURSES/WORKSHOPS
                                </td>
                                <td className="p-4 text-left border border-gray-300">KEYNOTE PLENARY | 09:00 – 10:00
                                </td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-4 text-left border border-gray-300">16:00 – 17:30 | OPENING CEREMONY
                                </td>
                                <td className="p-4 text-left border border-gray-300">COFFEE BREAK | 10:00 – 10:30</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="p-4 text-left border border-gray-300">17:30 – 18:00 | TOAST – EXHIBITION
                                    OPENING
                                </td>
                                <td className="p-4 text-left border border-gray-300">SESSION 1 | 10:30 – 12:00</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-4 text-left border border-gray-300">18:00 – 20:00 | WELCOME RECEPTION
                                </td>
                                <td className="p-4 text-left border border-gray-300">LUNCH | 12:00 – 14:00</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="p-4 text-left border border-gray-300"></td>
                                <td className="p-4 text-left border border-gray-300">SESSION 2 | 14:00 – 15:30 (Not
                                    Thursday & Friday)
                                </td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-4 text-left border border-gray-300"></td>
                                <td className="p-4 text-left border border-gray-300">COFFEE BREAK | 15:30 – 16:00 (Not
                                    Thursday & Friday)
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <td className="p-4 text-left border border-gray-300"></td>
                                <td className="p-4 text-left border border-gray-300">SESSION 3 | 16:00 – 17:00 (Not
                                    Thursday & Friday)
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-12">
                        <p className="text-center text-gray-600">
                            The detailed program including keynote speakers, paper presentations, and special sessions
                            will be announced closer to the event date.
                        </p>
                    </div>
                </div>
            </section>

            {/* Abstract Submission */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-8">
                        <motion.div
                            initial={{opacity: 0, x: -20}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.7}}
                            viewport={{once: true}}
                            className="w-full md:w-1/2"
                        >
                            <img
                                src="/images/abstract-submission.jpeg"
                                alt="Abstract Submission"
                                className="w-full h-80 object-cover rounded-lg shadow-md"
                            />
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, x: 20}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.7, delay: 0.2}}
                            viewport={{once: true}}
                            className="w-full md:w-1/2"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Abstract Submission</h3>

                            <h4 className="text-xl font-semibold text-quaternary mb-4">Abstract Submission Process:</h4>
                            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                                <li>The online abstract submission process will open in early 2026.</li>
                                <li>Submit your abstracts by September 2026 through our submission portal.</li>
                                <li>All abstracts will undergo peer review.</li>
                                <li>Selected contributors will be notified within 4-6 weeks of submission.</li>
                            </ul>

                            <h4 className="text-xl font-semibold text-quaternary mb-4">Full Paper Submission:</h4>
                            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                                <li>Authors interested in submitting full papers for proceedings are welcome to do so
                                    within six weeks after abstract notification.
                                </li>
                                <li>Full papers will undergo a review process for final acceptance.</li>
                            </ul>

                            <h4 className="text-xl font-semibold text-quaternary mb-4">Hohai-Africa Student Paper
                                Competition Award:</h4>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li>1st Prize: $1,500</li>
                                <li>2nd Prize: $1,000</li>
                                <li>3rd Prize: $500</li>
                            </ul>
                            <p className="text-gray-700 mb-6">
                                Recognizing outstanding undergraduate and postgraduate student papers aligned with
                                congress themes. Sponsored by Hohai University and IAHR Africa Division.
                            </p>

                            <button
                                className="px-6 py-3 bg-quaternary hover:bg-blue-700 text-white rounded-md transition duration-300">
                                Register Interest
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}