import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google';
import "./globals.css";
import * as React from "react";
import {NextUIProvider} from "@nextui-org/system";
import { ThemeProvider } from "@/components/ui/theme-provider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// Load Inter font with subsets and weights
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Optional: creates a CSS variable
});

export const metadata: Metadata = {
  title: "InnovationX",
  description: "Maths, Technology and Economics Innovation Competition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={inter.variable}>
              <NextUIProvider>
                <ThemeProvider
                  attribute="class"
                  defaultTheme="dark"
                  enableSystem
                  disableTransitionOnChange>
                  {children}
                </ThemeProvider>
              </NextUIProvider>

        </body>
    </html>
  );
}
