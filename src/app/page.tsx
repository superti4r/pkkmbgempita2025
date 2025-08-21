import LinkCard from "@/components/LinkCard";
import Avatar from "@/components/Avatar";
import ThemeToggle from "@/components/ThemeToggle";
import { siteConfig } from "@/lib/site";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <Avatar
        src={siteConfig.avatar || "/pkkmbgempita2025.png"}
        alt={siteConfig.title}
      />

      <div className="mt-6 w-full max-w-xl grid gap-3">
        {siteConfig.links.map((item) => (
          <LinkCard key={item.href} {...item} />
        ))}
      </div>

      <footer className="mt-8 text-center text-xs text-muted-foreground">
        Dikelola oleh &mdash; PDD PKKMB Gempita 2025
      </footer>

      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 
        bg-[radial-gradient(40rem_20rem_at_top,theme(colors.muted),transparent)] 
        dark:bg-[radial-gradient(40rem_20rem_at_top,theme(colors.background),transparent)]"
      />
      <div aria-hidden className="beam-glow" />
    </main>
  );
}
