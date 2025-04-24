import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'IAHR Africa Congress 2026' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="7th IAHR Africa Congress 2026 - Kigali, Rwanda" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;