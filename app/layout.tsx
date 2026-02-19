import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const title = "Korišćenje veštačke inteligencije za uspešno pisanje newslettera";
const description =
  "Online radionica: nauči kako da koristiš AI alate (ChatGPT, Gemini, Claude, Google AI Studio) za brže, bolje i autentično pisanje newslettera. 09.02.2026 u 19:00, Zoom, 60 min, snimak zauvek.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    title,
    description,
    locale: "sr_RS",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
