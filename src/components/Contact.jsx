import Curly from "../assets/curly.png";
import ContactImg from "../assets/contact-illustration.png";

export default function ContactSection() {
  return (
    <div
      id="contact"
      className="w-full bg-[#0B0F2B] py-16 px-4 md:px-16 text-white flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* Left Illustration */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={ContactImg}
          alt="Contact Illustration"
          className="w-[300px] md:w-[400px]"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2">
        {/* Background text */}
        <h1 className="absolute text-[100px] font-bold opacity-5 z-0 -mt-20 hidden md:block">
          CALL
        </h1>

        <div className="relative z-10">
          <img src={Curly} alt="Curly" className="w-6 md:w-8 mb-2" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            Ready to Work Together <br /> In New Projects?
          </h2>

          {/* Form */}
          <form
            action="https://formsubmit.co/kumarabhisekh0111@gmail.com"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              required
              className="p-3 rounded-md bg-white text-black focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              required
              className="p-3 rounded-md bg-white text-black focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message*"
              rows="4"
              required
              className="p-3 rounded-md bg-white text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-md font-semibold text-white hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
