import multifamily from "@/assets/multifamily.jpg";
import { useI18n } from "@/lib/i18n";

export function Focus() {
  const { t } = useI18n();
  const pillars = [
    { n: "01", t: t("focus.p1t"), d: t("focus.p1d") },
    { n: "02", t: t("focus.p2t"), d: t("focus.p2d") },
    { n: "03", t: t("focus.p3t"), d: t("focus.p3d") },
  ];
  return (
    <section id="focus" className="relative bg-secondary py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">{t("focus.eyebrow")}</p>
            <h2 className="font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl text-balance">
              {t("focus.title")}
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed text-pretty">
              {t("focus.body")}
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={multifamily}
                alt="Midwest multifamily residential building"
                width={1600}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-px bg-border md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.n} className="bg-secondary p-10">
              <div className="text-xs uppercase tracking-[0.3em] text-blue-accent">{p.n}</div>
              <h3 className="mt-6 font-display text-2xl text-charcoal">{p.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}