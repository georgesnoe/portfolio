import { getTranslations } from "next-intl/server";

export default async function NotFound({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "notfound" });

  return <h1>{t("title")}</h1>;
}
