// Yes, you can continue making the website here by modifying or adding imports and global styles as needed!
import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CLARA Study | Light Therapy for ADHD",
  description: "CLARA is a clinical trial at the University of Southern Denmark investigating whether light therapy can help adults with ADHD improve concentration and quality of life.",
  keywords: ["ADHD", "light therapy", "clinical trial", "University of Southern Denmark", "adult ADHD", "CLARA"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
        style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
