import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Link from "next/link";

const VenuePage = () => {

    const attractions = [
        {
            name: "Akagera National Park",
            description: "Enjoy a thrilling Big Five safari, 2.5 hours from Kigali.",
            image: "/images/akagera.jpg",
        },
        {
            name: "Lake Kivu",
            description: "Kayak, take boat trips, or relax at lakeside resorts.",
            image: "/images/lake-kivu.jpg",
        },
        {
            name: "Bisoke Crater Lake Hike",
            description: "Trek to the crater lake in Volcanoes National Park.",
            image: "/images/mount-bisoke.jpg",
        },
        {
            name: "Gishwati-Mukura Biosphere Reserve",
            description: "Discover a UNESCO biodiversity treasure.",
            image: "/images/gishwati-mukura-national-park.jpg",
        },
        {
            name: "Gorilla Trekking",
            description: "Meet mountain gorillas in Volcanoes National Park.",
            image: "/images/gorilla-trekking-rwanda.jpg",
        },
        {
            name: "Nyungwe National Park",
            description: "Explore ancient rainforests and observe over 300 bird species.",
            image: "/images/nyungwe-forest-2.jpg",
        }
    ];

    const hotels = [
        "Radisson Blu Hotel",
        "Kigali Marriott Hotel",
        "Four Points by Sheraton",
        "Mille Collines Hotel",
        "Kigali Serena Hotel",
        "Numerous boutique hotels, guesthouses, and serviced apartments"
    ];

    return (
        <Layout title="Venue - IAHR Africa Congress 2026">
            
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <nav className="text-text-secondary text-sm">
                        <span>About</span> / <span className="text-text-primary">Venue</span>
                    </nav>
                </div>
            </div>


            
            <section className="py-8 px-2 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-12">
                        
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-2/3"
                        >
                            <h2 className="text-2xl font-bold text-text-primary mb-6 uppercase">
                                WELCOME TO KIGALI
                            </h2>

                            <div className="space-y-6 text-text-secondary leading-relaxed">
                                <p>
                                  Rwanda has emerged as one of Africa’s premier destinations for international conferences, hybrid meetings, and high-level events. With world-class venues, excellent connectivity, and warm hospitality, the country offers an ideal environment for participants attending the 7th IAHR Africa Congress 2026.
                                </p>

                                <p>
                                  Kigali, the capital, is celebrated for its safety, cleanliness, and welcoming atmosphere. Getting around the city is easy and enjoyable, thanks to well-maintained roads, efficient public transport, and convenient ride-hailing services. Visitors often remark on how effortless it is to navigate Kigali and how organized the city feels.
                                </p>

                                <p>
                                  Rwanda’s reputation as a top MICE (Meetings, Incentives, Conferences, and Exhibitions) destination continues to grow. RwandAir connects to more than 30 destinations, while major international carriers such as KLM, Qatar Airways, Emirates, Ethiopian Airlines, and Kenya Airways ensure seamless travel to and from Kigali. Delegates also benefit from a visitor-friendly visa policy, with a fully digital e-Visa system and visa on arrival for nationals of African Union, Commonwealth, and La Francophonie countries.
                                </p>
                                
                                <p>
                                  Beyond the conference venues, Kigali offers a unique mix of nature and innovation. The city features restored urban wetlands and eco-parks that showcase Rwanda’s leadership in environmental conservation. These green spaces, including native fig forests, rehabilitated streams, ponds for flood control, and reed-bed systems for natural water purification, provide peaceful spots to walk, relax, or enjoy the city’s biodiversity.
                                </p>
                                
                                <p>
                                  For those looking to explore further, Rwanda’s natural wonders are truly unforgettable. Visitors can go on a Big Five safari in Akagera National Park, meet mountain gorillas in Volcanoes National Park, soak in the beauty of Lake Kivu, hike to Bisoke Crater Lake, or explore the rainforests of Nyungwe and Gishwati–Mukura. Every destination reflects Rwanda’s commitment to conservation, sustainability, and genuine hospitality.
                                </p>
                            </div>
                        </motion.div>

                        
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/3"
                        >
                            <div className="bg-gray-50 p-6 rounded-lg text-center">
                                <img
                                    src="/images/kcev.jpg"
                                    alt="Kigali Convention Centre"
                                    className="w-full h-64 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold text-text-primary mb-2">
                                    Kigali Convention and Exhibition Village
                                </h3>
                                <p className="text-text-secondary text-sm mb-4">
                                    KN 3 Ave<br/>
                                    Kigali, Rwanda
                                </p>
                                <div className="text-left space-y-2 text-sm text-text-secondary">
                                    <div className="flex justify-between">
                                        <span>Capacity:</span>
                                        <span className="font-semibold">3,000 delegates</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            
            <section className="py-8 px-2 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl font-bold text-text-primary mb-4 uppercase">
                            HOW TO GET THERE
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-sm"
                        >
                            <div className="text-4xl mb-4 text-center">✈️</div>
                            <h3 className="text-xl font-bold text-text-primary mb-3 text-center uppercase">
                                By Air
                            </h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                Kigali International Airport is a 15-minute drive from the city center and
                                20 minutes from the Kigali Convention Centre. Major airlines include RwandAir,
                                KLM, Qatar Airways, Emirates, Ethiopian Airlines, and Kenya Airways.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-sm"
                        >
                            <div className="text-4xl mb-4 text-center">🚗</div>
                            <h3 className="text-xl font-bold text-text-primary mb-3 text-center uppercase">
                                By Car & Taxi
                            </h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                The venue is easily accessible by car with ample parking available.
                                Taxi services and ride-hailing apps like Move and Yego Cab
                                are readily available throughout the city.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-sm"
                        >
                            <div className="text-4xl mb-4 text-center">🚌</div>
                            <h3 className="text-xl font-bold text-text-primary mb-3 text-center uppercase">
                                Public Transport
                            </h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                Kigali&#39;s modern bus system provides efficient transportation throughout
                                the city. The convention centre is accessible via multiple bus routes
                                with nearby stops for easy access.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            
            <section className="py-16 px-4 ">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl font-bold mb-6 uppercase">Beyond the Venue</h2>
                        <p className="text-xl mb-10">
                            Maximize your visit to Rwanda by exploring its natural wonders and cultural heritage:
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {attractions.map((attraction, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white shadow-md p-6 rounded-lg"
                            >
                                <div className="mb-4">
                                    <img
                                        src={attraction.image}
                                        alt={attraction.name}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-bold mb-3 ">
                                    {attraction.name}
                                </h3>
                                <p className="leading-relaxed">
                                    {attraction.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-2/3"
                        >
                            <h2 className="text-2xl font-bold text-text-primary mb-6 uppercase">
                                Seamless Visa Process
                            </h2>
                            <div className="space-y-4 text-text-secondary leading-relaxed">
                                <p className="text-lg">
                                    Rwanda provides a fully digital e-Visa system for conferences, valid for up to 30 days.
                                    Nationals from <span className="text-primary font-bold">African Union, Commonwealth, and La Francophonie
                                    countries</span> can access Visa on Arrival.
                                </p>
                                <p>
                                    The online visa application process is straightforward and typically processed within
                                    3 business days. Visitors can apply through the official Rwanda immigration website.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/3"
                        >
                            <div className="bg-primary/10 p-8 rounded-lg text-center">
                                <div className="text-6xl mb-4">🛂</div>
                                <h3 className="text-2xl font-bold text-primary mb-4">E-Visa System</h3>
                                <p className="text-text-secondary mb-6">
                                    Apply online for your Rwanda visa in just a few simple steps.
                                </p>
                                <Link href="https://irembo.gov.rw/home/citizen/all_services?lang=en">
                                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300">
                                    APPLY FOR VISA
                                </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl font-bold text-primary mb-6 uppercase">Accommodation</h2>
                        <p className="text-xl text-text-secondary mb-6">
                            Kigali has hotel capacity to host over 5,000 guests, offering options from luxury to budget.
                            Top-tier hotels that are close to the venue include:
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hotels.map((hotel, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-lg shadow-sm"
                            >
                                <div className="flex items-center">
                                    <span className="text-primary mr-3">🏨</span>
                                    <span className="text-text-primary font-medium">{hotel}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default VenuePage;