import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/app/components/navbar";

export const metadata: Metadata = {
    title: "OUTDOCS Film Festival",
    description: "OUTDOCS Film Festival is a celebration of outdoor adventure and environmental documentary films.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link rel="stylesheet" href="https://use.typekit.net/wnq5svi.css"/>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
        </head>
        <body className="font-Nimbus-Sans antialiased">
            <Navbar/>
            {children}
        </body>
        </html>
    );
}
