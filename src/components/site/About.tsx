import aboutImage from "@/assets/about-aerial.jpg";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-6">{t("about.eyebrow")}</p>
          <h2 className="font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl text-balance">
            {t("about.title")}
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-muted-foreground leading-relaxed text-pretty">
          <p className="text-lg text-charcoal whitespace-pre-line">{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-10">
        <div className="relative aspect-[21/9] overflow-hidden">
          <img
            src={aboutImage}
            alt="Aerial view of an American Midwest metropolitan region"
            width={1600}
            height={1100}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-border pt-12 md:grid-cols-4">
          {[
            { k: t("about.s1k"), v: t("about.s1v") },
            { k: t("about.s2k"), v: t("about.s2v") },
            { k: t("about.s3k"), v: t("about.s3v") },
            { k: t("about.s4k"), v: t("about.s4v") },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl text-charcoal">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}