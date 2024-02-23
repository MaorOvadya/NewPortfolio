import HomeText from "../homeComponents/HomeText";
import TpAnimation from "../homeComponents/TpAnimation";
export default function Home() {
  return (
    <div id="home" className="md:pt-10">
      <section className="flex flex-wrap flex-col bg-[#C60F52]">
        <HomeText />
        <TpAnimation />
      </section>
    </div>
  );
}
