import AboutUs from "@/components/about";
import ExpertiseSec from "@/components/expertise";
import Hero from "@/components/hero";
import Work from "@/components/work";
import Services from "@/components/services";


function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <AboutUs />
      <Services />
      <Work />
      <ExpertiseSec />
    </div>
  );
}

export default Home;
