import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-[550px] bg-gray-100 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/kigali-landscape.jpg')",
                    filter: "brightness(0.8)"
                }}
            />

            {/* Content Box */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 max-w-xl bg-white/90 backdrop-blur-sm p-8 m-6 rounded-lg shadow-xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="flex justify-center mb-4">
                        <img src="/images/iahr-logo.png" alt="IAHR Logo" className="h-20" />
                    </div>
                    <h1 className="text-3xl font-bold text-blue-600 mb-2">7th IAHR AFRICA CONGRESS</h1>
                    <h2 className="text-2xl font-bold text-orange-500 mb-1">KIGALI</h2>
                    <h3 className="text-xl text-gray-700 mb-4">RWANDA</h3>

                    <div className="border-t border-b border-gray-300 py-3 my-4">
                        <p className="font-medium">Theme: Water Resilience & Innovation</p>
                    </div>

                    <p className="text-xl font-semibold text-gray-800">8 - 11 DECEMBER 2026</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;