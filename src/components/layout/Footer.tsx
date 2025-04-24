import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-200 text-white">
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-black">IAHR Africa Congress 2026</h3>
                        <p className="text-gray-600">
                            Join us in Kigali, Rwanda for the 7th IAHR Africa Congress, addressing the most pressing water challenges facing Africa.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-black">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-600 hover:text-white transition">About</Link></li>
                            <li><Link href="/program" className="text-gray-600 hover:text-white transition">Program</Link></li>
                            <li><Link href="/participate" className="text-gray-600 hover:text-white transition">Participate</Link></li>
                            <li><Link href="/sponsorship" className="text-gray-600 hover:text-white transition">Sponsorship</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-black">Contact Us</h3>
                        <div className="flex items-center space-x-2 text-gray-600 mb-2">
                            <Mail size={18} />
                            <a href="mailto:contact@iahr-af2026.com" className="hover:text-white transition">contact@iahr-af2026.com</a>
                        </div>
                        <p className="text-gray-600 mt-4">
                            Kigali, Rwanda
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                    <p>&copy; {currentYear} IAHR Africa Congress. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;