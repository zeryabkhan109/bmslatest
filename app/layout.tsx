import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sora, Inter } from "next/font/google";
import "./style.css";
import { cn } from "@/lib/utils";

const soraSans = Sora({
  variable: "--font-sora-sans",
  subsets: ["latin"],
});
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BMS",
  description:
    "Wir machen deine Website modern, ansprechend, sichtbar und verwandeln Besucher in Neukundenanfragen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        soraSans.variable,
        interSans.variable,
      )}
    >
      <body className="min-h-full flex flex-col font-sora bg-black-1100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
