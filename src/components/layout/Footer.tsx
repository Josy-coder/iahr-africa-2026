import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Calendar, ExternalLink } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-200 text-gray-700">
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">IAHR Africa Congress 2026</h3>
                        <p className="text-gray-600 mb-4">
                            Join us in Kigali, Rwanda for the 7th IAHR Africa Congress, addressing the most pressing water challenges facing Africa with the theme &#34;Water Resilience & Innovation&#34;.
                        </p>
                        <div className="flex items-center space-x-2 text-gray-600 mb-2">
                            <Calendar size={18} />
                            <span>December 8-11, 2026</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600 mb-2">
                            <MapPin size={18} />
                            <span>Kigali, Rwanda</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-600 hover:text-quaternary transition">About</Link></li>
                            <li><Link href="/program" className="text-gray-600 hover:text-quaternary transition">Program</Link></li>
                            <li><Link href="/participate" className="text-gray-600 hover:text-quaternary transition">Participate</Link></li>
                            <li><Link href="/sponsorship" className="text-gray-600 hover:text-quaternary transition">Sponsorship</Link></li>
                            <li><Link href="/committees" className="text-gray-600 hover:text-quaternary transition">Committees</Link></li>
                            <li><Link href="/media" className="text-gray-600 hover:text-quaternary transition">Media</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Us</h3>
                        <div className="flex items-center space-x-2 text-gray-600 mb-2">
                            <Mail size={18} />
                            <a href="mailto:contact@iahr-af2026.com" className="hover:text-quaternary transition">
                                contact@iahr-af2026.com
                            </a>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600 mb-4">
                            <ExternalLink size={18} />
                            <a
                                href="https://www.iahr-af2026.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-quaternary transition"
                            >
                                www.iahr-af2026.com
                            </a>
                        </div>

                        <div className="mt-6">
                            <h4 className="font-semibold text-gray-800 mb-2">Host Organizations</h4>
                            <ul className="text-gray-600 space-y-1">
                                <li>University of Rwanda / College of Science and Technology</li>
                                <li>Water Partnership Rwanda</li>
                                <li>Rwanda Young Water Professional</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-400 text-center text-gray-500">
                    <p>&copy; {currentYear} IAHR Africa Congress. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;