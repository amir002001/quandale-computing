/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Footer from "../components/Footer";
import GlobalNav from "../components/GlobalNav";
import Header from "../components/Header";
import "../styles/globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin={"unkown"}
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                ></link>
            </head>
            <body>
                <Header />
                <GlobalNav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
