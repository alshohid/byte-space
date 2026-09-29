import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ByteSpace — বাংলায় সেরা অনলাইন লার্নিং প্ল্যাটফর্ম",
    template: "%s | ByteSpace",
  },
  description:
    "বাংলায় সেরা অনলাইন লার্নিং প্ল্যাটফর্ম। ওয়েব ডেভেলপমেন্ট, ডেটা সায়েন্স, মোবাইল অ্যাপ এবং আরও অনেক কিছু শিখুন।",
  keywords: [
    "online courses",
    "bangla courses",
    "web development",
    "programming",
    "ByteSpace",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="antialiased">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-satoshi bg-bg-primary text-text-primary selection:bg-accent selection:text-accent-text min-h-screen flex flex-col">
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
