import AboutUs from "@/components/about";
import ExpertiseSec from "@/components/expertise";
import Hero from "@/components/hero";
import Work from "@/components/work";


function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <AboutUs />
      <Work />
      <ExpertiseSec />
    </div>
  );
}

export default Home;
