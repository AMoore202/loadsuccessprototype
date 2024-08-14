import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const roboto = Roboto({
  weight: ['400', '500', '700', ],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Load Results Prototype",
  description: "Prototype for showing the success and exception flows for loading a bag",
  formatDetection: { telephone: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}