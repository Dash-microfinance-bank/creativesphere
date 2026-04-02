// For adding custom fonts with other frameworks, see:
// https://tailwindcss.com/docs/font-family
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The creative sphere",
  description: "We help businesses find their voice, and make sure the world hears it. Through bold design, storytelling, and smart tech, we craft experiences that look good and feel right, building strategies that go beyond luck in a crowded market.",
  keywords: "creativesphere, creative agency, design agency, branding agency, digital agency, marketing agency, Nigeria",
  icons: {
    icon: '/logo-blue.png',
    shortcut: '/logo-blue.png',
    apple: '/logo-blue.png',
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
      className={cn("font-sans", poppins.variable)}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}