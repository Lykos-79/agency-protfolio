import Curly from "../assets/curly.png";
import img1 from "../assets/project1.png";
import img2 from "../assets/project2.png";
import img3 from "../assets/project3.png";

export default function Project() {
  const projects = [
    {
      title: "Hum nikle gaddi leke - Travel Agency Platform",
      category: "Full Stack",
      image: img1,
      color: "bg-blue-600",
      liveLink: "https://www.humniklegaddileke.com/",
      githubLink: "https://github.com/Lykos-79/travel-frontend",
      description:
        "Humniklegaddileke is a full-featured travel agency web application built with the MERN stack. It enables users to explore travel packages, submit trip inquiries, and allows admin users to manage packages via a secure dashboard with JWT-based authentication. Designed with a modern UI using React and Tailwind CSS, and powered by Express and MongoDB on the backend.",
    },
    {
      title: "Coming Soon",
      category: "Technology",
      image: img2,
      color: "bg-purple-600",
      liveLink: "/",
      githubLink: "/",
      description: "The project is coming soon",
    },
    {
      title: "Coming soon",
      category: "Software",
      image: img3,
      color: "bg-blue-600",
      liveLink: "/",
      githubLink: "/",
      description: "The project is coming soon",
    },
  ];

  return (
    <div
      id="projects"
      className="w-full bg-[#0B0F2B] py-16 px-4 md:px-16 text-white relative overflow-hidden"
    >
      {/* Faint Background Title */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[100px] md:text-[160px] font-bold opacity-5 tracking-wide whitespace-nowrap z-0 ">
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
          <div key={index} className="perspective group h-[300px]">
            <div className=" card w-full h-full">
              {/* Front Face */}
              <div className="bg-[#07091d] card-face card-front">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${project.color} font-medium`}
                  >
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Back Face */}
              <div className="card-face card-back">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="mt-3 flex gap-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black text-sm px-3 py-1 rounded-md hover:bg-gray-200 transition"
                  >
                    Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black text-sm px-3 py-1 rounded-md hover:bg-gray-200 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Dots
      <div className="flex justify-center items-center gap-2 mt-10 relative z-10">
        <div className="w-2 h-2 bg-white rounded-full" />
        <div className="w-2 h-2 bg-purple-500 rounded-full" />
        <div className="w-2 h-2 bg-white rounded-full" />
      </div> */}
    </div>
  );
}
