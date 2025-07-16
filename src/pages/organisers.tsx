import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const OrganisersPage = () => {
    const mainOrganisers = [
        {
            name: "University of Rwanda / College of Science and Technology",
            logo: "/images/university-of-rwanda-logo.jpg",
            description: "The University of Rwanda is the country's largest public university, offering multidisciplinary education and research focused on national development priorities. Since its formation in 2013, UR has become a regional leader in innovation, science, and technology, with strong international partnerships and a commitment to community engagement and sustainability.",
            website: "https://www.ur.ac.rw",
            details: [
                "Established: 2013",
                "Students: 30,000+",
                "Campuses: 6",
                "Focus: Science, Technology, Engineering, Medicine"
            ]
        },
        {
            name: "International Association for Hydro-Environment Engineering and Research (IAHR)",
            logo: "/images/iahr-logo.png",
            description: "IAHR, founded in 1935, is a global organization of engineers and water specialists working in fields related to the hydro-environmental sciences and their practical application. With members and activities in more than 70 countries, IAHR promotes research and its practical application across topics such as river hydraulics, ecohydraulics, water resources management, hydroinformatics, and climate resilience.",
            website: "https://www.iahr.org",
            details: [
                "Founded: 1935",
                "Members: 4,000+",
                "Countries: 70+",
                "Focus: Hydro-Environment Engineering"
            ]
        },
        {
            name: "Water Partnership Rwanda",
            logo: "/images/water_partnership_rwanda.png",
            description: "Water Partnership Rwanda is a community benefit organization accredited to the Global Water Partnership (GWP). It aims to be a leading water think tank, promoting sustainable development through research, capacity building, and innovative approaches to the water-energy-food nexus and climate resilience.",
            website: "https://www.gwp.org",
            details: [
                "Type: Community Benefit Organization",
                "Accreditation: Global Water Partnership",
                "Focus: Water-Energy-Food Nexus",
                "Mission: Sustainable Development"
            ]
        },
        {
            name: "Rwanda Young Water Professional",
            logo: "/images/rywp.png",
            description: "RYWP is a youth-led NGO empowering young professionals in the water sector through knowledge sharing, innovation, and leadership development. Its work spans water resources, sanitation, environmental management, and climate change resilience—bridging science and community action to shape Rwanda's water future.",
            website: "https://www.rywp.org",
            details: [
                "Type: Youth-led NGO",
                "Focus: Young Water Professionals",
                "Areas: Water Resources, Sanitation",
                "Mission: Leadership Development"
            ]
        }
    ];

    const supportingOrganisations = [
        {
            name: "Water and Sanitation Corporation (WASAC) Group",
            logo: "/images/wasac.png",
            description: "WASAC is a government agency responsible for water supply and sanitation services in Rwanda. The corporation ensures sustainable water supply and sanitation services to improve the quality of life for all Rwandans.",
            website: "https://www.wasac.rw"
        },
        {
            name: "Rwanda Water Resources Board (RWB)",
            logo: "/images/rwanda-water-resources-board-logo.png",
            description: "RWB is responsible for the management and development of water resources in Rwanda. The board ensures sustainable water resources management for current and future generations.",
            website: "https://www.rwb.gov.rw"
        },
        {
            name: "Rwanda Environmental Management Authority (REMA)",
            logo: "/images/rema.jpg",
            description: "REMA is the leading institution in environmental protection and management in Rwanda. The authority coordinates environmental management activities and ensures compliance with environmental standards.",
            website: "https://www.rema.gov.rw"
        }
    ];

    return (
        <Layout title="Organisers - 7th IAHR Africa Congress">
            
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <nav className="text-text-secondary text-sm">
                        <span>About</span> / <span className="text-text-primary">Organisers</span>
                    </nav>
                </div>
            </div>
            

            
            <section className="py-2 px-2 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl font-bold text-text-primary mb-6 uppercase">
                            Organizing Partnership
                        </h2>
                        <p className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed">
                            The 7th IAHR Africa Congress is hosted through a collaboration of Water Partnership Rwanda,
                            the University of Rwanda / College of Science and Technology, the Rwanda Young Water Professional
                            with the support of key government agencies and various partner organizations.
                        </p>
                    </motion.div>
                </div>
            </section>

            
            <section className="py-2 px-2 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl font-bold text-text-primary mb-4 uppercase">
                            Main Organisers
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </motion.div>

                    <div className="space-y-2">
                        {mainOrganisers.map((org, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white overflow-hidden border-b border-text-light"
                            >
                                <div className="flex flex-col lg:flex-row">
                                    
                                    <div className="w-full lg:w-1/3 bg-gray-100 flex items-center justify-center p-8">
                                        <img
                                            src={org.logo}
                                            alt={org.name}
                                            className="max-h-32 w-auto object-contain"
                                        />
                                    </div>

                                    
                                    <div className="w-full lg:w-2/3 p-8">
                                        <h3 className="text-2xl font-bold text-primary mb-4 uppercase">
                                            {org.name}
                                        </h3>

                                        <p className="text-text-secondary leading-relaxed mb-6">
                                            {org.description}
                                        </p>

                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            {org.details.map((detail, detailIndex) => (
                                                <div key={detailIndex} className="flex items-center">
                                                    <span className="text-primary mr-2">•</span>
                                                    <span className="text-text-secondary">{detail}</span>
                                                </div>
                                            ))}
                                        </div>

                                        
                                        {org.website !== "#" && (
                                            <a
                                                href={org.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                                            >
                                                Visit Website
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            
            <section className="py-8 px-2 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl font-bold text-text-primary mb-4 uppercase">
                            Supporting Organizations
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-text-secondary max-w-3xl mx-auto">
                            The congress is supported by key government agencies that play crucial roles
                            in Rwanda&#39;s water sector development and environmental management.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {supportingOrganisations.map((org, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 rounded-lg p-6 text-center"
                            >
                                <div className="h-24 flex items-center justify-center mb-4">
                                    <img
                                        src={org.logo}
                                        alt={org.name}
                                        className="max-h-20 w-auto object-contain"
                                    />
                                </div>

                                <h3 className="text-lg font-bold text-text-primary mb-3">
                                    {org.name}
                                </h3>

                                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                    {org.description}
                                </p>

                                <a
                                    href={org.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
                                >
                                    Learn More
                                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default OrganisersPage;