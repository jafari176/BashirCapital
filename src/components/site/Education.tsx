import { useI18n } from "@/lib/i18n";
import { BulletList } from "./BulletList";

export function Education() {
  const { t } = useI18n();
  const bullets = [t("edu.b1"), t("edu.b2"), t("edu.b3"), t("edu.b4")];
  return (
    <section id="education" className="relative py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-6">{t("edu.eyebrow")}</p>
          <h2 className="font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl text-balance">
            {t("edu.title")}
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-muted-foreground leading-relaxed text-pretty">{t("edu.body")}</p>
          <BulletList items={bullets} tone="light" className="mt-10 mx-0" />
        </div>
      </div>
    </section>
  );
}