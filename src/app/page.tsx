import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { WhoIAm } from "@/components/who-i-am";
import { HowIWork } from "@/components/how-i-work";
import { SelectedWork } from "@/components/selected-work";
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
        <HowIWork />
        <SelectedWork />
        <Skills />
        <Faq />
        <Contact />
      </main>
    </>
  );
}
