import Title from "../../reusableComponents/Title";

import { FaGithub } from "react-icons/fa";
import { BsBoxArrowDownLeft } from "react-icons/bs";

import Timage from "../../assets/projects-images/sitePicT.webp";
import Limage from "../../assets/projects-images/sitePicL.png";

export default function Projects() {
  return (
    <div className="projects">
      <Title title="my work" />

      <section className="flex flex-col">
        {projects.map((project) => {
          return (
            <div key={project.id} className="flex flex-col lg:flex-row ">
              <div className="flex items-stretch w-full">{project.img}</div>
              <section className=" text-[#222222] flex flex-col justify-center items-center tracking-wide w-full">
                <div className="text-xl md:text-3xl text-center pb-10 pt-20 flex">
                  {project.title}
                  <button className=" text-white mx-10 flex items-center gap-5 text-lg md:text-2xl">
                    <a
                      className="bg-[#C60F52] p-2 rounded-md"
                      target="_blank"
                      href={project.gitRipo}
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                    <a
                      className="bg-[#C60F52] p-2 rounded-md"
                      target="_blank"
                      href={project.webSite}
                      rel="noreferrer"
                    >
                      <BsBoxArrowDownLeft />
                    </a>
                  </button>
                </div>
                <article className="mx-5 md:mx-0 md:w-[500px] p-5 rounded-md bg-[#C60F52] text-white leading-relaxed text-sm">
                  {project.article}
                </article>
                <div className="text-center md:text-left md:w-[500px] my-10 leading-relaxed text-sm">
                  <div className="text-xl underline underline-offset-2">
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
{
  /* <div className="projects">
<Title title="my work" number="02." />

<section className="flex flex-col">
  {projects.map((project) => {
    return (
      <div key={project.id}>
        {project.image}
        {project.project}
      </div>
    );
  })}
</section>
</div> */
}

const projects = [
  {
    id: 2,
    title: "Teddies Vs Monster",
    img: <img src={Timage} alt="" />,
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
    img: <img src={Limage} alt="" />,
    article: `The Airline Website is a static, responsive website that exclusively
    features the structural elements and CSS for its design.`,
    developmentTools: `Html,Sass`,
    gitRipo: "https://github.com/MaorOvadya/landingPage",
    webSite: "https://main--lifeairline.netlify.app/",
  },
];
