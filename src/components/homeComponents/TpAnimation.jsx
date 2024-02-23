import { TypeAnimation } from "react-type-animation";

export default function TpAnimation() {
  return (
    <div>
      <section className="pb-20 px-10 md:px-20 pt-5 bg-white w-full">
        <TypeAnimation
          sequence={[
            "Hello there!!!",
            1500,
            "I'm a Front&Back-end developer",
            1500,
            "I'm Open to work",
            1500,
            "And....",
            500,
            "Looking for new opportunities",
            1500,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          deletionSpeed={60}
          style={{
            fontSize: "1.3rem",
            color: "rgb(34,34,34)",
            display: "block",
          }}
        />
      </section>
    </div>
  );
}
