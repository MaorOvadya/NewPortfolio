import { useEffect, useState } from "react";
import FormButton from "../../reusableComponents/FormButton";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import SuccessNotification from "../../reusableComponents/SuccessNotification";

export default function Form() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messageBox, setMessageBox] = useState("");

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageBoxError, setMessageBoxError] = useState("");

  useEffect(() => {
    console.log(fullNameError, emailError, subjectError, messageBoxError);
  }, [fullNameError, emailError, subjectError, messageBoxError]);

  const handleInputChange = (field) => {
    switch (field) {
      case "fullName":
        setFullNameError("");
        break;
      case "email":
        setEmailError("");
        break;
      case "subject":
        setSubjectError("");
        break;
      case "messageBox":
        setMessageBoxError("");
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error messages
    setFullNameError("");
    setEmailError("");
    setSubjectError("");
    setMessageBoxError("");

    // Validation logic with regex
    const nameRegex = /^[a-zA-Z\s]{5,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const subjectRegex = /^[a-zA-Z\s]{4,}$/;
    const messageBoxRegex = /^.{20,}$/;

    // check if the condition validation ture
    let hasError = false;

    if (!nameRegex.test(fullName)) {
      setFullNameError(
        "Full name is required and must be at least 5 characters"
      );
      hasError = true;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    }
    if (!subjectRegex.test(subject)) {
      setSubjectError("Subject is required and must be at least 4 characters");
      hasError = true;
    }
    if (!messageBoxRegex.test(messageBox)) {
      setMessageBoxError(
        "Message is required and must be at least 20 characters"
      );
      hasError = true;
    }

    // If no errors, send email
    if (!hasError) {
      emailjs
        .sendForm("gmail", "template_gmail", e.target, "FkrJpZXFzcsGrkdeE")
        .then(
          (result) => {
            console.log(result.text);
            // Clear form fields after successful submission
            setFullName("");
            setEmail("");
            setSubject("");
            setMessageBox("");
          },
          (error) => {
            console.log(error);
          }
        );
      toast.success("Message sent successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="capitalize bg-white text-[#222222] w-screen">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="text-sm flex flex-col w-full rounded-md px-10 py-10"
      >
        <div className="text-center pb-10 text-2xl flex flex-col items-center">
          <p className="text-2xl text-cetner pb-8">Get in touch</p>
          <p className="text-xs text-left  self-start">
            <span className="text-red-500">*</span>requerid field
          </p>
        </div>

        <section className="flex flex-col items-center pb-5 ">
          <div className="flex flex-col pb-5 text-sm">
            <label htmlFor="fullName">
              <span className="text-xs text-red-500">*</span>full name:
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onFocus={() => handleInputChange("fullName")}
              className="rounded-[5px] w-[20rem] sm:w-[30rem] lg:w-[40rem] py-1 border-[0.5px] border-[#222222] bg-inherit px-1 font-light"
            />
            <p className="text-xs pt-[3px] text-red-500 font-light">
              {fullNameError}
            </p>
          </div>
          <div className="flex flex-col text-sm">
            <label htmlFor="email">
              <span className="text-xs text-red-500">*</span>email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="false"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => handleInputChange("email")}
              className="rounded-[5px] w-[20rem] sm:w-[30rem] lg:w-[40rem] py-1 border-[0.5px] border-[#222222] bg-inherit px-1 font-light"
            />
            <p className="text-xs pt-[3px] text-red-500 font-light">
              {emailError}
            </p>
          </div>
        </section>

        <section className="flex flex-col text-center items-center text-start">
          <div className="flex flex-col pb-5 text-sm">
            <label htmlFor="subject">
              <span className="text-xs text-red-500">*</span>subject:
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              onFocus={() => handleInputChange("subject")}
              className="rounded-[5px] w-[20rem] sm:w-[30rem] lg:w-[40rem] py-1 border-[0.5px] border-[#222222] bg-inherit px-1 font-light"
            />
            <p className="text-xs pt-[3px] text-red-500 font-light">
              {subjectError}
            </p>
          </div>
          <div className="flex flex-col  pb-10 text-sm">
            <label htmlFor="message">
              <span className="text-xs text-red-500">*</span>message:
            </label>
            <textarea
              name="message"
              id="message"
              cols="50"
              rows="8"
              value={messageBox}
              onChange={(e) => setMessageBox(e.target.value)}
              onFocus={() => handleInputChange("messageBox")}
              className=" w-[20rem] sm:w-[30rem] lg:w-[40rem] rounded-[5px] border-[0.5px] border-[#222222] bg-inherit px-1 font-light"
            ></textarea>
            <p className="text-xs text-red-500 pt-[3px] font-light">
              {messageBoxError}
            </p>
          </div>
        </section>
        <FormButton />
      </form>
    </div>
  );
}
