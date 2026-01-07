import React from "react";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";
import CountdownTimer from "../components/common/CountdownTimer";

export default function Participate() {
  return (
    <Layout title="Registration - IAHR Africa Congress 2026">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/conference.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-6">Registration</h1>
          <p className="text-xl text-center max-w-2xl mb-8">
            Join us in Kigali, Rwanda for the 7th IAHR Africa Congress from
            December 8-11, 2026
          </p>
          <a
            href="#registration-form"
            className="px-6 py-3 bg-quaternary hover:bg-blue-700 text-white rounded-md transition duration-300"
          >
            Register Now
          </a>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="bg-quaternary py-8">
        <div className="container mx-auto px-4">
          <CountdownTimer targetDate="2026-12-08T00:00:00" />
        </div>
      </div>

      {/* Registration Fees */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Registration Fees
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          {/* Main Registration Fees Table */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-800 text-center mb-6"
          >
            International & General Participants
          </motion.h3>

          <div className="overflow-x-auto mb-16">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left border border-primary"></th>
                  <th className="p-4 text-center border border-primary">
                    Early Registration (D-90 days)
                  </th>
                  <th className="p-4 text-center border border-primary">
                    Standard Registration (D-30 days)
                  </th>
                  <th className="p-4 text-center border border-primary">
                    On-site Registration
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-4 text-left border border-gray-200">
                    IAHR Member
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €387
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €516
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €645
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 text-left border border-gray-200">
                    Non – IAHR Member
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €430
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €559
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €688
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 text-left border border-gray-200">
                    Student (IAHR Member)
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €172
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €301
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €344
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 text-left border border-gray-200">
                    Student (Non – IAHR Member)
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €215
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €344
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €473
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Local Africa Registration Fees Table */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-800 text-center mb-6"
          >
            Special Rates for African Students & Experts
          </motion.h3>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left border border-primary"></th>
                  <th className="p-4 text-center border border-primary">
                    Early Registration (D-90 days)
                  </th>
                  <th className="p-4 text-center border border-primary">
                    Standard Registration (D-30 days)
                  </th>
                  <th className="p-4 text-center border border-primary">
                    On-site Registration
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-4 text-left border border-gray-200">
                    IAHR Member
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €194
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €258
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €323
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 text-left border border-gray-200">
                    Non – IAHR Member
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €215
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €280
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €344
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 text-left border border-gray-200">
                    Student (IAHR Member)
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €86
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €151
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €215
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 text-left border border-gray-200">
                    Student (Non – IAHR Member)
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €108
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €172
                  </td>
                  <td className="p-4 text-center border border-gray-200">
                    €237
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration-form" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Congress Registration
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Registration will open in 2026. Please check back closer to the
              event date.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
