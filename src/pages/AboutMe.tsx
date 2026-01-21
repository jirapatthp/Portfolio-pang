const AboutMe = () => {
  return (
    <section
      className="relative min-h-screen px-8 py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/56/42/01/564201b4e34df7a461ab68430608067d.jpg')",
      }}
    >
      <h1 className="text-4xl font-bold text-center mb-16 font-rasal">
        About Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div
          className="bg-white rounded-2xl p-6 shadow-md
                     hover:shadow-lg hover:-translate-y-1
                     transition duration-300"
        >
          <h2 className="text-xl font-bold mb-2">👋 Hi, I’m Pang</h2>
          <p className="text-sm opacity-85 leading-relaxed">
            A Junior Software Developer who enjoys turning ideas, messy
            requirements, and business needs into simple and friendly web
            experiences.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white rounded-2xl p-6 shadow-md
                     hover:shadow-lg hover:-translate-y-1
                     transition duration-300"
        >
          <h2 className="text-xl font-bold mb-2">💼 Where I Come From</h2>
          <p className="text-sm opacity-85 leading-relaxed">
            I started my career in operations and digital commerce. Working
            close to real users taught me that good software should solve
            problems — not create new ones.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white rounded-2xl p-6 shadow-md
                     hover:shadow-lg hover:-translate-y-1
                     transition duration-300"
        >
          <h2 className="text-xl font-bold mb-2">🧠 How I Think</h2>
          <p className="text-sm opacity-85 leading-relaxed">
            Before writing code, I like to slow down, understand the problem,
            and break it into small, clear steps that actually make sense.
          </p>
        </div>

        {/* Card 4 */}
        <div
          className="bg-white rounded-2xl p-6 shadow-md
                     hover:shadow-lg hover:-translate-y-1
                     transition duration-300"
        >
          <h2 className="text-xl font-bold mb-2">✨ What I Care About</h2>
          <p className="text-sm opacity-85 leading-relaxed">
            Clean UI, readable code, and building things that people feel
            comfortable using — even if they don’t know anything about tech.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
