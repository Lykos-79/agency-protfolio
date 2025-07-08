import Curly from "../assets/curly.png"; // the wavy underline image
import img1 from "../assets/project1.png"; // your actual project images
import img2 from "../assets/project2.png";
import img3 from "../assets/project3.png";

export default function Project() {
  const projects = [
    {
      title: "Tech Website Solution",
      category: "Marketing",
      image: img1,
      color: "bg-pink-600",
    },
    {
      title: "App Platform Integration",
      category: "Technology",
      image: img2,
      color: "bg-purple-600",
    },
    {
      title: "Software Tools Development",
      category: "Software",
      image: img3,
      color: "bg-blue-600",
    },
  ];

  return (
    <div
      id="projects"
      className="w-full bg-[#0B0F2B] py-16 px-4 md:px-16 text-white relative overflow-hidden"
    >
      {/* Faint Background Title */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[100px] md:text-[160px] font-bold opacity-5 tracking-wide whitespace-nowrap z-0">
        PROJECTS
      </h1>

      {/* Foreground Title */}
      <div className="relative top-25 z-10 text-center mb-10">
        <img src={Curly} alt="Curly" className="mx-auto w-6 md:w-8 mb-2" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Checkout our Recently <br /> Completed Projects
        </h2>
      </div>

      {/* Project Cards */}
      <div className="grid mt-50 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-4">
              <span
                className={`text-xs px-3 py-1 rounded-full ${project.color} font-medium`}
              >
                {project.category}
              </span>
              <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Dots */}
      <div className="flex justify-center items-center gap-2 mt-10 relative z-10">
        <div className="w-2 h-2 bg-white rounded-full" />
        <div className="w-2 h-2 bg-purple-500 rounded-full" />
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>
    </div>
  );
}
