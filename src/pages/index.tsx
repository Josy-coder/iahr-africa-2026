import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Chairs from '../components/home/Chairs';
import PresidentMessage from '../components/home/PresidentMessage';
import DivisionChair from '../components/home/DivisionChair';
import Location from '../components/home/Location';
import GreenCitySection from '../components/home/GreenCity';
import Organizers from '../components/home/Organizers';

export default function Home() {
    return (
        <Layout title="IAHR Africa Congress 2026 - Kigali, Rwanda">
            <Hero />

            <Chairs />

            <PresidentMessage />

            <DivisionChair />

            <Location />

            <GreenCitySection />


            <Organizers />
        </Layout>
    );
}