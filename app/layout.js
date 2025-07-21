import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js + Tailwind Theme Toggle",
  description: "Dark/Light Mode with TailwindCSS and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-colors">
        <Navbar />
        <main className="flex-1 px-4 py-6">{children}</main>
        <div className="bg-white dark:bg-black text-black dark:text-white p-10 rounded">
          Tes dark mode
        </div>
        <Footer />
      </body>
    </html>
  );
}
