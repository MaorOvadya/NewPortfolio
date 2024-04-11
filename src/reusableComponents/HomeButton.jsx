import { BsFillArrowUpCircleFill } from "react-icons/bs";

import { Link } from "react-scroll";

export default function HomeButton() {
  return (
    <div className="md:hidden z-50 bg-white text-[#222222] cursor-pointer opacity-[0.6] fixed bottom-[50px] right-[30px] text-5xl rounded-[100%] hover:opacity-[1] transition-all duration-400 ease-in-out">
      <Link to="home" spy={true} offset={-100} smooth={true} duration={300}>
        <BsFillArrowUpCircleFill className="" />
      </Link>
    </div>
  );
}
