import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adarsh | CS Engineer & Data Science",
  description: "Portfolio of Adarsh, a Computer Science Engineering student specializing in Data Science, Cloud, and DevOps.",
  keywords: ["Adarsh", "Portfolio", "Computer Science", "Data Science", "Web Development", "React", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground selection:bg-neon-cyan selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
