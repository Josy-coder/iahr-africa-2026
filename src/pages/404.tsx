import React from 'react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowRight } from 'lucide-react';

export default function Custom404() {
    return (
        <Layout title="Page Not Found - IAHR Africa Congress 2026">
            <div className="min-h-[70vh] flex items-center justify-center px-4">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-9xl font-bold text-quaternary">404</h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-6">Page Not Found</h2>
                        <p className="text-gray-600 max-w-md mx-auto mb-8">
                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/"
                                className="flex items-center px-6 py-3 bg-quaternary text-white rounded-md  transition-colors"
                            >
                                <Home size={18} className="mr-2" />
                                Back to Home
                            </Link>

                            <Link
                                href="/contact"
                                className="flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                            >
                                Contact Us
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
}