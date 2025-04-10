import AboutUs from "@/components/about";
import Awards from "@/components/Awards";
import ExpertiseSec from "@/components/expertise";
import Hero from "@/components/header/hero";
import Work from "@/components/work";

function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ExpertiseSec />
      <Work />
      <Awards />
    </div>
  );
}

export default Home;
