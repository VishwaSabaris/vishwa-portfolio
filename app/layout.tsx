import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishwa Sabaris V | AI · Cloud · DevOps Engineer",
  description:
    "Portfolio of Vishwa Sabaris V — AI, AWS Cloud, and DevOps engineer building intelligent, cloud-native systems. B.E CSE AI & ML student from Coimbatore, India.",
  keywords: [
    "Vishwa Sabaris",
    "AI Engineer",
    "Cloud Engineer",
    "DevOps",
    "AWS",
    "Machine Learning",
    "Portfolio",
    "Coimbatore",
  ],
  authors: [{ name: "Vishwa Sabaris V" }],
  openGraph: {
    title: "Vishwa Sabaris V | AI · Cloud · DevOps Engineer",
    description:
      "Building the future with AI, Cloud, and Automation. Explore projects, skills, and certifications.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwa Sabaris V | AI · Cloud · DevOps Engineer",
    description:
      "Building the future with AI, Cloud, and Automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050508] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
