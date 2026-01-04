import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "@/styles/globals.css";
import {
  creatorName,
  googleSiteVerificationCode,
  websiteUrl,
} from "@/lib/constants";

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
  const t = await getTranslations({ locale, namespace: "global.seo" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: new URL(websiteUrl).toString(),
      type: "website",
      locale: locale,
      alternateLocale: routing.locales.filter(
        (availableLocales) => availableLocales !== locale,
      ),
      countryName: "Togo",
      determiner: "the",
      emails: ["georges.ahombo@gmail.com", "kossi.ahombo@lomebs.com"],
      phoneNumbers: "+22879063537",
      ttl: undefined,
      images: [
        {
          url: new URL("og-image.png", websiteUrl).toString(),
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
      creator: creatorName,
      images: [
        {
          url: new URL("og-image.png", websiteUrl).toString(),
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
      site: new URL(websiteUrl).toString(),
    },
    robots: {
      index: true,
      follow: true,
      indexifembedded: true,
      nositelinkssearchbox: false,
      unavailable_after: undefined,
      "max-image-preview": "standard",
      nocache: true,
      noarchive: true,
      notranslate: false,
      nosnippet: false,
      googleBot: {
        index: true,
        follow: true,
        nositelinkssearchbox: false,
        nosnippet: false,
        noarchive: true,
        notranslate: false,
        unavailable_after: undefined,
        "max-image-preview": "standard",
      },
    },
    alternates: {
      canonical: new URL(websiteUrl).toString(),
      languages: {
        fr: new URL("fr", websiteUrl).toString(),
        en: new URL("en", websiteUrl).toString(),
      },
    },
    formatDetection: {
      date: false,
      address: false,
      email: true,
      telephone: true,
      url: true,
    },
    icons: {
      icon: new URL("favicon.ico", websiteUrl).toString(),
      shortcut: new URL("favicon.ico", websiteUrl).toString(),
      apple: new URL("favicon.ico", websiteUrl).toString(),
    },
    verification: {
      google: googleSiteVerificationCode,
    },
    authors: {
      name: creatorName,
      url: new URL(websiteUrl).toString(),
    },
    category: t("category"),
    classification: t("classification"),
    creator: creatorName,
    generator: "Next.js",
    manifest: new URL("manifest.json", websiteUrl).toString(),
    referrer: "origin",
    publisher: "Vercel",
    abstract: t("description"),
  } satisfies Metadata;
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  viewportFit: "cover",
  initialScale: 1,
  userScalable: false,
  minimumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default async function LocalizedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}
        lang={locale}
      >
        <NextIntlClientProvider locale={locale} messages={null}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
