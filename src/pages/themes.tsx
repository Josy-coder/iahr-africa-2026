import React from 'react';
import { motion } from 'framer-motion';
import Layout from "@/components/layout/Layout";

const ThemeCongressPage = () => {
    const subThemes = [
        {
            title: "SUB-THEME A: WATER ENGINEERING AND TECHNOLOGICAL INNOVATIONS",
            topics: [
                {
                    category: "A.1 Climate Change Mitigation",
                    items: [
                        "A.1.1 Water Footprint Reduction",
                        "A.1.2 Incorporation of Water-related Renewable Energies",
                        "A.1.3 Energy Efficiencies to be Gained from Water Uses",
                        "A.1.4 Carbon Sequestration and Storage in Aquatic Environments",
                        "A.1.5 Reduction of Greenhouse Gas Emissions from Water Systems",
                        "A.1.6 Other Related Topics"
                    ]
                },
                {
                    category: "A.2 Improving Resilience against Water Hazards and Natural Disasters",
                    items: [
                        "A.2.1 Coastal Processes and Hazards",
                        "A.2.2 Hydraulic Structures and Processes",
                        "A.2.3 Enhancements in Urban Drainage Systems",
                        "A.2.4 Sediment Transport and Bathymetrical Changes Assessment",
                        "A.2.5 Forecasting and Warning",
                        "A.2.6 Disaster Risk Reduction",
                        "A.2.7 Other Related Topics"
                    ]
                }
            ],
            image: "/images/kigali-landscape.jpg"
        },
        {
            title: "SUB-THEME B: SUSTAINABLE WATER MANAGEMENT PRACTICES",
            topics: [
                {
                    category: "B.1 Integrated Water Resources Management",
                    items: [
                        "B.1.1 Water Resources Planning and Allocation",
                        "B.1.2 Watershed Management",
                        "B.1.3 Groundwater Management",
                        "B.1.4 Water Quality Management",
                        "B.1.5 Transboundary Water Management",
                        "B.1.6 Other Related Topics"
                    ]
                },
                {
                    category: "B.2 Water Supply Technologies and Services",
                    items: [
                        "B.2.1 Water Treatment Technologies",
                        "B.2.2 Water Distribution Systems",
                        "B.2.3 Rural Water Supply",
                        "B.2.4 Water Storage Solutions",
                        "B.2.5 Smart Water Systems",
                        "B.2.6 Other Related Topics"
                    ]
                }
            ],
            image: "/images/kigali-green-city.jpg"
        },
        {
            title: "SUB-THEME C: URBAN WATER SYSTEMS AND RESILIENCE",
            topics: [
                {
                    category: "C.1 Urban Resilience in African Cities",
                    items: [
                        "C.1.1 Urban Water Infrastructure",
                        "C.1.2 Stormwater Management",
                        "C.1.3 Urban Heat Island Mitigation",
                        "C.1.4 Green Infrastructure",
                        "C.1.5 Smart City Water Solutions",
                        "C.1.6 Other Related Topics"
                    ]
                },
                {
                    category: "C.2 Sanitation Technologies and Services",
                    items: [
                        "C.2.1 Wastewater Treatment Technologies",
                        "C.2.2 Decentralized Sanitation Systems",
                        "C.2.3 Resource Recovery from Wastewater",
                        "C.2.4 Sanitation in Informal Settlements",
                        "C.2.5 Circular Economy in Sanitation",
                        "C.2.6 Other Related Topics"
                    ]
                }
            ],
            image: "/images/conference.jpeg"
        },
        {
            title: "SUB-THEME D: ENVIRONMENTAL HYDRAULICS AND ECOSYSTEM MANAGEMENT",
            topics: [
                {
                    category: "D.1 Wetlands and Critical Ecosystems Management",
                    items: [
                        "D.1.1 Wetland Restoration and Conservation",
                        "D.1.2 Ecosystem Services Valuation",
                        "D.1.3 Biodiversity Conservation",
                        "D.1.4 River Corridor Management",
                        "D.1.5 Lake and Reservoir Ecology",
                        "D.1.6 Other Related Topics"
                    ]
                },
                {
                    category: "D.2 Nature-based Solutions",
                    items: [
                        "D.2.1 Green Infrastructure for Water Management",
                        "D.2.2 Constructed Wetlands",
                        "D.2.3 Bioretention Systems",
                        "D.2.4 Living Shorelines",
                        "D.2.5 Ecological Engineering",
                        "D.2.6 Other Related Topics"
                    ]
                }
            ],
            image: "/images/committee-hero.jpeg"
        },
        {
            title: "SUB-THEME E: FLOOD AND DROUGHT MANAGEMENT",
            topics: [
                {
                    category: "E.1 Flood Risk Assessment and Management",
                    items: [
                        "E.1.1 Flood Modeling and Prediction",
                        "E.1.2 Flood Control Infrastructure",
                        "E.1.3 Early Warning Systems",
                        "E.1.4 Community-based Flood Management",
                        "E.1.5 Flood Insurance and Finance",
                        "E.1.6 Other Related Topics"
                    ]
                },
                {
                    category: "E.2 Drought Management and Water Security",
                    items: [
                        "E.2.1 Drought Monitoring and Forecasting",
                        "E.2.2 Water Conservation Strategies",
                        "E.2.3 Alternative Water Sources",
                        "E.2.4 Agricultural Water Management",
                        "E.2.5 Emergency Water Supply",
                        "E.2.6 Other Related Topics"
                    ]
                }
            ],
            image: "/images/sponsorship-hero.jpg"
        },
        {
            title: "SUB-THEME F: DIGITAL WATER AND HYDROINFORMATICS",
            topics: [
                {
                    category: "F.1 Data-Driven Methods and Machine Learning",
                    items: [
                        "F.1.1 AI in Water Management",
                        "F.1.2 Big Data Analytics",
                        "F.1.3 Predictive Modeling",
                        "F.1.4 Remote Sensing Applications",
                        "F.1.5 IoT in Water Systems",
                        "F.1.6 Other Related Topics"
                    ]
                },
                {
                    category: "F.2 Digital Water Technologies",
                    items: [
                        "F.2.1 Smart Water Networks",
                        "F.2.2 Digital Twins for Water Systems",
                        "F.2.3 Blockchain in Water Management",
                        "F.2.4 Mobile Water Applications",
                        "F.2.5 Cyber Security in Water Systems",
                        "F.2.6 Other Related Topics"
                    ]
                }
            ],
            image: "/images/media-hero.jpg"
        }
    ];

    return (
        <Layout title="Theme and Congress Topics">
            
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <nav className="text-text-secondary text-sm">
                        <span>Programme</span> / <span className="text-text-primary">Theme and Congress Topics</span>
                    </nav>
                </div>
            </div>

            <section className="py-8 px-2 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl font-bold text-text-primary mb-8 uppercase tracking-wide">
                            WATER RESILIENCE & INNOVATION
                        </h2>
                        <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold text-text-primary mb-6 uppercase">Introduction</h3>
                        <div className="space-y-6 text-text-secondary leading-relaxed">
                            <p>
                                The 7th IAHR Africa Congress 2026 in Kigali is a landmark event that centers around the pivotal theme of
                                Water Resilience & Innovation. The global gathering will address the multifaceted challenges posed by
                                the dynamic intersection of water resources management, climate change adaptation, and the intricate
                                interplay between water, energy, food security, and nature. It shall provide a platform for experts,
                                researchers, and practitioners from around the world to converge and share cutting-edge insights,
                                groundbreaking research, and new solutions in the field of water engineering to meet these challenges.
                            </p>

                            <p>
                                As nations grapple with the effects of climate change, the Congress will delve into innovative water
                                engineering that adapts to the evolving challenges posed by a changing hydro-environment. Another focal
                                point of the Congress will be the exploration of innovative concepts that alleviate the increasing
                                pressure on the water-energy-food nexus and acknowledge the intrinsic linkages between these vital
                                resources. Understanding and optimizing this nexus is crucial for fostering sustainable development,
                                and the Congress shall promote the global exchange and collaboration for integrated approaches that
                                maximize these interconnected resources.
                            </p>

                            <p>
                                Finally, a key objective of the 7th IAHR Africa Congress 2026 in Kigali is to address the United Nations
                                Sustainable Development Goals (SDGs) related to water resources. These goals encompass a spectrum of
                                global targets to tackle issues ranging from clean water and sanitation access to sustainable cities
                                and communities, climate action, and life below water and on land.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-8 px-2 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl font-bold text-text-primary mb-4 uppercase tracking-wide">
                            CONGRESS SUB-THEMES AND TOPICS
                        </h2>
                        <div className="w-32 h-1 bg-primary mx-auto"></div>
                    </motion.div>

                    <div className="space-y-20">
                        {subThemes.map((theme, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
                            >
                                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                    
                                    <div className="w-full lg:w-2/3 p-8 lg:p-12">
                                        <h3 className="text-2xl font-bold text-primary mb-8 uppercase leading-tight">
                                            {theme.title}
                                        </h3>

                                        <div className="space-y-8">
                                            {theme.topics.map((topic, topicIndex) => (
                                                <div key={topicIndex}>
                                                    <h4 className="text-xl font-bold text-text-primary mb-4 uppercase">
                                                        {topic.category}
                                                    </h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        {topic.items.map((item, itemIndex) => (
                                                            <div key={itemIndex} className="flex items-start">
                                                                <span className="text-primary mr-3 mt-1 text-sm">▪</span>
                                                                <span className="text-text-secondary text-sm leading-relaxed">
                                                                    {item}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    
                                    <div className="w-full lg:w-1/3">
                                        <div className="h-64 lg:h-full">
                                            <img
                                                src={theme.image}
                                                alt={`Theme ${String.fromCharCode(65 + index)}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ThemeCongressPage;