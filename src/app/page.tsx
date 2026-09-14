import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { WhoIAm } from "@/components/who-i-am";
import { SoloVsAgency } from "@/components/solo-vs-agency";
import { HowIWork } from "@/components/how-i-work";
import { SelectedWork } from "@/components/selected-work";
import { Testimonials } from "@/components/testimonials";
import { Skills } from "@/components/skills";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <TrustedBy />
        <WhoIAm />
        <SoloVsAgency />
        <HowIWork />
        <SelectedWork />
        <Testimonials />
        <Skills />
        <Faq />
        <Contact />
      </main>
    </>
  );
}
