import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { profile, shortUrl } from "@/data/content";

type Theme = "paper" | "night";

const nav = [
  { hash: "work", label: "Work" },
  { hash: "experience", label: "Experience" },
  { hash: "skills", label: "Skills" },
  { hash: "contact", label: "Contact" },
];

export function SiteChrome({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("paper");

  useEffect(() => {
    const saved = localStorage.getItem("amit-theme");
    const next: Theme = saved === "night" ? "night" : "paper";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "night" ? "#141210" : "#f3eee6");
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "paper" ? "night" : "paper";
    setTheme(next);
    localStorage.setItem("amit-theme", next);
    document.documentElement.dataset.theme = next;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "night" ? "#141210" : "#f3eee6");
  }

  return (
    <>
      <div className="h-1 bg-saffron" aria-hidden="true" />
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-fg focus:px-4 focus:py-3 focus:text-bg"
      >
        Skip to work
      </a>
      <header className="no-print sticky top-0 z-30 border-b border-line bg-bg">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-1 md:px-10">
          <Link to="/" className="font-display text-xl italic">
            {profile.name}
          </Link>
          <nav className="hidden items-center md:flex" aria-label="Sections">
            {nav.map((item) => (
              <Link
                key={item.hash}
                to="/"
                hash={item.hash}
                className="inline-flex min-h-11 items-center px-3 text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center"
            aria-label={theme === "paper" ? "Switch to night" : "Switch to paper"}
            onClick={toggleTheme}
          >
            {theme === "paper" ? (
              <Moon className="size-5" strokeWidth={1.5} />
            ) : (
              <Sun className="size-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
        <nav
          className="flex gap-1 overflow-x-auto px-4 pb-1 md:hidden"
          aria-label="Sections"
        >
          {nav.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              className="inline-flex min-h-11 shrink-0 items-center px-3 text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      {children}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            © {new Date().getFullYear()} {profile.name}. {profile.location}.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <Link to="/cv" className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
              CV
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
            >
              {shortUrl(profile.github)}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
