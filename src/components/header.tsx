import { Github } from "lucide-react";
import NextLink from "next/link";

export default function Header({ t }: { t: (value: string) => string }) {
  return (
    <header className="sticky top-0 left-0 w-full h-16 bg-gray-100 dark:bg-gray-900 flex items-center justify-between">
      <div className="font-bold text-2xl text-blue-900 px-4 text-nowrap">
        Georges-Noé
      </div>
      <div className="flex items-center justify-end size-full gap-4">
        <NextLink
          href="https://github.com/georgesnoe"
          className="bg-black dark:bg-white text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-colors duration-300 h-full flex items-center justify-center px-4 gap-1"
        >
          <Github size={24} /> {t("github")}
        </NextLink>
      </div>
    </header>
  );
}
