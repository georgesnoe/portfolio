import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<ImageResponse> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "metadata.opengraph.image",
  });

  return new ImageResponse(<div style={{ fontSize: 128 }}>{t("title")}</div>);
}
