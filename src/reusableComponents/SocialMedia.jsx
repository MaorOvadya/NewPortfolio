import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
export default function SocialMedia() {
  return (
    <div>
      <section className="flex justify-center gap-10 text-3xl pt-5">
        <a
          href="https://www.facebook.com/maor.ovadya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/maorovadya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/MaorOvadya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </section>
    </div>
  );
}
