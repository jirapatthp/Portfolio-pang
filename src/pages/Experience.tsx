type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Junior Software Developer (Bootcamp)",
    company: "Generation Thailand",
    period: "Oct 2025 – Jan 2026",
    description: [
      "Developed full-stack web applications using MERN Stack",
      "Worked in agile team environment with Git and GitHub",
      "Built e-commerce features such as product listing and shopping cart",
    ],
  },
  {
    role: "Operations & Digital Commerce",
    company: "Maytiplaspack Co., Ltd.",
    period: "2022 – 2024",
    description: [
      "Managed online sales operations and digital commerce platforms",
      "Coordinated between sales, warehouse, and production teams",
      "Translated business requirements into system and workflow improvements",
    ],
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen px-8 py-16 bg-[#FFF9ED]">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Work Experience
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md
                       hover:shadow-lg transition duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              <div>
                <h2 className="text-xl font-bold">
                  {exp.role}
                </h2>
                <p className="text-sm opacity-70">
                  {exp.company}
                </p>
              </div>
              <span className="text-sm font-medium text-amber-600">
                {exp.period}
              </span>
            </div>

            <ul className="list-disc pl-5 space-y-2 text-sm opacity-80">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
