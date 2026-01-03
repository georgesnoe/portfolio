import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { routing } from "@/i18n/routing";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "seo.global" });
  const websiteUrl = "https://georgesnoe.github.io";
  const googleSiteVerification = "EkaPQDHO6HAGhzAd7U3C5de7etE7LqjdmtuKha70k6Q";
  const author = "Kossi Georges-Noé AHOMBO";

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: `${websiteUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
      siteName: t("title"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: `${websiteUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    keywords: t("keywords"),
    authors: {
      name: author,
      url: websiteUrl,
    },
    category: t("category"),
    classification: t("classification"),
    creator: author,
    formatDetection: {
      date: false,
      address: false,
      email: true,
      telephone: true,
      url: true,
    },
    generator: "Next.js",
    manifest: `${websiteUrl}/manifest.json`,
    icons: {
      icon: `${websiteUrl}/icon.png`,
      shortcut: `${websiteUrl}/favicon.ico`,
      apple: `${websiteUrl}/apple-touch-icon.png`,
    },
    referrer: "origin",
    verification: {
      google: googleSiteVerification,
    },
    publisher: "Github Pages",
    robots: {
      follow: true,
      index: true,
      indexifembedded: true,
      nositelinkssearchbox: false,
      googleBot: {
        follow: true,
        index: true,
        nositelinkssearchbox: false,
      },
    },
    abstract: t("description"),
    alternates: {
      canonical: new URL(websiteUrl),
      languages: {
        fr: new URL("/fr", websiteUrl),
        en: new URL("/en", websiteUrl),
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocalizedLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure the locale is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} data-theme="light">
      <body
        className={`${geistSans.variable} ${manrope.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={null} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
