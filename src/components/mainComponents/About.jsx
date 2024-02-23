import AboutMe from "../aboutComponents/AboutMe";
import Skills from "../aboutComponents/Skills";
import Title from "../../reusableComponents/Title";
import AboutText from "../aboutComponents/AboutText";

export default function About() {
  return (
    <div id="about">
      <Title title={"About Me"} number={"01."} />
      <AboutMe />
      <Skills />
      <AboutText text={"Studying To Improve My Technology Knowledge"} />
    </div>
  );
}
