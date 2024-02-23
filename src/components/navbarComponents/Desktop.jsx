import { Link } from "react-scroll";
import Resume from "../../assets/resume/Resume.pdf";

export default function Desktop() {
  return (
    <div className="hidden md:block bg-[#222222] text-lg text-white fixed w-full">
      {({ active }) => (active ? "active" : "")}
      <ul className="flex justify-center  md:gap-5 lg:gap-10 py-5 ">
        <li className="px-8 py-2 cursor-pointer">
          <Link className="" to="home" spy={true} smooth="true" duration={500}>
            Home
          </Link>
        </li>
        <li className="px-8 py-2 cursor-pointer">
          <Link to="about" spy={true} smooth="true" duration={500}>
            About
          </Link>
        </li>
        <li className="px-8 py-2 cursor-pointer">
          <Link to="projects" spy={true} smooth="true" duration={500}>
            My Work
          </Link>
        </li>
        <li className="px-8 py-2 cursor-pointer">
          <Link to="contact" spy={true} smooth="true" duration={500}>
            Contact
          </Link>
        </li>
        <li className="px-8 py-2 cursor-pointer bg-[#C60F52] rounded-md hover:bg-[#9A0C40] transition-all duration-700 ease-in-out">
          <a target="_blank" href={Resume + "#toolbar=0"} rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
