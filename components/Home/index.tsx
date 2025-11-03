import AboutUs from "@/components/about";
import Awards from "@/components/Awards";
import ExpertiseSec from "@/components/expertise";
import Hero from "@/components/hero";
import Work from "@/components/work";


function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <AboutUs />
      <ExpertiseSec />
      <Work />
      <Awards />
    </div>
  );
}

export default Home;
