const skills = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Java"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub"],
  },
  {
    title: "AI Tools",
    items: ["ChatGPT", "Gemini"],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen px-8 py-16 bg-[#FFF9ED]">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Skills
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((group) => (
          <div
            key={group.title}
            className="bg-white rounded-2xl p-6 shadow-md
                       hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-bold mb-4">
              {group.title}
            </h2>

            <ul className="space-y-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="text-sm font-medium opacity-80"
                >
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
