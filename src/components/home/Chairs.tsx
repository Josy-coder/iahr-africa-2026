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
                    <div className="flex justify-end mt-4">
                        <button className="px-4 py-2 bg-quaternary text-white rounded hover:bg-blue-700 transition">
                            READ MORE
                        </button>
                    </div>
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
            name: "Prof. Jean Bosco Niyomugabo",
            title: "Co-Chairperson, IAHR Africa Congress 2026",
            message: "All Involved in the Future of Water, The cornerstone of progress in addressing Africa's complex water challenges has always been research, academia, and rigorous scientific inquiry. As the IAHR Africa Congress continues its journey, the University of Rwanda is privileged to be at the epicenter of this scientific collaboration, seeking tangible solutions for real-world water challenges.",
            imageSrc: "/images/profile-placeholder.jpg"
        },
        {
            name: "Prof. Umaru Garba Wali",
            title: "Co-Chairperson, IAHR Africa Congress 2026",
            message: "To the Esteemed Participants and Water Visionaries, The intricate tapestry of Africa's water challenges is interwoven with immense opportunities, many of which remain untapped. As we converge for the IAHR Africa Congress in Rwanda, it represents a testament to our unwavering commitment to Africa's water future.",
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