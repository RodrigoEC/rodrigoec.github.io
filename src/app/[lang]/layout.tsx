import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "./globals.css";
import HotjarAnalytics from "@/components/HotjarAnalytics";

const InriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  subsets: ["latin"],
  weight: ["300","400","700"],
});

export const metadata: Metadata = {
  title: "Rodrigo Eloy Cavalcanti",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InriaSans.variable} antialiased flex flex-col items-center`}
      >
        {children}
      </body>
      <HotjarAnalytics siteId={"6463961"} />
    </html>
  );
}
