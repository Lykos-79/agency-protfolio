import Curly from "../assets/curly.png";
import chartImg from "../assets/chart.png";
import icon1 from "../assets/design.png";
import icon2 from "../assets/ideation.png";
import icon3 from "../assets/branding.png";
import icon4 from "../assets/support.png";
import icon5 from "../assets/strategy.png";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: icon1,
      title: "Graphics Design",
      description: "Sed perspiciatis unde omnis natus error voluptatem",
    },
    {
      icon: icon2,
      title: "Ideation & Evaluation",
      description: "Sed perspiciatis unde omnis natus error voluptatem",
    },
    {
      icon: icon3,
      title: "Brand Identity",
      description: "Sed perspiciatis unde omnis natus error voluptatem",
    },
    {
      icon: icon4,
      title: "Custome Service",
      description: "Sed perspiciatis unde omnis natus error voluptatem",
    },
    {
      icon: icon5,
      title: "Web Strategy",
      description: "Sed perspiciatis unde omnis natus error voluptatem",
    },
  ];
  return (
    <>
      <div
        id="services"
        className="relative w-full min-h-[200px] md:min-h-[300px] flex items-center justify-center bg-[#0B0F2B] text-white overflow-hidden px-4"
      >
        <h1
          className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[120px] font-bold absolute whitespace-nowrap"
          style={{
            WebkitTextStroke: "2px rgba(255, 255, 255, 0.15)",
            color: "transparent",
          }}
        >
          SERVICES
        </h1>
        <div className="mt-10 relative z-10 text-center">
          <img
            src={Curly}
            alt="Curly"
            className="mx-auto w-6 sm:w-7 md:w-8 lg:w-10  mt-10"
          />
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            Great Features To Do Your Buisness <br />
            Growth & Development
          </p>
        </div>
      </div>
      <div className="w-full bg-[#0B0F2B] py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
        {/* Left: Chart Image */}
        <div className="w-full md:w-1/2 flex justify-center relative z-10">
          <img
            src={chartImg}
            alt="Chart"
            className="w-[200px] sm:w-[300px] md:w-[400px]"
          />
        </div>

        {/* Right: Services List */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 relative z-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1C1F3B] text-white rounded-xl flex items-center justify-between px-6 py-4 gap-4 shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-10 h-10"
                />
                <div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </div>
              </div>
              <ArrowRight className="text-white" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
