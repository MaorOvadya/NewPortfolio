import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SocialMedia from "../../reusableComponents/SocialMedia";

export default function ContactInformation() {
  return (
    <div className="flex flex-col text-white text-center text-2xl w-screen py-10 lg:p-0">
      <section className=" bg-[rgb(34,34,34)] rounded-xl p-3 md:p-5 m-auto">
        <p>Get In Touch With Me</p>
      </section>
      <section className="inline-flex flex-col items-center justify-center rounded-xl gap-2 p-5 m-auto">
        <a href="mailto:maorovadya@icloud.com">
          <MdEmail className="inline text-3xl" /> {""}
          Email Me
          <FaArrowRight className="inline text-xl mx-3" />
        </a>
        <p>Or</p>
        <p>Join Me In Social Media</p>
        <FaArrowDown className="text-2xl mt-3" />
      </section>
      <SocialMedia />
    </div>
  );
}
