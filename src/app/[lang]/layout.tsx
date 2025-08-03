import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Lang } from "../../../declarations";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });


export function generateStaticParams() {
  const locales: Lang[] = ["en", "it"];
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>;
}) {
  // params can be Promise-like, so await
  const { lang } = await params;
  const translations = await import(`@/locales/${lang}.json`).then(m => m.default);

  return (
    <html lang={lang}>
      <head>
        <meta name="google-site-verification" content="N10fq6owwzdQQ_QbCAAE_nHXj3gJF1ai0sqzOxuN1Ew" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>{translations.meta.title}</title>
        <meta name="title" content={translations.meta.title} />
        <meta name="description" content={translations.meta.description} />
        <meta name="keywords" content={translations.meta.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="30 days" />
        <meta name="author" content="Domenico Gagliardo" />
        <meta name="copyright" content="Domenico Gagliardo" />
        <link rel="icon" href="./favicon.ico" />
        <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}