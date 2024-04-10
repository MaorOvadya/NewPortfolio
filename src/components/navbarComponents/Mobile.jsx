import { Link } from "react-scroll";
import Resume from "../../assets/resume/Resume.pdf";
import { useState } from "react";

export default function Mobile() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-50 block md:hidden bg-[#222222] text-lg w-full h-20 text-white relative border-b-[0.5px]">
      <section
        onClick={handleClick}
        className="z-40 cursor-pointer absolute w-10 h-10 top-5 right-5 hover:bg-[#C60F52] hover:rounded-lg rounded-lg transition-all duration-700 ease-in-out"
      >
        <span
          className={`w-[30px] h-[2.5px] bg-white absolute left-[5px] top-3 ${
            isOpen
              ? "rotate-[50deg] top-[20px] transition-all duration-500 ease-in-out"
              : "rotate-0 transition-all duration-500 ease-in-out"
          } `}
        ></span>
        <span
          className={`w-[30px] h-[2.5px] bg-white absolute left-[5px] top-5 ${
            isOpen
              ? "hidden "
              : "block transition-all duration-1000 ease-in-out"
          } `}
        ></span>
        <span
          className={`w-[30px] h-[2.5px] bg-white absolute left-[5px] top-7 ${
            isOpen
              ? "rotate-[-50deg] top-[20px] transition-all duration-500 ease-in-out"
              : "rotate-0 transition-all duration-500 ease-in-out"
          } `}
        ></span>
      </section>
      <section
        className={`z-0 text-center w-full top-20 bg-[#222222] md:gap-5 lg:gap-10 transition-all duration-700 ease-in-out ${
          isOpen ? "absolute bottom-0 z-0" : "absolute top-[-1490px] z-0"
        }`}
      >
        {isOpen ? (
          <ul className=" z-0 absolute w-screen justify-center bg-[#222222] md:gap-5 lg:gap-10 transition-all duration-700 ease-in-out">
            <Link
              className=" py-3 flex justify-center px-[1rem] py-2 cursor-pointer transition-all duration-700 ease-in-out hover:text-[#222222] hover:bg-white"
              to="about"
              spy={true}
              smooth="true"
              duration={500}
              onClick={handleClick}
            >
              About
            </Link>
            <Link
              className=" py-3 flex justify-center px-[1rem] py-2 cursor-pointer transition-all duration-700 ease-in-out hover:text-[#222222] hover:bg-white"
              to="projects"
              spy={true}
              smooth="true"
              duration={500}
              onClick={handleClick}
            >
              My Work
            </Link>
            <Link
              className=" py-3 flex justify-center px-[1rem] py-2 cursor-pointer transition-all duration-700 ease-in-out hover:text-[#222222] hover:bg-white"
              to="contact"
              spy={true}
              smooth="true"
              duration={500}
              onClick={handleClick}
            >
              Contact
            </Link>
            <a
              className=" py-3 flex justify-center bg-[#C60F52] px-[1rem] py-2 cursor-pointer transition-all duration-700 ease-in-out hover:bg-[#9A0C40]"
              target="_blank"
              href={Resume + "#toolbar=0"}
              rel="noreferrer"
            >
              Resume
            </a>
          </ul>
        ) : (
          <div></div>
        )}
      </section>
    </div>
  );
}
