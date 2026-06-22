import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Developing end-to-end web applications using React, Spring Boot, MySQL, and MongoDB.",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description:
      "Solved 600+ coding problems with a strong focus on Data Structures and Algorithms.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Collaborated effectively during internships and project development to deliver quality solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Building impactful projects in Web Development, IoT, and Software Automation.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into
              <span className="font-serif italic font-normal text-white">
                {" "}
                real-world solutions.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Kaarthik S, a Java Full Stack Developer and Electronics &
                Communication Engineering student at Sri Eshwar College of Engineering.
                I am passionate about building scalable web applications and solving
                real-world problems through technology.
              </p>
              <p>
                My expertise includes Java, Spring Boot, React, MySQL, MongoDB, and
                modern web technologies. Through internships and hands-on projects,
                I have developed full-stack applications, IoT-based solutions, and
                intelligent software systems that address practical challenges.
              </p>
              <p>
                Beyond development, I actively practice Data Structures and Algorithms,
                having solved 600+ coding problems and achieved a LeetCode rating of
                1661. I continuously explore cloud technologies, software architecture,
                and emerging technologies to enhance my skills as a software engineer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I believe technology should solve meaningful problems. My goal is to
                 build scalable, reliable, and impactful software solutions while
                 continuously growing as a developer."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};