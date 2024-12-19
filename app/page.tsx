import EventHeroHome from "./components/EventHeroHome";
import MainHero from "./components/MainHero";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div className="container mx-auto">
      <MainHero />

      <main className="">
        {" "}
        <EventHeroHome />
      </main>

      <Stats />
      <Testimonial />
    </div>
  );
}
