import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from '@chakra-ui/react';

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
      <ChakraProvider>
        <body className={roboto.className}>{children}</body>
      </ChakraProvider>
    </html>
  );
}



// function MyApp({ Component, pageProps }) {
//   return (
    
//       <Component {...pageProps} />
//     </ChakraProvider>
//   );
// }

// export default MyApp;
