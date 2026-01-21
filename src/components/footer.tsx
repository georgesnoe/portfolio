export default function Footer({ t }: { t: (value: string) => string }) {
  return (
    <footer className="p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-center">
      <p>{t("madewith")}</p>
      <p>
        {t("copyright")} {new Date().getFullYear()}. {t("allrights")}
      </p>
    </footer>
  );
}
