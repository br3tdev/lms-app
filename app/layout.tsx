import ToastProvider from "@/components/providers/toaster-provider";
import ConfettiProvider from "@/provider/confetti-provider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learning Anything, On Your Schedule | LMS",
  description: "Learning Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NextTopLoader
            color="#0369a1"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
          />
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
