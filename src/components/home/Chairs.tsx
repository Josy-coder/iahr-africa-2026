import React from 'react';
import { motion } from 'framer-motion';

interface ChairCardProps {
    name: string;
    title: string;
    message: string;
    imageSrc: string;
}

const ChairCard: React.FC<ChairCardProps> = ({ name, title, message, imageSrc }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 bg-gray-100">
                    <div className="h-72 overflow-hidden">
                        <img
                            src={imageSrc}
                            alt={name}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
                <div className="w-full md:w-2/3 p-6">
                    <p className="text-gray-600 mb-4">{message}</p>
                    <div className="mt-6 text-center md:text-left">
                        <h4 className="font-medium text-gray-800">{name}</h4>
                        <p className="text-quaternary">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Chairs = () => {
    const chairpersons = [
        {
            name: "Prof. Ignace GATARE",
            title: "Congress Chair, 7th IAHR Africa Congress 2026",
            message: "The University of Rwanda stands as a beacon of excellence, shaping a new generation of leaders and innovators dedicated to Africa's sustainable development. Through a model anchored in research, innovation, and entrepreneurial spirit, our programs directly address the continent's pressing challenges — from food security to urban resilience, and climate-responsive public policies.",
            imageSrc: "/images/profile-placeholder.jpg"
        },
        {
            name: "Prof. Omar MUNYANEZA",
            title: "Co-Chair, 7th IAHR Africa Congress 2026",
            message: "Dear Participants and Water Sector Leaders, Africa's future depends on our collective ability to transform challenges into opportunities. This Congress is more than a scientific gathering; it is a call to action. Together, through evidence-based solutions, applied research, and shared expertise, we can secure resilient, sustainable water futures for our communities.",
            imageSrc: "/images/profile-placeholder.jpg"
        }
    ];

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
                        WELCOME TO THE 7TH IAHR AFRICA CONGRESS
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 gap-12"
                >
                    {chairpersons.map((chair, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <ChairCard
                                name={chair.name}
                                title={chair.title}
                                message={chair.message}
                                imageSrc={chair.imageSrc}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Chairs;