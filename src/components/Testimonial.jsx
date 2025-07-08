import { Twitter } from "lucide-react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar1.png";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Working with DigiX was a pleasure. Their web design team created a stunning website that perfectly captured our brand’s essence. The feedback from our customers has been overwhelmingly positive.",
      name: "Mark Roberts",
      role: "Founder of GreenEarth Eco Store",
      avatar: avatar1,
    },
    {
      text: "The mobile app DigiX developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned us rave reviews from our users.",
      name: "Lisa Williams",
      role: "Head of Product at HealthTech Innovations",
      avatar: avatar2,
    },
    {
      text: "DigiX transformed our outdated website into a modern, responsive platform. Their attention to detail and ability to understand our needs made the entire process smooth and stress-free.",
      name: "Michael Johnson",
      role: "Marketing Manager at GlobalTech",
      avatar: avatar3,
    },
  ];

  return (
    <div
      id="about"
      className="w-full bg-[#0B0F2B] py-20 px-4 md:px-16 text-white"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          <span className="text-white/80">Our</span>{" "}
          <span className="text-white">Testimonials</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Don’t just take our word for it; hear what our satisfied clients have
          to say about their experience. We take pride in building lasting
          relationships and delivering exceptional results.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#1C1F3B] p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <Twitter className="text-white mb-4" />
            <p className="text-gray-200 text-sm mb-6">{item.text}</p>
            <div className="flex items-center gap-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-sm font-semibold">{item.name}</h4>
                <p className="text-xs text-gray-400">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
