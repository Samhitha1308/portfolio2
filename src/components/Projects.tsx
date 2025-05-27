import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  technologies,
  githubLink,
}) => {
  const content = (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="h-56 overflow-hidden flex justify-center items-center bg-indigo-50">
        <img
          src={image}
          alt={title}
          className="w-72 h-56 object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-600 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  // If a GitHub link exists, make the whole card clickable
  return githubLink ? (
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {content}
    </a>
  ) : (
    content
  );
};

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "Music Streaming API",
      description:
        "A full-stack music streaming platform with user, admin, and artist interfaces. Features include user authentication, song management, and AWS S3 integration for music storage.",
      image: "/music.jpg",
      technologies: ["Spring Boot", "AWS S3", "SQL", "REST API"],
    },
    {
      title: "Hotel Booking WhatsApp Integration",
      description:
        "A conversational hotel booking system integrating WhatsApp using Amazon Lex and Twilio, enabling natural language interactions for room reservations and inquiries.",
      image: "/cloud.jpg",
      technologies: ["Amazon Lex", "Twilio", "WhatsApp API", "AWS"],
      githubLink:
        "https://github.com/2100031096/CLOUD-AND-SERVERLESS-COMPUTING-PROJECT.git",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills
            and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
