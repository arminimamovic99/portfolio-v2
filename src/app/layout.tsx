import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { companies } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const companyNames = companies.map((company) => company.name);
const companyList = `${companyNames.slice(0, -1).join(", ")}, and ${companyNames.at(-1)}`;

export const metadata: Metadata = {
  title: "Armin Imamovic, Frontend Engineer",
  description: `Frontend engineer and product lead. I've built for ${companyList}, then built and sold my own SaaS. Now I build yours.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
