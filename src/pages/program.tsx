import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import CountdownTimer from '../components/common/CountdownTimer';

export default function Program() {

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

        </Layout>
    );
}