import { useI18n } from "@/lib/i18n";

export function Access() {
  const { t } = useI18n();
  const raw = t("access.v1");
  const lines = raw.split("\n").map(l => l.trim()).filter(Boolean);
  const headline = lines[0] ?? "";
  const intro = lines[1] ?? "";
  const bullets = lines.slice(2).map(l => l.replace(/^-\s*/, ""));
  return (
    <section id="access" className="relative overflow-hidden bg-charcoal py-32 text-white lg:py-44">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 0.5px, transparent 1px), radial-gradient(circle at 80% 70%, white 0.5px, transparent 1px)",
          backgroundSize: "120px 120px, 160px 160px",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <p className="eyebrow text-blue-accent mb-8">{t("access.eyebrow")}</p>
        <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl text-balance">
          {t("access.title")}
          <span className="block text-soft-grey italic">{t("access.titleItalic")}</span>
        </h2>
        <div className="mx-auto mt-12 max-w-2xl">
          <p className="text-lg leading-relaxed text-white/70 text-pretty">
            {t("access.body")}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl border border-white/10 bg-white/[0.03] px-8 py-14 sm:px-14 sm:py-16">
          <div className="text-center text-xs uppercase tracking-[0.32em] text-blue-accent">
            {t("access.k1")}
          </div>
          <p className="mt-6 text-center font-display text-2xl sm:text-3xl italic text-white leading-snug">
            {headline}
          </p>
          <p className="mx-auto mt-6 max-w-lg text-center text-sm sm:text-base leading-relaxed text-white/75">
            {intro}
          </p>
          <ul className="mx-auto mt-12 grid w-full max-w-3xl gap-px bg-white/10 sm:grid-cols-2">
            {bullets.map((item, i) => (
              <li
                key={i}
                className="group flex items-start gap-5 bg-charcoal px-6 py-6 transition-colors hover:bg-white/[0.04]"
              >
                <span
                  aria-hidden
                  className="font-display text-xs tracking-[0.3em] text-blue-accent pt-1"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-sm sm:text-[0.95rem] leading-relaxed text-white/85 text-pretty">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}