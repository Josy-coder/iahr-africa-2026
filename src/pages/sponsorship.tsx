import React from "react";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Sponsorship() {
  return (
    <Layout title="Sponsorship & Exhibition - IAHR Africa Congress 2026">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/sponsorship-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 h-full relative">
          <div className="flex flex-col h-full justify-center">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Sponsorship & Exhibition Opportunities
                </h1>
                <p className="text-xl text-white">
                  Support the advancement of hydro-environmental sciences in
                  Africa
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-lg text-gray-700 mb-4">
              <strong>Dates:</strong> 8-11 December 2026
              <br />
              <strong>Venue:</strong> Kigali Conference and Exhibition Village
              (KCEV), Rwanda
              <br />
              <strong>Theme:</strong>{" "}
              <span className="italic">Water Resilience and Innovation</span>
            </p>
          </motion.div>

          {/* Why Sponsor or Exhibit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Sponsor or Exhibit?
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700 leading-relaxed mb-4 max-w-4xl mx-auto">
              The IAHR Africa Congress 2026 is the leading continental
              scientific and professional <strong>water congress</strong> in
              Africa, bringing together policymakers, regulators, researchers,
              water utilities, development partners, and industry leaders from
              across the continent and beyond.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Sponsorship and exhibition provide a strategic platform to
              showcase solutions, contribute to policy and technical dialogue,
              and engage directly with key decision-makers shaping Africa's
              water future.
            </p>
          </motion.div>

          {/* Why Kigali */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Why Kigali & IAHR Africa Congress 2026?
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>One of Africa's leading MICE destinations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Strong participation from government, academia, and the
                    private sector
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Strategic gateway to East and Central Africa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    High-level visibility among decision-makers, regulators,
                    academics, and industry leaders
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Access to more than 500 participants from Africa and
                    internationally
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Networking opportunities with utilities, consultants,
                    donors, and innovators
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Platform to establish partnerships and demonstrate practical
                    solutions
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Audience Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Audience Profile
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">
                    Government authorities and regulators
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">
                    Water utilities and basin organizations
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">
                    Academic and research institutions
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">
                    Development partners and non-governmental organizations
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">
                    Private-sector and technology providers
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">
                    Young professionals and innovators
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Exhibition Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Exhibition Opportunities
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
              The exhibition will run throughout the Congress, providing
              sustained visibility and direct engagement with Congress
              participants.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Who Should Exhibit?
            </h3>
            <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Water and Sanitation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <svg
                    className="w-16 h-16 text-primary mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                  <p className="text-gray-800 font-semibold">
                    Water and Sanitation Technology Providers
                  </p>
                </div>
              </motion.div>

              {/* Hydropower */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <svg
                    className="w-16 h-16 text-primary mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <p className="text-gray-800 font-semibold">
                    Hydropower and Renewable Energy Companies
                  </p>
                </div>
              </motion.div>

              {/* Environmental Monitoring */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <svg
                    className="w-16 h-16 text-primary mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <p className="text-gray-800 font-semibold">
                    Environmental Monitoring and Modelling Firms
                  </p>
                </div>
              </motion.div>

              {/* Engineering */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <svg
                    className="w-16 h-16 text-primary mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-800 font-semibold">
                    Engineering and Consulting Companies
                  </p>
                </div>
              </motion.div>

              {/* Utilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <svg
                    className="w-16 h-16 text-primary mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <p className="text-gray-800 font-semibold">
                    Utilities, Regulators, and Basin Organizations
                  </p>
                </div>
              </motion.div>

              {/* NGOs and Universities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <svg
                    className="w-16 h-16 text-primary mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <p className="text-gray-800 font-semibold">
                    NGOs, Universities, and Research Institutions
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Exhibitor Packages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Exhibitor Packages
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Standard Booth */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Standard Booth
                </h3>
                <p className="text-3xl font-bold text-primary mb-6">
                  EUR 1,000
                </p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>6 m² exhibition booth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>One table, two chairs, and power connection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Company logo on website and programme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>One exhibitor badge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Access to networking sessions</span>
                  </li>
                </ul>
              </motion.div>

              {/* Premium Booth */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-primary rounded-lg p-6 shadow-lg transform scale-105"
              >
                <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Premium Booth
                </h3>
                <p className="text-3xl font-bold text-primary mb-6">
                  EUR 2,000
                </p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>9 m² corner exhibition booth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Priority placement near main area</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>One table, four chairs, power connection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Two exhibitor badges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Logo on website and printed brochure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Acknowledgement during Opening Ceremony</span>
                  </li>
                </ul>
              </motion.div>

              {/* Partner Exhibitor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Partner Exhibitor
                </h3>
                <p className="text-3xl font-bold text-primary mb-6">
                  EUR 3,500
                </p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>12 m² premium booth in prime location</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>One table, four chairs, power connection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Three exhibitor badges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Prominent logo on banners, website, brochure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Five-minute spotlight presentation</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Knowledge Partnership Packages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Knowledge Partnership Packages
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700 leading-relaxed text-center mb-8 max-w-4xl mx-auto">
              In addition to exhibition opportunities, the IAHR Africa Congress
              2026 offers knowledge-based partnership packages designed to
              promote capacity building, innovation, and high-level policy
              dialogue.
            </p>

            {/* Knowledge Partnership Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-md">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left border border-primary font-bold">
                      Package
                    </th>
                    <th className="p-4 text-center border border-primary font-bold">
                      Fee
                    </th>
                    <th className="p-4 text-left border border-primary font-bold">
                      Description & Includes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="p-4 border border-gray-200 align-top">
                      <p className="font-bold text-gray-800 mb-2">
                        Sponsored Technical Workshop
                      </p>
                      <p className="text-sm text-gray-600">
                        90-120 minute thematic workshop
                      </p>
                    </td>
                    <td className="p-4 border border-gray-200 text-center align-top">
                      <p className="text-2xl font-bold text-primary">
                        EUR 4,000
                      </p>
                    </td>
                    <td className="p-4 border border-gray-200 align-top">
                      <p className="text-gray-700 mb-3">
                        A thematic technical workshop integrated into the
                        official Congress programme, focusing on tools,
                        methodologies, case studies, or policy-relevant
                        innovations.
                      </p>
                      <p className="font-semibold text-gray-800 mb-2">
                        Includes:
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            Recognition as Official Technical Workshop Sponsor
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            Dedicated workshop slot in Congress programme
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            Branding on workshop room signage and website
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Two complimentary Congress registrations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            Option to add exhibition booth at discounted rate
                          </span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="p-4 border border-gray-200 align-top">
                      <p className="font-bold text-gray-800 mb-2">
                        Sponsored Training or Short Course
                      </p>
                      <p className="text-sm text-gray-600">
                        Half-day or full-day training
                      </p>
                    </td>
                    <td className="p-4 border border-gray-200 text-center align-top">
                      <p className="text-xl font-bold text-primary mb-1">
                        EUR 5,000
                      </p>
                      <p className="text-sm text-gray-600">(Half-Day)</p>
                      <p className="text-xl font-bold text-primary mb-1 mt-2">
                        EUR 7,500
                      </p>
                      <p className="text-sm text-gray-600">(Full-Day)</p>
                    </td>
                    <td className="p-4 border border-gray-200 align-top">
                      <p className="text-gray-700 mb-3">
                        A professional capacity-building training or short
                        course delivered by recognized experts, aimed at
                        strengthening participants' technical and professional
                        skills.
                      </p>
                      <p className="font-semibold text-gray-800 mb-2">
                        Includes:
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Recognition as Official Training Partner</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            Branding on training materials and website
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            Opportunity to nominate trainers (subject to
                            approval)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Co-branded certificates of participation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            Three complimentary Congress registrations
                          </span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="p-4 border border-gray-200 align-top">
                      <p className="font-bold text-gray-800 mb-2">
                        High-Level Summit or Policy Roundtable
                      </p>
                      <p className="text-sm text-gray-600">
                        Invitation-only policy dialogue
                      </p>
                    </td>
                    <td className="p-4 border border-gray-200 text-center align-top">
                      <p className="text-2xl font-bold text-primary">
                        EUR 10,000
                      </p>
                    </td>
                    <td className="p-4 border border-gray-200 align-top">
                      <p className="text-gray-700 mb-3">
                        A high-level, invitation-only policy dialogue convening
                        senior regulators, chief executive officers, development
                        banks, and industry leaders to address strategic water
                        and climate issues relevant to Africa and the host
                        country.
                      </p>
                      <p className="font-semibold text-gray-800 mb-2">
                        Includes:
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Recognition as High-Level Summit Partner</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            Branding on summit backdrop, website, and programme
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            Opportunity to co-develop agenda with IAHR
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            Five-minute opening remarks (subject to protocol)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Four complimentary Congress registrations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>
                            VIP access to high-level networking sessions
                          </span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Interested in Sponsoring or Exhibiting?
              </h2>
              <p className="text-gray-600">
                For more detailed information about sponsorship and exhibition
                opportunities for the 7th IAHR Africa Congress, please contact
                us. We would be happy to discuss customized packages to meet
                your organization's objectives.
              </p>
            </motion.div>

            <div className="text-center">
              <p className="text-quaternary font-medium mb-2">
                <a
                  href="mailto:contact@iahr-af2026.com"
                  className="hover:underline"
                >
                  contact@iahr-af2026.com
                </a>
              </p>
              <p className="text-gray-700 font-medium mb-4">
                Phone: +250 788 350 465 / +250 787 800 300
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-quaternary hover:bg-blue-700 text-white font-bold rounded-md transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
