import React from "react";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";

export default function Abstracts() {
  const importantDates = [
    {
      event: "Full Paper Submission Deadline",
      date: "31 March 2026",
    },
    {
      event: "Notification of Acceptance",
      date: "15 April 2026",
    },
    {
      event: "Congress Dates",
      date: "8-11 December 2026",
    },
  ];

  const subThemes = [
    "Water supply technologies and sanitation systems",
    "Integrated water resources management and planning",
    "Urban water management and resilience in African cities",
    "Flood, drought, and disaster risk mitigation",
    "Wetlands and critical ecosystem management",
    "Innovative modelling, hydroinformatics, and smart water systems",
    "Water governance, policy, sustainability, and climate adaptation",
  ];

  return (
    <Layout title="Call for Papers - IAHR Africa Congress 2026">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/call-for-papers.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-6">Call for Papers</h1>
          <p className="text-xl text-center max-w-2xl px-4">
            Submit your research for the 7th IAHR Africa Congress 2026
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Introduction with Date/Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The International Association for Hydro-Environment
                  Engineering and Research (IAHR), Africa Division, invites
                  researchers, practitioners, industry professionals, young
                  water professionals, and policymakers to submit{" "}
                  <strong>full papers</strong> for presentation at the{" "}
                  <strong>7th IAHR Africa Congress</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This Congress provides a high-visibility platform for sharing
                  innovations, research, and best practices that address
                  Africa's water and climate challenges.
                </p>
              </div>
              <div className="bg-primary text-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Event Details</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm opacity-90">Dates</p>
                    <p className="font-semibold text-lg">8-11 December 2026</p>
                  </div>
                  <div className="border-t border-white/20 pt-3">
                    <p className="text-sm opacity-90">Location</p>
                    <p className="font-semibold">Kigali, Rwanda</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Congress Theme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Congress Theme
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl font-semibold text-primary italic">
              Water Resilience & Innovation
            </p>
          </motion.div>

          {/* Sub-themes in Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Sub-themes / Topics of Interest
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {subThemes.slice(0, 4).map((theme, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary text-white rounded-lg text-center p-4 hover:bg-primary/90 hover:shadow-lg transition-all duration-300"
                >
                  <p className="text-sm leading-snug font-medium">{theme}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {subThemes.slice(4).map((theme, index) => (
                <motion.div
                  key={index + 4}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary text-white text-center rounded-lg p-4 hover:bg-primary/90 hover:shadow-lg transition-all duration-300"
                >
                  <p className="text-sm leading-snug font-medium">{theme}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Encouragement Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="text-gray-700 italic text-lg max-w-4xl mx-auto">
              Papers addressing Africa-specific challenges, inclusive
              governance, and context-aware solutions are strongly encouraged.
            </p>
          </motion.div>

          {/* Paper Structure and Paper Format Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Paper Structure */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Paper Structure
              </h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <div className="bg-primary/10 rounded-lg p-6 shadow-md flex-grow border border-primary/20">
                <p className="mb-4 font-semibold text-gray-800">
                  Full papers should be structured as follows:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Title</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Author names and affiliations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Keywords (4)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Introduction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Materials and Methods / Methodology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Discussion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Conclusions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Acknowledgements (optional)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>References</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Paper Format */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Paper Format and Submission Details
              </h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <div className="bg-primary/10 rounded-lg p-6 shadow-md flex-grow border border-primary/20">
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Submission Type:</span>
                    <span>Full Paper (PDF)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">
                      Submission Portal:
                    </span>
                    <span>EasyChair (submission link to be provided)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">
                      Submission Deadline:
                    </span>
                    <span>31 March 2026</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Language:</span>
                    <span>English</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Paper Length:</span>
                    <span>
                      4-6 pages (including references, figures, and tables)
                    </span>
                  </li>
                </ul>
                <div className="bg-primary text-white border-l-4 border-primary p-4 rounded">
                  <p className="font-semibold mb-2">Notes:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                    <li>All submitted papers will undergo peer review.</li>
                    <li>
                      Accepted papers will be presented at the Congress and
                      published in the official IAHR Congress Proceedings with a
                      DOI.
                    </li>
                    <li>
                      Authors are encouraged to provide a clear methodology,
                      structured content, and relevant keywords.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Download Template Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 -mx-4 px-4 py-12 bg-primary rounded-lg"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Download Template
              </h2>
              <p className="text-white mb-6 leading-relaxed">
                For presenters/speakers opting for an extended abstract, which
                may be presented orally and published in IJRBM, please download
                the template below.
              </p>
              <a
                href="/IAHR-AC-paper-and-abstract-Template-2026.docx"
                download
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Download Template
              </a>
            </div>
          </motion.div>

          {/* Submission Procedure and Review Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Submission Procedure */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Submission Procedure
              </h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <div className="bg-primary/10 rounded-lg p-6 shadow-md flex-grow border border-primary/20">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Papers must be submitted through the EasyChair submission
                      system.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Authors must complete all required personal information
                      fields and upload the full paper PDF.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      The relevant congress topic/session must be selected
                      during submission.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Review and Publication */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Review and Publication
              </h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <div className="bg-primary/10 rounded-lg p-6 shadow-md flex-grow border border-primary/20">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>All submissions will undergo peer review.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Accepted papers must be presented at the Congress.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Papers presented at the Congress will be published in the
                      official IAHR Congress Proceedings with a DOI.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Submit Paper Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 -mx-4 px-4 py-12 bg-primary rounded-lg"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Submit Your Paper
              </h2>
              <p className="text-white mb-6 leading-relaxed">
                Your abstract should follow the template below. Please make sure
                you select the theme with the subtheme to which your abstract
                belongs as well as your presenting preference. Please note that
                the Scientific Committee reserves the right to decide on the
                final form of the presentation. A submission receipt is
                automatically sent to the corresponding author right after
                submission. Should you not receive this email, please contact
                the Technical Secretariat, so we can make sure your submission
                went through.
              </p>
              <div className="text-center">
                <button
                  disabled
                  className="inline-block bg-white/30 text-white px-8 py-3 rounded-lg font-semibold cursor-not-allowed shadow-md"
                  title="Submission link will be available soon"
                >
                  Submit your Abstract
                </button>
                <p className="text-white/80 text-sm mt-4 italic">
                  Submission link will be available soon
                </p>
              </div>
            </div>
          </motion.div>

          {/* Important Dates and Why Submit/Student Awards Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Important Dates Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Important Dates
              </h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-primary"></div>

                {/* Timeline items */}
                <div className="space-y-8">
                  {importantDates.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="relative pl-16"
                    >
                      {/* Dot */}
                      <div className="absolute left-3.5 top-1 w-6 h-6 bg-white rounded-full border-4 border-primary shadow-md"></div>

                      {/* Content */}
                      <div className="bg-primary text-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-lg font-bold mb-1">{item.event}</h3>
                        <p className="text-md font-semibold opacity-90">
                          {item.date}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Why Submit and Student Awards */}
            <div className="space-y-8">
              {/* Why Submit */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Why Submit?
                </h2>
                <div className="w-24 h-1 bg-primary mb-6"></div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Visibility within the global water research community
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Publication in IAHR Proceedings with a DOI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Networking with experts, practitioners, and policymakers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Opportunities for student and young professional awards
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* Student Awards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Student Awards & Competitions
                </h2>
                <div className="w-24 h-1 bg-primary mb-6"></div>
                <p className="text-gray-700 leading-relaxed">
                  In addition to scholarships, outstanding student presenters
                  may be eligible for recognition through programs such as the{" "}
                  <strong>Hohai-Africa Student Paper Competition</strong>, which
                  celebrates excellence in research and presentation. Cash
                  prizes and certificates of excellence may be awarded to top
                  student contributions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Need Help or Have Questions?
              </h2>
              <p className="text-gray-600 mb-6">
                Stay tuned to this page for updates on submission links,
                deadlines, templates, and official scholarship details as they
                are published.
              </p>
            </motion.div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contact@iahr-af2026.com"
                  className="text-quaternary hover:underline"
                >
                  contact@iahr-af2026.com
                </a>
              </p>
              <p className="text-lg">
                <strong>Venue:</strong> Kigali Conference and Exhibition Village
                (KCEV), Rwanda
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
