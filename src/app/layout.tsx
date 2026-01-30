import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";
import Loader from "@/components/Loader";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "sker - متجرك للأمان الذكي",
    template: "%s | sker"
  },
  description: "متجر إلكتروني متخصص في منتجات الأمان الذكي: كاميرات مراقبة، ساعات ذكية، أجراس ذكية وأكثر. جودة عالية، ضمان سنة، وشحن سريع في العراق.",
  keywords: [
    "كاميرات مراقبة",
    "ساعات ذكية",
    "أمان منزلي",
    "كاميرات 4K",
    "أجراس ذكية",
    "حساسات حركة",
    "متجر إلكتروني العراق"
  ],
  authors: [{ name: "sker" }],
  creator: "sker",
  publisher: "sker",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "ar_IQ",
    url: "/",
    siteName: "sker",
    title: "sker - متجرك للأمان الذكي",
    description: "متجر إلكتروني متخصص في منتجات الأمان الذكي: كاميرات مراقبة، ساعات ذكية، أجراس ذكية وأكثر.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "sker - Smart Security Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "sker - متجرك للأمان الذكي",
    description: "متجر إلكتروني متخصص في منتجات الأمان الذكي",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} font-cairo antialiased`}>
        <Loader />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ToastProvider />
      </body>
    </html>
  );
}
