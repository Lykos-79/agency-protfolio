import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to complete a web development project?",
      answer:
        "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
    {
      question:
        "Can you create a responsive website design that looks great on all devices?",
      answer:
        "Absolutely. We use modern frameworks and responsive design techniques to ensure your site looks perfect across devices.",
    },
    {
      question: "Can you handle large-scale mobile app development projects?",
      answer:
        "Yes, we specialize in scalable mobile app solutions and have experience with both native and cross-platform apps.",
    },
    {
      question:
        "What digital marketing strategies do you employ to drive website traffic?",
      answer:
        "Our strategies include SEO, content marketing, paid ads, and social media engagement tailored to your audience.",
    },
    {
      question:
        "Do you offer maintenance services for websites and apps developed by other companies?",
      answer:
        "Yes, we provide maintenance and optimization services even for externally developed platforms.",
    },
    {
      question: "Can you integrate third-party APIs into our mobile app?",
      answer:
        "Absolutely. We have extensive experience with third-party API integrations including payment, maps, analytics, and more.",
    },
    {
      question:
        "How do you ensure the security of user data in your web applications?",
      answer:
        "We implement encryption, secure authentication, and follow industry best practices for security compliance.",
    },
    {
      question:
        "How do you ensure cross-platform compatibility for mobile apps?",
      answer:
        "We use frameworks like React Native and Flutter to ensure smooth performance on both iOS and Android.",
    },
  ];

  return (
    <div id="faqs" className="bg-[#0B0F2B] text-white py-20 px-4 md:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          <span className="text-white/80">Frequently</span>{" "}
          <span className="text-white">Asked Questions</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Got questions? We’ve got answers. Check out our frequently asked
          questions section to find valuable insights into our processes,
          pricing, and more.
        </p>
      </div>

      {/* Search Bar UI (non-functional) */}
      {/* <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="🔍 Search"
          className="bg-[#1C1F3B] text-white p-3 px-5 rounded-full w-full max-w-md outline-none"
        />
      </div> */}

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-white/10 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h4 className="text-base font-medium">{faq.question}</h4>
              {openIndex === index ? (
                <Minus className="w-5 h-5" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-3 text-sm text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
