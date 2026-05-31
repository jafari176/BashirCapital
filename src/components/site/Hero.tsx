import heroImage from "@/assets/hero-skyline.jpg";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-charcoal">
      {/* Cinematic skyline image with Ken Burns motion */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Aerial view of the Cleveland, Ohio skyline on a bright sunny day"
          width={1920}
          height={1280}
          className="ken-burns h-full w-full object-cover"
        />
      </div>

      {/* Atmospheric overlays — stronger for readability over bright daytime sky */}
      <div className="absolute inset-0 bg-charcoal/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-transparent to-transparent" />
      {/* Long, layered atmospheric fade into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[22%] hero-vignette" />

      {/* Subtle dark radial vignette behind the text block for separation */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 z-[5] h-[70%] w-full -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 25% 60%, oklch(0.18 0.015 250 / 0.35) 0%, oklch(0.18 0.015 250 / 0.08) 55%, transparent 100%)",
        }}
      />

      {/* Subtle moving light reflections */}
      <div className="pointer-events-none absolute inset-0 z-[5] mix-blend-overlay opacity-40">
        <div
          className="absolute -inset-x-10 top-1/3 h-px bg-gradient-to-r from-transparent via-white to-transparent"
          style={{ animation: "fadeIn 4s ease-in-out infinite alternate" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="max-w-3xl reveal-up">
          <p className="eyebrow-hero mb-7">{t("hero.eyebrow")}</p>
          <h1 className="font-display text-[2.75rem] leading-[1.05] text-white sm:text-6xl lg:text-7xl text-balance drop-shadow-lg">
            {t("hero.title")}
          </h1>
          <p className="mt-7 max-w-[34rem] font-body text-[1.0625rem] leading-[1.65] tracking-[0.01em] text-white/85 sm:text-lg sm:leading-[1.6] text-pretty drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
            {t("hero.sub")}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}