import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reneilwe Moagi | Marketing Portfolio",
  description: "Marketing graduate portfolio featuring digital marketing, brand activations and campaign strategy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans antialiased bg-[#09090d] text-zinc-100">{children}</body>
    </html>
  );
}
