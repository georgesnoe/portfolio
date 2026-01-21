import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { ReactNode } from "react";
import Header from "@/components/header";
import { routing } from "@/i18n/routing";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "layout.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "https://georgesnoe.vercel.app/en",
      languages: {
        fr: "https://georgesnoe.vercel.app/fr",
        de: "https://georgesnoe.vercel.app/de",
        es: "https://georgesnoe.vercel.app/es",
        zh: "https://georgesnoe.vercel.app/zh",
        en: "https://georgesnoe.vercel.app/en",
        ja: "https://georgesnoe.vercel.app/ja",
      },
    },
    authors: {
      name: "Kossi Georges-Noé AHOMBO",
      url: "https://georgesnoe.vercel.app",
    },
    category: t("category"),
    classification: t("classification"),
    creator: "Kossi Georges-Noé AHOMBO",
    generator: "Next.js",
    icons: {
      icon: "https://georgesnoe.vercel.app/favicon.png",
      shortcut: "https://georgesnoe.vercel.app/favicon.ico",
      apple: "https://georgesnoe.vercel.app/apple-touch-icon.png",
    },
    keywords: t("keywords"),
    openGraph: {
      title: t("opengraph.title"),
      description: t("opengraph.description"),
      url: "https://georgesnoe.vercel.app",
      type: "website",
      alternateLocale: ["fr", "en", "de", "es", "zh", "ja"],
      countryName: "TG",
      determiner: "the",
      emails: ["georges.ahombo@gmail.com", "kossi.ahombo@lomebs.com"],
      phoneNumbers: "+22879063537",
      locale: locale,
      siteName: t("opengraph.sitename"),
    },
    publisher: "Vercel",
    referrer: "origin-when-cross-origin",
    robots: {
      index: true,
      follow: true,
      noarchive: true,
      nocache: true,
      indexifembedded: true,
      nositelinkssearchbox: false,
      notranslate: true,
      googleBot: {
        index: true,
        follow: true,
        indexifembedded: true,
        noarchive: true,
        nocache: true,
        nositelinkssearchbox: false,
        notranslate: true,
      },
    },
    twitter: {
      card: "summary_large_image",
      creator: "Kossi Georges-Noé AHOMBO",
      description: t("twitter.description"),
      title: t("twitter.title"),
      site: "https://georgesnoe.vercel.app",
    },
    verification: {
      google: "",
    },
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const headerTranslations = await getTranslations({
    locale,
    namespace: "layout.header",
  });

  const footerTranslations = await getTranslations({
    locale,
    namespace: "layout.footer",
  });

  return (
    <html lang={locale} data-theme="light">
      <body
        lang={locale}
        className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        <NextIntlClientProvider messages={null} locale={locale}>
          <Header t={headerTranslations} />
          <main className="px-4">{children}</main>
          <Footer t={footerTranslations} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
