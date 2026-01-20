import CombCounter from "../assets/projects/comb-counter.png";
import PetClothing from "../assets/projects/pet-clothing.png";
import RollingBirthday from "../assets/projects/rolling-birthday.png";

type Project = {
  title: string;
  image: string;
  description: string;
  tech: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Comb Counter",
    image: CombCounter,
    description: "Cute goods e-commerce platform (Personal Project)",
    tech: "MERN Stack",
    link: "https://github.com/jirapaththp/comb-counter",
  },
  {
    title: "Pet Clothing E-commerce",
    image: PetClothing,
    description: "Pet clothing e-commerce platform (Group Project)",
    tech: "MERN Stack",
    link: "https://github.com/jirapaththp/pet-clothing",
  },
  {
    title: "Rolling Birthday",
    image: RollingBirthday,
    description: "Interactive birthday web experience",
    tech: "React, JavaScript",
    link: "https://github.com/jirapaththp/rolling-birthday",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen px-8 py-16 bg-[#FFF9ED]">
      <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl shadow-md hover:shadow-xl 
                       hover:scale-[1.03] transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold mb-1">{project.title}</h2>
              <p className="text-sm opacity-70 mb-2">{project.description}</p>
              <p className="text-sm font-semibold text-amber-600">
                {project.tech}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
