import { Link } from "react-scroll";
import Resume from "../../assets/resume/Resume.pdf";

export default function Desktop() {
  return (
    <div className="hidden md:block bg-[#222222] text-lg text-white fixed w-full">
      {({ active }) => (active ? "active" : "")}
      <ul className="flex justify-center  md:gap-5 lg:gap-10 py-5 ">
        <Link
          className="px-8 py-2  cursor-pointer"
          to="home"
          spy={true}
          smooth="true"
          duration={500}
        >
          Home
        </Link>
        <Link
          className="px-8 py-2  cursor-pointer"
          to="about"
          spy={true}
          smooth="true"
          duration={500}
        >
          About
        </Link>
        <Link
          className="px-8 py-2  cursor-pointer"
          to="projects"
          spy={true}
          smooth="true"
          duration={500}
        >
          My Work
        </Link>
        <Link
          className="px-8 py-2  cursor-pointer"
          to="contact"
          spy={true}
          smooth="true"
          duration={500}
        >
          Contact
        </Link>
        <a
          className="px-8 py-2 cursor-pointer bg-[#C60F52] rounded-md hover:bg-[#9A0C40] transition-all duration-700 ease-in-out"
          target="_blank"
          href={Resume + "#toolbar=0"}
          rel="noreferrer"
        >
          Resume
        </a>
      </ul>
    </div>
  );
}
