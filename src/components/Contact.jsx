import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);
    //   emailjs
    //     .send(
    //       "service_uob2p0j",
    //       "template_e339qcp",
    //       {
    //         from_name: form.name,
    //         to_name: "Ahmed Shafek",
    //         from_email: form.email,
    //         to_email: "engahmedshafek1@gmail.com",
    //         message: form.message,
    //       },
    //       "q7o27W3T9wHqfUS5e"
    //     )
    //     .then(
    //       () => {
    //         setLoading(false);
    //         alert("Thank you. I will get back to you as soon as possible.");
    //         setForm({ name: "", email: "", message: "" });
    //       },
    //       (error) => {
    //         setLoading(false);
    //         console.log(error);
    //         alert("Something went wrong");
    //       }
    //     );
  };
  return (
    <div
      id="contact"
      className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden  bg-[#fcfcfc]  overflow-x-hidden"
    >
      <div className="w-[90%] sm:w-[80%] xl:flex-[0.75] bg-black-100 p-4  sm:p-8 rounded-2xl mx-auto">
        <p
          data-aos="zoom-in"
          className="text-[22px] font-semibold text-[#3e7e80]"
        >
          Get in touch
        </p>
        <h3
          data-aos="zoom-in"
          className="text-[50px] md:text-[63px] font-bold text-[#1a6669]"
        >
          Contact.
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            <span
              className="text-[#0b2c2d] mb-4  font-semibold"
              data-aos="zoom-in"
            >
              Your Name
            </span>
            <input
              data-aos="zoom-in"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="py-4 px-2 bg-tertiary placeholder:text-secondary text-black font-semibold outline-none  border-b-[2px] border-[#0b2c2d]"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span
              className="text-[#0b2c2d] font-semibold mb-4"
              data-aos="zoom-in"
            >
              Your Email
            </span>
            <input
              data-aos="zoom-in"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="py-4 px-2 text-black bg-tertiary placeholder:text-secondary  outline-none  font-semibold border-b-[2px] border-[#0b2c2d]"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span
              className="text-[#0b2c2d] font-semibold mb-4"
              data-aos="zoom-in"
            >
              Your Message
            </span>
            <textarea
              data-aos="zoom-in"
              rows={"7"}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="py-4 px-2 text-black bg-tertiary placeholder:text-secondary font-semibold  outline-none  border-b-[2px] border-[#0b2c2d]"
            />
          </label>
          <button
            data-aos="zoom-in"
            type="submit"
            className="py-3 px-8 bg-tertiary outline-none w-fit text-[#0b2c2d] hover:text-[#2c696b]  font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
