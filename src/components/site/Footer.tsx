import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl text-charcoal">Bashir</span>
              <span className="text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground">
                Capital
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              {t("foot.tag")}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.28em] text-blue-accent mb-4">
              {t("foot.firm")}
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#access" className="hover:text-charcoal transition-colors">{t("nav.access")}</a></li>
              <li><a href="#about" className="hover:text-charcoal transition-colors">{t("nav.about")}</a></li>
              <li><a href="#focus" className="hover:text-charcoal transition-colors">{t("nav.focus")}</a></li>
              <li><a href="#education" className="hover:text-charcoal transition-colors">{t("nav.education")}</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.28em] text-blue-accent mb-4">
              {t("foot.contact")}
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="text-charcoal">contact@bashircapital.com</li>
              <li>Montréal, Québec · Cleveland, Ohio</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Bashir Capital. {t("foot.rights")}</div>
          <div className="max-w-xl text-pretty">
            {t("foot.legal")}
          </div>
        </div>
      </div>
    </footer>
  );
}