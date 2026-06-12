import Calculator from "@/components/Calculator";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Grants from "@/components/Grants";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LeadForm from "@/components/LeadForm";
import ProblemSolution from "@/components/ProblemSolution";
import Process from "@/components/Process";
import Realizations from "@/components/Realizations";
import StickyCta from "@/components/StickyCta";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <Calculator />
        <Process />
        <Realizations />
        <Testimonials />
        <Grants />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
