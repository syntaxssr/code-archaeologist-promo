import { Hero } from "./components/Hero";
import { Solution } from "./components/Solution";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { Demo } from "./components/Demo";
import { Impact } from "./components/Impact";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Solution />
      <HowItWorks />
      <Features />
      <Demo />
      <Impact />
      <Team />
      <Footer />
    </main>
  );
}
