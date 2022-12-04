import React from "react";
import Footer from "../components/Footer";
import GlobalNav from "../components/GlobalNav";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head></head>
            <body className="overflow-y-scroll">
                <GlobalNav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
