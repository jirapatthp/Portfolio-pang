import { useRef } from "react";

import CombCounter from "../assets/projects/comb-counter.png";
import PetClothing from "../assets/projects/pet-clothing.png";

import RollingBirthdayPoster from "../assets/projects/rolling-birthday.png";
import RollingBirthdayVideo from "../assets/projects/rolling-birthday.mp4";

type Project = {
  title: string;
  image: string; // fallback image
  video?: string; // optional video
  description: string;
  tech: string;
  tags: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Rolling Birthday",
    image: RollingBirthdayPoster,
    video: RollingBirthdayVideo,
    description: "A playful interactive birthday web experience",
    tech: "React, JavaScript",
    tags: ["🎉 Creative", "🎨 Frontend"],
    link: "https://rolling-birthday.vercel.app/",
  },
  {
    title: "Comb Counter",
    image: CombCounter,
    description: "A cute e-commerce experiment for lifestyle goods",
    tech: "MERN Stack",
    tags: ["✨ Featured", "🐢 Personal", "🍃 MongoDB"],
    link: "https://comb-counter.vercel.app/",
  },
  {
    title: "Pet Clothing E-commerce",
    image: PetClothing,
    description: "Team-built e-commerce platform with real workflow",
    tech: "MERN Stack",
    tags: ["🤝 Team Project", "🍃 MongoDB"],
    link: "https://github.com/jirapaththp/pet-clothing",
  },
];

const Projects = () => {
  return (
    <section
      className="relative min-h-screen px-8 py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/73/38/04/733804cae53588e6add14f92ffef4a33.jpg')",
      }}
    >
      <h1 className="text-4xl font-bold mb-14 text-center font-rasal">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project) => {
          const videoRef = useRef<HTMLVideoElement | null>(null);

          return (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group bg-white rounded-2xl shadow-md
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                overflow-hidden text-gray-700
              "
              onMouseEnter={() => {
                if (videoRef.current) {
                  videoRef.current.play();
                }
              }}
              onMouseLeave={() => {
                if (videoRef.current) {
                  videoRef.current.pause();
                  videoRef.current.currentTime = 0;
                }
              }}
            >
              {/* Media */}
              <div>
                {project.video ? (
                  <video
                    ref={videoRef}
                    src={project.video}
                    poster={project.image}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-xl font-bold mb-1">{project.title}</h2>

                <p className="text-sm opacity-70 mb-3 ">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        text-xs bg-pink-50 text-gray-700
                        px-3 py-1 rounded-full
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm font-semibold text-gray-600">
                  {project.tech}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      <p className="text-center text-sm opacity-70 mt-16">
        Still learning, still building — one project at a time ✨
      </p>
    </section>
  );
};

export default Projects;
