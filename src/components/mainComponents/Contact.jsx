import Form from "./Form";
import ContactInformation from "./ContactInformation";
import Title from "../../reusableComponents/Title";

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col">
      <Title title="contact" number="03." />
      <section
        className="flex flex-col lg:flex-row w-screen
       items-center border-b-2 border-[#222222] bg-[#C60F52] "
      >
        <ContactInformation />
        <Form />
      </section>
    </div>
  );
}
