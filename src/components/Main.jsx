import About from "./mainComponents/About";
import Home from "./mainComponents/Home";
import Projects from "./mainComponents/Projects";
import Contact from "./mainComponents/Contact";
import HomeButton from "../reusableComponents/HomeButton";

export default function Main() {
  return (
    <div className="z-10">
      <HomeButton />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
