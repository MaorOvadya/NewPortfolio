import image from "../../assets/aboutMeImage.jpeg";

export default function aboutMe() {
  return (
    <section className="flex-col md:flex justify-center md:flex-row md:py-10">
      <div className="self-center text-left p-5 lg:px-20">
        {aboutMeText.split("\n").map((a, index) => (
          <p
            className="text-balance leading-relaxed text-xs md:text-ms lg:text-base"
            key={index}
          >
            {a}
          </p>
        ))}
      </div>
      <div className="items-center w-screen flex justify-center px-5 md:px-10 lg:px-20 ">
        <img
          className=" rounded w-[300px] pb-5 md:w-[800px] lg:w-[800px]"
          src={image}
          width={800}
          alt="My Image"
        />
      </div>
    </section>
  );
}

const aboutMeText = `
    Hello, my name is Maor Ovadya.\n
    I am from Vancouver,Canada.\n
    I’m passionate about programming languages and creating front-and back-end applications, and I am always seeking new challenges in tech.\n
    The main technologies I use are GitHub, VisualStudio, HTML, CSS, React, JavaScript, and MySQL.\n
    I’m a curious and creative person.\n
    I am always interested in picking up new skills in areas like frameworks (Angular, Vuejs), programming languages (TypeScript, Java, Python, C#, C++, php), developing environments (nodeJs,NextJs), and technologies (Sass, Tailwind, Bootstrap ,Express.js, GSAP, jQuery, MongoDB).
    I am a great team player and believe in the group, the process and the goals but I am also confident and am equally as comfortable working individually.
    Working with a team means there will be varying opinions and ideas.\n
    Even if you think your idea is best, you should listen to all ideas before pushing yours.\n Search for compromises, and remain respectful if your work is criticized.
    I am not afraid of mistakes, I take responsibility for my mistakes and look for solutions.\n I always try to learn from my errors.
    `;
