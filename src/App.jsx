import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Services from "./components/Services";
import Contact from "./components/Contact";
import TestimonialsSection from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="relative w-full min-h-screen bg-no-repeat bg-top bg-cover bg-[url('/Section1.png')]">
        <div className="absolute inset-0 z-0" />
        <div className="relative z-10">
          <Navbar />
          <Home />
        </div>
      </div>
      <Services />
      <Project />
      <TestimonialsSection />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
