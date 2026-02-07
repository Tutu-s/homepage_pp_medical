
import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import medicalData from "@/config/medical-content.json";

const serif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});


export const metadata: Metadata = {
  title: medicalData.seo.title,
  description: medicalData.seo.description,
  keywords: medicalData.seo.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={cn(serif.variable)} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      </head>
      <body className={cn("font-sans antialiased bg-slate-50 text-slate-900 min-h-screen sidebar-closed")} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
