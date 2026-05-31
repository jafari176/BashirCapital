import bannerImage from "@/assets/banner-skyline.jpg";

export function SkylineBanner() {
  return (
    <section
      aria-hidden="true"
      className="relative h-[42vh] min-h-[320px] w-full overflow-hidden bg-charcoal lg:h-[58vh]"
    >
      <img
        src={bannerImage}
        alt=""
        width={1920}
        height={1080}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-background/90" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-charcoal/70 to-transparent" />
    </section>
  );
}