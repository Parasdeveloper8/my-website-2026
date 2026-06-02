import { Navbar } from "./components/shared/Navbar";
import { BackgroundGlow } from "./components/ui/BackgroundGlow";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Timeline } from "./sections/Timeline";
import { Services } from "./sections/Services";
import { ProjectGrid } from "./sections/ProjectGrid";
import { Footer } from "./components/shared/Footer";
import { Contact } from "./sections/Contact";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

function App() {
  useSmoothScroll();
  return (
    <div className="relative text-white min-h-screen antialiased bg-background selection:bg-brand-primary/20 selection:text-white">
      <BackgroundGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Services />
        <ProjectGrid />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;