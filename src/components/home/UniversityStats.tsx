import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, User, RefreshCw } from 'lucide-react';

interface StatProps {
    icon: React.ReactNode;
    value: string;
    label: string;
}

const Stat: React.FC<StatProps> = ({ icon, value, label }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="text-blue-600 mb-3">{icon}</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-1">{value}</h3>
            <p className="text-gray-600">{label}</p>
        </div>
    );
};

const UniversityStats = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        A hub of Research & Innovation to serve Africa
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-lg shadow-md"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">KEY FIGURES</h3>
                        <div className="grid grid-cols-2 gap-10">
                            <Stat
                                icon={<Users size={40} />}
                                value="12,000+"
                                label="Students"
                            />
                            <Stat
                                icon={<GraduationCap size={40} />}
                                value="35"
                                label="Programs"
                            />
                            <Stat
                                icon={<User size={40} />}
                                value="3,500+"
                                label="Alumni"
                            />
                            <Stat
                                icon={<RefreshCw size={40} />}
                                value="120+"
                                label="Exchange students"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <div className="aspect-w-16 aspect-h-9 relative h-full">
                            {/* Replace with actual video or image */}
                            <img
                                src="/images/university-campus.jpeg"
                                alt="University of Rwanda"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default UniversityStats;