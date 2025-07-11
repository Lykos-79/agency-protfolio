export default function Footer() {
  return (
    <footer className="bg-[#0B0F2B] text-white py-16 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Social */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Tripod</h2>
          <p className="text-sm text-gray-400 mb-4">Information Technology</p>
          <h4 className="text-sm font-medium mb-2">Follow</h4>
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f hover:text-blue-500"></i>
            </a>
            <a
              href="https://x.com/Abhisekh_Kumar_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter hover:text-blue-400"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/abhisekh-kumar-7a3560280/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in hover:text-blue-600"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram hover:text-pink-500"></i>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-medium mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#services" className="hover:text-white">
                Product Design
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Business Consulting
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Customer Service
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Brand Identity
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                SEO Optimization
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-medium mb-4">Contact</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a href="mailto:support@gmail.com" className="hover:text-white">
                kumarabhisekh0111@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+0012345688" className="hover:text-white">
                +91 94851 10241
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-medium mb-4">Get in touch with Us</h4>
          <p className="text-sm text-gray-300 mb-4">
            Need Answers? Need Help? <br /> Just share your email with us
          </p>
          <form
            action="https://formsubmit.co/kumarabhisekh0111@gmail.com"
            method="POST"
            className="flex flex-col gap-2"
          >
            {/* Hide bot protection message */}
            <input type="hidden" name="_captcha" value="false" />

            <div className="flex items-center border-b border-gray-400 py-1">
              <i className="far fa-envelope mr-2 text-sm text-gray-400" />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="bg-transparent w-full outline-none text-sm placeholder-gray-400 text-white"
              />
            </div>
            <button
              type="submit"
              className="text-sm text-white font-medium mt-2 hover:underline"
            >
              Send →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 mt-12 pt-6 text-sm flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>&copy; 2023 Tripod. All rights reserved</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#privacy" className="hover:text-white">
            Setting & Privacy
          </a>
          <a href="#faqs" className="hover:text-white">
            FAQs
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
