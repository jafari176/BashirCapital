import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";

export function Inquiry() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useI18n();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="inquiry" className="relative bg-secondary py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-6">{t("inq.eyebrow")}</p>
          <h2 className="font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl text-balance">
            {t("inq.title")}
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed text-pretty">
            {t("inq.body")}
          </p>
          <div className="mt-12 space-y-3 text-sm">
            <div className="text-xs uppercase tracking-[0.28em] text-blue-accent">
              {t("inq.direct")}
            </div>
            <div className="text-charcoal">contact@bashircapital.com</div>
            <div className="text-muted-foreground">{t("inq.city")}</div>
          </div>
        </div>

        <div className="lg:col-span-7">
          {submitted ? (
            <div className="border border-border bg-background p-12 text-center">
              <p className="eyebrow mb-4">{t("inq.received")}</p>
              <h3 className="font-display text-3xl text-charcoal">{t("inq.thanks")}</h3>
              <p className="mt-4 text-muted-foreground">{t("inq.thanksBody")}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <Field label={t("inq.first")} name="firstName" required />
                <Field label={t("inq.last")} name="lastName" required />
              </div>
              <Field label={t("inq.email")} name="email" type="email" required />
              <Field label={t("inq.lang")} name="language" placeholder={t("inq.langPh")} />
              <div>
                <label className="block text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  {t("inq.msg")}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-3 w-full border-b border-border bg-transparent py-3 text-charcoal outline-none transition-colors focus:border-blue-accent"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-charcoal"
              >
                <span className="border-b border-charcoal/60 pb-1 transition-colors group-hover:border-blue-accent group-hover:text-blue-accent">
                  {t("inq.submit")}
                </span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-border bg-transparent py-3 text-charcoal placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-blue-accent"
      />
    </div>
  );
}