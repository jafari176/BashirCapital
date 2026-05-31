import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, setLang } = useI18n();

  const links = [
    { href: "#access", label: t("nav.access") },
    { href: "#about", label: t("nav.about") },
    { href: "#focus", label: t("nav.focus") },
    { href: "#education", label: t("nav.education") },
    { href: "#inquiry", label: t("nav.inquire") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center">
          <span
            className={`font-display text-2xl sm:text-[1.75rem] tracking-[0.28em] font-medium transition-colors ${
              scrolled
                ? "text-charcoal"
                : "text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]"
            }`}
          >
            BASHIR CAPITAL
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs uppercase tracking-[0.22em] transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-charcoal"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <LangSwitch
            current={lang}
            scrolled={scrolled}
            onChange={setLang}
          />
          <a
            href="#inquiry"
            className={`hidden md:inline-flex items-center text-xs uppercase tracking-[0.22em] border-b transition-colors pb-1 ${
              scrolled
                ? "text-charcoal border-charcoal/40 hover:border-charcoal"
                : "text-white border-white/40 hover:border-white"
            }`}
          >
            {t("nav.cta")}
          </a>
        </div>
      </div>
    </header>
  );
}

function LangSwitch({
  current,
  scrolled,
  onChange,
}: {
  current: Lang;
  scrolled: boolean;
  onChange: (l: Lang) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const triggerColor = scrolled ? "text-charcoal hover:text-charcoal" : "text-white/80 hover:text-white";
  const options: { code: Lang; label: string }[] = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Select language"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] transition-colors ${triggerColor}`}
      >
        <Globe className="h-4 w-4" strokeWidth={1.5} />
        <span className="hidden sm:inline">{current.toUpperCase()}</span>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full mt-3 min-w-[10rem] border border-border bg-background/95 backdrop-blur-md shadow-lg"
        >
          {options.map((opt) => {
            const isActive = current === opt.code;
            return (
              <button
                key={opt.code}
                role="menuitem"
                onClick={() => {
                  onChange(opt.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-3 text-xs uppercase tracking-[0.22em] transition-colors ${
                  isActive ? "text-charcoal" : "text-muted-foreground hover:text-charcoal"
                }`}
              >
                <span>{opt.label}</span>
                <span className="ml-4 text-[0.65rem] opacity-60">{opt.code.toUpperCase()}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}