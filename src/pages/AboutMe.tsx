const AboutMe = () => {
  return (
    <section className="min-h-screen px-8 py-16 bg-[#FFF9ED]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">
          About Me
        </h1>

        {/* Intro */}
        <div className="bg-white rounded-2xl p-8 shadow-md mb-10">
          <p className="text-lg leading-relaxed opacity-90">
            I am a Junior Software Developer with a background in operations and
            digital commerce. My experience working closely with business teams
            has shaped the way I approach software development — focusing on
            solving real problems and building practical solutions.
          </p>

          <p className="text-lg leading-relaxed opacity-90 mt-4">
            I recently completed the Generation Thailand Software Developer
            Bootcamp, where I gained hands-on experience building full-stack web
            applications using modern technologies such as React, Node.js, and
            MongoDB.
          </p>
        </div>

        {/* Mindset */}
        <div className="bg-white rounded-2xl p-8 shadow-md mb-10">
          <h2 className="text-2xl font-bold mb-4">
            How I Think & Work
          </h2>

          <ul className="list-disc pl-5 space-y-3 text-base opacity-85">
            <li>
              I focus on understanding the problem before jumping into code.
            </li>
            <li>
              I enjoy breaking down complex requirements into small,
              manageable steps.
            </li>
            <li>
              I value clean code, clear communication, and continuous learning.
            </li>
          </ul>
        </div>

        {/* Strength */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            What I Bring to a Team
          </h2>

          <ul className="list-disc pl-5 space-y-3 text-base opacity-85">
            <li>
              Strong ability to translate business requirements into technical
              solutions.
            </li>
            <li>
              Experience collaborating in team environments using Git and
              GitHub.
            </li>
            <li>
              A growth mindset and eagerness to improve as a developer.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
