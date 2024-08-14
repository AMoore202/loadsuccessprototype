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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}