import SubTitle from "../../reusableComponents/SubTitle";
import {
  FaJava,
  FaHtml5,
  FaPython,
  FaBootstrap,
  FaFontAwesome,
  FaSass,
  FaGithub,
  FaNodeJs,
  FaTrello,
  FaFigma,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import {
  SiCplusplus,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudio,
  SiVite,
  SiExpress,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMysql } from "react-icons/di";

export default function Skills() {
  return (
    <div>
      <SubTitle title="skills" number="01.02." />
      <section className="flex flex-col items-center pb-10 text-white bg-[#222222]">
        <h2 className="p-10">Languages & Libraries</h2>
        <section className="flex flex-row flex-wrap justify-center">
          {languagesIcons.map((l, index) => (
            <div className="flex flex-col" key={index}>
              <p className="text-xl flex flex-col items-center px-3 p-[8px]">
                {l.icon}
              </p>
              <p className="text-lg flex flex-col items-center px-3">
                {l.text}
              </p>
            </div>
          ))}
          <div className="flex"></div>
        </section>
        <h2 className="p-10">Css & Animations</h2>
        <section className="flex flex-row flex-wrap justify-center">
          {cssAnimations.map((c, index) => (
            <div className="flex flex-col" key={index}>
              <p className="text-xl flex flex-col items-center px-3 p-[8px]">
                {c.icon}
              </p>
              <p className="text-lg flex flex-col items-center px-3 ">
                {c.text}
              </p>
            </div>
          ))}
        </section>
        <h2 className="p-10">Framework & Environment</h2>
        <section className="flex flex-row flex-wrap justify-center">
          {frameworkEnvironment.map((f, index) => (
            <div className="flex flex-col" key={index}>
              <p className="text-xl flex flex-col items-center px-3 p-[8px]">
                {f.icon}
              </p>
              <p className="text-lg flex flex-col items-center px-3">
                {f.text}
              </p>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}

const languagesIcons = [
  {
    icon: <FaHtml5 />,
    text: "Html",
  },
  {
    icon: <FaJava />,
    text: "Java",
  },
  {
    icon: <IoLogoJavascript />,
    text: "JavaScript",
  },
  {
    icon: <SiTypescript />,
    text: "Typescript",
  },
  {
    icon: <SiCplusplus />,
    text: "C++",
  },
  {
    icon: <FaPython />,
    text: "Python",
  },
  {
    icon: <DiMysql />,
    text: "Mysql",
  },
];

const cssAnimations = [
  {
    icon: <IoLogoCss3 />,
    text: "Css",
  },
  {
    icon: <FaSass />,
    text: "Sass",
  },
  {
    icon: <FaBootstrap />,
    text: "Bootstrap",
  },
  {
    icon: <FaFontAwesome />,
    text: "FontAwesome",
  },
  {
    icon: <SiTailwindcss />,
    text: "Tailwindcss",
  },
];

const frameworkEnvironment = [
  {
    icon: <FaTrello />,
    text: "Trello",
  },
  {
    icon: <FaFigma />,
    text: "Figma",
  },
  {
    icon: <SiVisualstudio />,
    text: "Visualstudio",
  },
  {
    icon: <FaGithub />,
    text: "Github",
  },
  {
    icon: <SiVite />,
    text: "Vite",
  },
  {
    icon: <FaNodeJs />,
    text: "NodeJs",
  },
  {
    icon: <TbBrandNextjs />,
    text: "Nextjs",
  },
  {
    icon: <SiExpress />,
    text: "Express",
  },
];
