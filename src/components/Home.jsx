import Curly from "../assets/curly.png";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        id="home"
        className="flex flex-col-reverse md:flex-row justify-center items-center px-4 md:px-10 pt-10 gap-8"
      >
        {/* Text Section */}
        <div className="text-center md:text-left">
          <p
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            We Provide <br /> Smart Business <br /> Solutions
          </p>
          <p
            className="text-base sm:text-lg md:text-xl text-white font-normal mt-4 max-w-md"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            Grow Your Business With Us — Best Business Solutions
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="Image_Forground.png"
            alt="Foreground image"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Brand Section */}
      <div
        id="clients"
        className="relative w-full min-h-[200px] md:min-h-[300px] flex items-center justify-center text-white overflow-hidden px-4 pt-15"
      >
        {/* Background Text */}
        <h1 className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-bold text-white opacity-5 absolute whitespace-nowrap">
          BRAND
        </h1>

        {/* Foreground Text */}
        <div className="relative z-10 text-center">
          <img
            src={Curly}
            alt="Curly"
            className="mx-auto w-6 sm:w-7 md:w-8 lg:w-10  mt-20"
          />
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            Our Partners and Clients
          </p>
        </div>
      </div>
      <hr className="w-1/2 mx-auto my-3 border-t-2 border-[#000dbf]" />

      {/* Second Image Centered Below */}
      <div className="flex justify-center items-center pt-4 pb-8">
        <img
          src="laga.jpg"
          alt="humniklegaddileke"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
        />
      </div>
    </>
  );
}
