import type { Metadata } from "next";
import { jetBrainsMono, jersey10, spaceMono } from "@/app/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Prestamochi - Coming Soon",
  description: "The Tamagochi-Style Loan Game. Earn points with every loan and level up your digital pet! Coming soon to iOS and Android.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${jetBrainsMono.variable} ${jersey10.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
