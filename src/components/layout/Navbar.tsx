import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Program', path: '/program' },
        { name: 'Participate', path: '/participate' },
        { name: 'Sponsorship', path: '/sponsorship' },
        { name: 'Committees', path: '/committees' },
        { name: 'Media', path: '/media' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-6 py-6 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <img
                        src="/images/logo.png"
                        alt="IAHR Logo"
                        className="h-10 w-10 rounded-full"
                    />
                    <div className="text-black font-bold text-xl">IAHR AFRICA CONGRESS 2026</div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className="text-gray-700 hover:text-blue-600 transition duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <img
                    src="/images/logos.png"
                    alt="IAHR Logo"
                    className="hidden md:block h-10 w-10 rounded-full"
                />

                {/* Mobile Navigation Toggle */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-full left-0 w-full bg-white shadow-md md:hidden"
                        >
                            <div className="flex flex-col px-4 py-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.path}
                                        className="py-3 text-gray-700 hover:text-blue-600 transition duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;