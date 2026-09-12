import { Hero } from "./components/Hero";
import { Solution } from "./components/Solution";
import { Method } from "./components/Method";
import { Features } from "./components/Features";
import { Demo } from "./components/Demo";
import { Impact } from "./components/Impact";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    // The grid scrolls with the page rather than sitting fixed behind it: it is
    // drawn on the paper, not projected onto the screen.
    <main className="sheet-grid lg:pl-[248px]">
      <Hero />
      <Solution />
      <Method />
      <Features />
      <Demo />
      <Impact />
      <Team />
      <Footer />
    </main>
  );
}
