type SkillItem = {
  name: string;
  icon: string;
};

type SkillGroup = {
  title: string;
  items: SkillItem[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "✨" },
      { name: "HTML / CSS", icon: "🎀" },
      { name: "Tailwind CSS", icon: "🎨" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "REST API", icon: "🔌" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
    ],
  },
];

const tools = [
  { name: "Git & GitHub", icon: "🐙" },
  { name: "ChatGPT", icon: "🤖" },
  { name: "Gemini", icon: "✨" },
];

const Skills = () => {
  return (
    <section
      className="relative min-h-screen px-8 py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/bc/64/d7/bc64d7c6fa261cead559ccc69d13018d.jpg')",
      }}
    >
      <h1 className="text-4xl font-bold text-center mb-14 font-rasal">
        Skills
      </h1>

      {/* Technical Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="
              bg-white rounded-2xl p-6 shadow-md
              transition-all duration-300 ease-out
              hover:-translate-y-2 hover:shadow-xl
            "
          >
            <h2 className="text-2xl font-bold mb-4 font-rasal">
              {group.title}
            </h2>

            <ul className="space-y-3">
              {group.items.map((skill) => (
                <li
                  key={skill.name}
                  className="
                    group flex items-center gap-3 text-sm
                    cursor-default
                  "
                >
                  <span
                    className="
                      text-lg
                      transition-transform duration-300
                      group-hover:scale-125
                    "
                  >
                    {skill.icon}
                  </span>
                  <span className="opacity-85">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Tools & AI */}
      <div className="max-w-3xl mx-auto mb-16">
        <div
          className="
            bg-white rounded-2xl p-6 shadow-md
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg
          "
        >
          <h2 className="text-2xl font-bold mb-4 font-rasal text-center">
            Tools & AI
          </h2>

          <ul className="flex flex-wrap justify-center gap-6">
            {tools.map((tool) => (
              <li
                key={tool.name}
                className="group flex items-center gap-2 text-sm"
              >
                <span
                  className="
                    text-lg
                    transition-transform duration-300
                    group-hover:scale-125
                  "
                >
                  {tool.icon}
                </span>
                <span className="opacity-85">{tool.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="max-w-3xl mx-auto">
        <div
          className="
            bg-white rounded-2xl p-6 shadow-md
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg
          "
        >
          <h2 className="text-2xl font-bold mb-4 font-rasal text-center">
            How I Work
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-sm opacity-85">
            <li>
              Translate business requirements into practical technical solutions
            </li>
            <li>
              Communicate clearly with both technical and non-technical
              teammates
            </li>
            <li>Break down complex problems into small, manageable steps</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
