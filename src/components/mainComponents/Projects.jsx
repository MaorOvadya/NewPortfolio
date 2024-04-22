import Title from "../../reusableComponents/Title";

import { FaGithub } from "react-icons/fa";
import { BsBoxArrowDownLeft } from "react-icons/bs";

import Timage from "../../assets/projects-images/sitePicT.webp";
import Limage from "../../assets/projects-images/sitePicL.png";

export default function Projects() {
  return (
    <div className="projects">
      <Title title="my work" />

      <section className="flex flex-wrap justify-center">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="flex md:max-w-80 rounded-[18px] bg-[rgb(198,15,82)] flex-col mx-5 my-8 md:my-10 "
            >
              <div>{project.img}</div>
              <section className=" text-[#222222] flex flex-col justify-center items-center tracking-wide w-full">
                <div className="text-xl text-center pb-5 pt-5 flex-col">
                  {project.title}
                  <button className=" text-white m-auto pt-5 flex gap-5 text-md md:text-xl">
                    <a
                      className="bg-[#C60F52] p-2 rounded-md"
                      target="_blank"
                      href={project.gitRipo}
                      rel="noreferrer"
                      aria-label="Github reposetory button"
                    >
                      <FaGithub />
                    </a>
                    <a
                      className="bg-[#C60F52] p-2 rounded-md"
                      target="_blank"
                      href={project.webSite}
                      rel="noreferrer"
                      aria-label="Website link button"
                    >
                      <BsBoxArrowDownLeft />
                    </a>
                  </button>
                </div>
                <article className="md:mx-2 md:w-fit p-5 rounded-md bg-[#222222] text-white leading-relaxed text-sm">
                  {project.article}
                </article>
                <div className="text-center md:w-fit my-10 leading-relaxed text-sm text-white">
                  <div className="text-sm md:text-xl underline underline-offset-2">
                    Development tools:
                  </div>
                  <article>{project.developmentTools}</article>
                </div>
              </section>
            </div>
          );
        })}
      </section>
    </div>
  );
}

const projects = [
  {
    id: 2,
    title: "Teddies Vs Monster",
    img: (
      <img
        className="md:h-[210px] rounded-t-[16px]"
        src={Timage}
        alt="Teddies Vs Monster image"
      />
    ),
    article: `The E-Commerce Platform for the gaming board,Teddies Vs Monsters
    Board Game, is an engaging and fun board game where players take on
    the roles of teddy bears defending their realm against menacing
    monsters.`,
    developmentTools: `Trello,Figma,TypeScript,Tailwind Css,NextJs,
    Zuztand,Strapi,Stripe,Swiper`,
    gitRipo: "https://github.com/chicacode/teddies-vs-monsters-frontend",
    webSite: "https://teddies-vs-monsters-frontend.vercel.app/",
  },
  {
    id: 1,
    title: "Airline Website",
    img: (
      <img
        className="md:h-[210px] rounded-t-[16px]"
        src={Limage}
        alt="Airline Website image"
      />
    ),
    article: `Website is a static, responsive website that exclusively
    features the structural elements and CSS for its design.`,
    developmentTools: `Html,Sass`,
    gitRipo: "https://github.com/MaorOvadya/landingPage",
    webSite: "https://main--lifeairline.netlify.app/",
  },
];
