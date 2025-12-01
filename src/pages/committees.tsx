import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

interface CommitteeMemberProps {
    name: string;
    title: string;
    organization: string;
    imageSrc: string;
}

const CommitteeMember: React.FC<CommitteeMemberProps> = ({ name, title, organization, imageSrc }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-md"
        >
            <div className="h-64 overflow-hidden">
                <img
                    src={imageSrc}
                    alt={name}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">{name}</h3>
                <p className="text-quaternary font-medium mb-2">{title}</p>
                <p className="text-text-primary">{organization}</p>
            </div>
        </motion.div>
    );
};

export default function Committees() {
    const localOrganizingCommittee = [
        {
            name: "Francois X. Tetero",
            title: "Chair",
            organization: "GWP-Rwanda",
            imageSrc: "/images/Tetero.jpg"
        },
        {
            name: "Dr. Hussein Bizimana",
            title: "Co-Chair",
            organization: "UR-CST",
            imageSrc: "/images/Hussein-Bizimana.png"
        },
        {
            name: "Mugwaneza I. Benigne",
            title: "Co-Chair",
            organization: "RYWP",
            imageSrc: "/images/Benigne.jpg"
        },
        {
            name: "Dr. Abaho Gershome",
            title: "Co-Chair",
            organization: "UR-CST",
            imageSrc: "/images/Gershome-Abaho-G.png"
        },
        {
            name: "Davis Bugingo",
            title: "Member",
            organization: "RWB",
            imageSrc: "/images/Davis.jpg"
        },
        {
            name: "Francine Mbateye",
            title: "Member",
            organization: "WASAC",
            imageSrc: "/images/Francine.jpeg"
        },
        {
            name: "Tuyikunde G. Divine",
            title: "Budget",
            organization: "RYWP",
            imageSrc: "/images/Divine.jpg"
        },
        {
            name: "Alice Mutoni",
            title: "Member",
            organization: "RYWP",
            imageSrc: "/images/Alice.jpg"
        },
        {
            name: "Patrick Tuyishime",
            title: "Communication",
            organization: "RYWP",
            imageSrc: "/images/Patrick.jpg"
        },
        {
            name: "Rita Nishimwe",
            title: "Communication",
            organization: "RYWP",
            imageSrc: "/images/Rita.jpg"
        },
        {
            name: "Rutayisire A. Jenny",
            title: "Logistics",
            organization: "RYWP",
            imageSrc: "/images/Jenny.jpg"
        },
        {
            name: "Umwali K. Alvine",
            title: "Logistics",
            organization: "RYWP",
            imageSrc: "/images/Alvine.jpg"
        }
    ];

    return (
        <Layout title="Committees - IAHR Africa Congress 2026">
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <nav className="text-text-secondary text-sm">
                        <span>Home </span> / <span className="text-text-primary">Committee</span>
                    </nav>
                </div>
            </div>
            <section className="py-8 px-2 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl font-bold text-text-primary mb-4">Congress Chairs</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <CommitteeMember
                            name="Prof. Ignace GATARE"
                            title="Congress Chair"
                            organization="Principal, College of Science and Technology, University of Rwanda"
                            imageSrc="/images/ignace_gatare.jpg"
                        />
                        {/*<CommitteeMember
                            name="Prof. Philippe Gourbesville"
                            title="IAHR President"
                            organization="International Association for Hydro-Environment Engineering and Research"
                            imageSrc="/images/philippe_gourbesville.jpeg"
                        />*/}
                        <CommitteeMember
                            name="Francois X. Tetero"
                            title="Congress Co-Chair"
                            organization="Chairperson, GWP-Rwanda"
                            imageSrc="/images/Tetero.jpg"
                        />
                        {/*<CommitteeMember
                            name="Prof. Moez Louati"
                            title="Africa Division Chair"
                            organization="IAHR"
                            imageSrc="/images/Moez_Louati.jpg"
                        />*/}
                    </div>
                </div>
            </section>
            <section className="py-8 px-2 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Local Organizing Committee</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {localOrganizingCommittee.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 * index }}
                                viewport={{ once: true }}
                                className="bg-white rounded-lg overflow-hidden shadow-md"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={member.imageSrc}
                                        alt={member.name}
                                        className="w-full h-full object-contain scale-125"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                                    <p className="text-quaternary font-medium mb-1">{member.title}</p>
                                    <p className="text-gray-600 text-sm">{member.organization}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            
            <section className="py-8 px-2 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl font-bold text-text-primary mb-4">Scientific Committee</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-lg shadow-md mb-12"
                        >
                            <p className="text-gray-700 mb-6">
                                We are honored to present the members of the Scientific Committee for the 7th IAHR African Congress, comprised of esteemed scientists from the international community, Africa, and local scholars.
                            </p>
                            <p className="text-gray-700">
                                This diverse group guarantees the event&#39;s high scientific value. Please note that the committee is currently being formed, and the full list of members will be updated as confirmations are received.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <p className="text-gray-600 italic">
                                The full list of Scientific Committee members will be announced in early 2026.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            
            <section className="py-8 px-2 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl font-bold text-text-primary mb-4">International Advisory Board</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-lg shadow-md"
                        >
                            <p className="text-gray-700 mb-6">
                                The International Advisory Board for the 7th IAHR Africa Congress consists of distinguished experts from around the world who provide strategic guidance and support for the event.
                            </p>
                            <p className="text-gray-700">
                                The Board includes representatives from IAHR leadership, past Congress organizers, and prominent figures in hydro-environmental engineering and research. Their involvement ensures continuity and alignment with IAHR&apos;s mission and values.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-center mt-12"
                        >
                            <p className="text-gray-600 italic">
                                The full list of International Advisory Board members will be announced in 2026.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}