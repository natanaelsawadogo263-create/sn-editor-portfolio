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
  title: "SN Editor | Monteur vidéo professionnel",
  description:
    "SN Editor transforme vos vidéos brutes en contenus modernes, dynamiques et adaptés à TikTok, Instagram, YouTube et aux campagnes publicitaires.",
  keywords: [
    "monteur vidéo",
    "video editor",
    "montage TikTok",
    "montage Reels",
    "montage YouTube",
    "SN Editor",
  ],
  authors: [{ name: "SN Editor" }],
  creator: "SN Editor",
  openGraph: {
    title: "SN Editor | Monteur vidéo professionnel",
    description:
      "Montage vidéo pour créateurs, entrepreneurs, marques et entreprises.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}