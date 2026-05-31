import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/site/Navigation";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Focus } from "@/components/site/Focus";
import { Access } from "@/components/site/Access";
import { Education } from "@/components/site/Education";
import { Inquiry } from "@/components/site/Inquiry";
import { Footer } from "@/components/site/Footer";
import { SkylineBanner } from "@/components/site/SkylineBanner";
import { LanguageProvider } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <Access />
          <SkylineBanner />
          <About />
          <Focus />
          <Education />
          <Inquiry />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
