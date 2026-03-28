import type { Metadata } from "next";
import { Noto_Serif, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ravindra IAS | Premium UPSC Coaching",
  description:
    "Master UPSC with India's Only Certified NCERT Expert. Join Ravindra Institute's proven NCERT Foundation Programme for conceptual mastery and personalized mentorship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${notoSerif.variable} ${inter.variable} min-h-full flex flex-col antialiased font-sans`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}