import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Link from "next/link";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { image: '/images/kigali-convention.jpeg', alt: 'Kigali Landscape' },
        { image: '/images/gorilla-trekking-rwanda.jpg', alt: 'Gorilla Trekking in Rwanda' },
        { image: '/images/gishwati-mukura-national-park.jpg', alt: 'Mount Bisoke' },

    ];

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative h-[600px] overflow-hidden">
            
            <div className="relative w-full h-full">
                <motion.div
                    className="flex w-full h-full"
                    animate={{ x: `${-currentSlide * 100}%` }}
                    transition={{ type: "tween", ease: "easeInOut", duration: 0.8 }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="relative min-w-full h-full">
                            <img
                                src={slide.image}
                                alt={slide.alt}
                                className="w-full h-full object-cover"
                                style={{ filter: "brightness(1)"}}
                                loading={index === 0 ? "eager" : "lazy"}
                                sizes="100vw"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            
            <div className="absolute inset-0 flex items-center justify-center md:justify-end px-4 md:px-12 z-10">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-lg shadow-2xl max-w-lg mx-4 md:mx-0 md:mr-8"
                >
                    <div className="flex justify-center mb-6">
                        <img src="/images/sticker-2.png" alt="IAHR Logo" className="h-full" />
                    </div>
                </motion.div>
            </div>

            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'bg-primary' : 'bg-white/50 hover:bg-white/70'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

const ConferenceIntro = () => {
    return (
        <section className="py-8 px-2 bg-white">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 mt-6"
                >
                    <h2 className="text-2xl  font-bold text-text-primary mb-6 mt-6 uppercase tracking-wide">
                        41ST INTERNATIONAL ASSOCIATION FOR HYDRO-ENVIRONMENT ENGINEERING AND RESEARCH (IAHR) AFRICA CONGRESS (8-11 DECEMBER 2026)
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-text-secondary text-lg leading-relaxed mb-6">
                            With the theme &#34;Water Resilience & Innovation&#34;, the 7th IAHR Africa Congress will be held from 8-11 December 2026 in Kigali, Rwanda. It aims to foster interdisciplinary dialogue, exchange cutting-edge knowledge, and explore innovative solutions to Africa&#39;s most pressing water-related challenges.
                        </p>
                        <p className="text-text-secondary text-lg leading-relaxed mb-6">
                            The Congress will address the multi-faceted challenges posed by the dynamic intersection of water resources management, climate change adaptation, and intricate interplay between water, energy, food security, and nature. It shall provide a platform for experts, researchers and practitioners from around the world to converge and share cutting-edge insights, groundbreaking research, and new solutions in the field of water engineering to meet these challenges.
                        </p>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            By placing a spotlight on innovative water engineering, the Congress aims to contribute to the advancement of the Sustainable Development Goals (SDGs) in both rural and urban environments, towards resilience societies for the well-being of current and future generations.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const PresidentMessage = () => {
    const [showFullMessage, setShowFullMessage] = useState(false);

    return (
        <section className="py-8 px-2 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl font-bold text-text-primary mb-8 uppercase tracking-wide">
                        WELCOME TO THE 7TH IAHR AFRICA CONGRESS
                    </h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/4"
                    >
                        <div className="rounded-full overflow-hidden w-48 h-48 mx-auto bg-gray-200">
                            <img
                                src="/images/philippe_gourbesville.jpeg"
                                alt="Prof. Philippe Gourbesville"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-center mt-4">
                            <h3 className="text-lg font-bold text-text-primary">Prof. Philippe Gourbesville</h3>
                            <p className="text-primary font-medium">IAHR President</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-3/4"
                    >
                        <h3 className="text-xl font-bold text-primary mb-4">International Steering Group</h3>
                        <div className="text-text-secondary leading-relaxed">
                            <p className="mb-4">
                                On behalf of the International Association for Hydro-Environment Engineering and Research (IAHR), it is my great honor to invite you to the 7th IAHR Africa Congress in Kigali, Rwanda, from December 8th to 11th, 2026.
                            </p>
                            {showFullMessage && (
                                <>
                                    <p className="mb-4">
                                        Following the success of our previous edition in Morocco, this congress continues to be a flagship event uniting leading experts, policymakers, and young professionals tackling climate resilience and water security challenges across Africa and globally. Your presence will enrich vital conversations and contribute to shaping innovative, actionable pathways for a better future.
                                    </p>
                                    <p className="mb-4">
                                        The event provides researchers, engineers, and decision makers the opportunity to share recent advances and experiences, identify emerging technology trends, and engage in lively debates.
                                    </p>
                                </>
                            )}
                        </div>
                        <button
                            onClick={() => setShowFullMessage(!showFullMessage)}
                            className="bg-quaternary hover:bg-quaternary/90 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 mt-4 w-full"
                        >
                            {showFullMessage ? 'READ LESS' : 'READ MORE'}
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ChairMessages = () => {
    const chairs = [
        {
            name: "Prof. Ignace GATARE",
            title: "Congress Chair, 7th IAHR Africa Congress 2026",
            message: "The University of Rwanda stands as a beacon of excellence, shaping a new generation of leaders and innovators dedicated to Africa's sustainable development. Through a model anchored in research, innovation, and entrepreneurial spirit, our programs directly address the continent's pressing challenges — from food security to urban resilience, and climate-responsive public policies.",
            image: "/images/ignace_gatare.jpg"
        },
    ];

    return (
        <section className="py-8 px-2 bg-white">
            <div className="container mx-auto max-w-6xl">
                {chairs.map((chair, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 mb-16`}
                    >
                        <div className="w-full lg:w-1/3">
                            <div className="rounded-lg overflow-hidden bg-gray-200 h-80">
                                <img
                                    src={chair.image}
                                    alt={chair.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3">
                            <p className="text-text-secondary leading-relaxed text-lg mb-6">{chair.message}</p>
                            <div className="text-center lg:text-left">
                                <h4 className="font-bold text-text-primary text-xl">{chair.name}</h4>
                                <p className="text-primary font-medium">{chair.title}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const ThemesSection = () => {
    const themes = [
        "Water Supply Technologies and Services",
        "Sanitation Technologies and Services",
        "Integrated Water Management and Planning",
        "Urban Resilience in African Cities",
        "Flood and Drought Management",
        "Wetlands and Critical Ecosystems Management",
        "Climate Mitigation and Adaptation",
        "Nature-based Solutions",
        "Digital Water",
        "Data-Driven Methods and Machine Learning (Hydroinformatics)",
        "Computational and Experimental methods",
        "Remote Sensing and Field Measurements"
    ];

    return (
        <section className="py-8 px-2 bg-[#0a83c4] text-white">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-8 uppercase tracking-wide">THEMES PRESENTED:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-left">
                        {themes.map((theme, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="py-2"
                            >
                                <ul className="list-disc pl-5 space-y-1 ">
                                    <li>
                                <p className="text-lg">{theme}</p>
                                    </li>
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const WelcomeToRwanda = () => {
    return (
        <section
            className="py-24 px-4 relative"
            style={{
                backgroundImage: "url('/images/kigali-green-city.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center text-white"
                >
                    <h2 className="text-4xl md:text-7xl font-bold mb-3 uppercase">DISCOVER RWANDA</h2>
                    <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-12">The Land of a Thousand Hills</h3>
                </motion.div>
            </div>
        </section>
    );
};

const AboutRwanda = () => {
    const images = [
        "/images/kigali-landscape.jpg",
        "/images/kigali-green-city.jpg",
        "/images/kigali-convention.jpeg",
        "/images/kigali-3.jpg"
    ];

    return (
        <section className="py-8 px-2 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {images.map((image, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="rounded-lg overflow-hidden aspect-square"
                                >
                                    <img
                                        src={image}
                                        alt={`Rwanda ${index + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-3xl font-bold text-primary mb-6 uppercase">Welcome to Rwanda</h2>
                        <div className="text-text-secondary leading-relaxed space-y-4">
                            <p>
                                Nestled at the heart of Africa, Rwanda stands as a testament to the harmonious coexistence of diverse cultures, progressive urban development, and a rich tapestry of history. The nation prides itself as a pivotal hub for innovation and sustainable development.
                            </p>
                            <p>
                                Rwanda has established itself as the hub for hybrid meetings and conventions in Africa. Moreover, Rwanda is perceived as the leading African destination for first class incentives and events. Also, being one of the leading MICE destinations in Africa, Rwanda national airline flies to over 30 destinations and the network is growing.
                            </p>
                            <p>
                                Kigali is easy to move around. Transport in Kigali has improved massively in recent years. High quality roads, decent traffic management, robust public transport, and the introduction of ride hailing apps make it easier than most major cities in Africa.
                            </p>
                        </div>
                        <Link href="/venue" >
<button className="bg-quaternary hover:bg-quaternary/90 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300 mt-6">
                            READ MORE
</button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const KeepMeUpdated = () => {
    return (
        <section className="py-8 px-2 bg-quaternary text-white">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-bold mb-8 uppercase tracking-wide">
                        ON BEHALF OF THE LOCAL ORGANIZING COMMITTEE OF THE 7TH IAHR AFRICA CONGRESS AND THE INTERNATIONAL ASSOCIATION FOR HYDRO-ENVIRONMENT ENGINEERING AND RESEARCH (IAHR), WE ARE DELIGHTED TO INVITE YOU TO JOIN THE 7TH IAHR AFRICA CONGRESS IN 2026 IN KIGALI, RWANDA.
                    </h3>
                    <button className="border-2 border-white text-white hover:bg-white hover:text-quaternary px-8 py-3 rounded-md font-semibold transition-colors duration-300">
                        KEEP ME UPDATED
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

const Organizers = () => {
    const mainOrganizers = [
        { name: "IAHR", logo: "/images/iahr-logo.png", alt: "International Association for Hydro-Environment Engineering and Research" },
        { name: "PUB", logo: "/images/water_partnership_rwanda.png", alt: "Water Partnership Rwanda" },
        { name: "University of Rwanda", logo: "/images/university-of-rwanda-logo.jpg", alt: "University of Rwanda" },
        { name: "RYWP", logo: "/images/rywp.png", alt: "Rwanda Young Water Professional" }
    ];

    const supporters = [
        { name: "WASAC", logo: "/images/wasac.png", alt: "Water and Sanitation Corporation" },
        { name: "RWB", logo: "/images/rwanda-water-resources-board-logo.png", alt: "Rwanda Water Resources Board" },
        { name: "REMA", logo: "/images/rema.jpg", alt: "Rwanda Environmental Management Authority" }
    ];

    return (
        <section className="py-8 px-2 bg-white">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl font-bold text-text-primary mb-8 uppercase tracking-wide">ORGANISED BY</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                        {mainOrganizers.map((org, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="w-full"
                            >
                                <img
                                    src={org.logo}
                                    alt={org.alt}
                                    className="max-h-20 w-auto mx-auto object-contain"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-xl font-bold text-text-primary mb-6 uppercase tracking-wide">SUPPORTED BY</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
                        {supporters.map((supporter, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="w-full"
                            >
                                <img
                                    src={supporter.logo}
                                    alt={supporter.alt}
                                    className="max-h-16 w-auto mx-auto object-contain"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const HomePage = () => {
    return (
        <Layout title="IAHR Africa Congress 2026 - Kigali, Rwanda">
        <div className="min-h-screen">
            <Hero />
            <ConferenceIntro />
            <PresidentMessage />
            <ChairMessages />
            <ThemesSection />
            <WelcomeToRwanda />
            <AboutRwanda />
            <KeepMeUpdated />
            <Organizers />
        </div>
        </Layout>
    );
};

export default HomePage;