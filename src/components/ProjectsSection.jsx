import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Autonomous Multi-Agent Task Bot",
    description: "Designed a modular multi-agent framework using CrewAI with agents assigned roles like Researcher, Planner, Executor, and Reporter to handle long-form task flows.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EAI Agent Project%3C/text%3E%3C/svg%3E",
    tags: ["CrewAI", "OpenAI", "LangChain", "FastAPI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AI-Driven Customer Service Workflow",
    description: "Built a support agent system that monitors incoming emails and helpdesk tickets, categorizes them, and drafts initial replies using GPT-4 with n8n automation.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EAI Agent Project%3C/text%3E%3C/svg%3E",
    tags: ["n8n", "Make.com", "OpenAI", "Airtable"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Voice-Controlled AI Assistant",
    description: "Created an offline voice agent that performs desktop tasks using natural language with local LLM integration and Coqui for speech-to-text.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EAI Agent Project%3C/text%3E%3C/svg%3E",
    tags: ["Offline AI", "Coqui", "Python", "PyAutoGUI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "AI-Powered Weekly Report Generator",
    description: "Developed an automated agent that pulls meeting transcripts and project notes from Notion and formats them into clean, shareable weekly reports.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EAI Agent Project%3C/text%3E%3C/svg%3E",
    tags: ["LangChain", "GPT-4", "Notion API", "n8n"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Portfolio <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my AI agent development and automation projects. Each project demonstrates 
          cutting-edge AI integration, workflow automation, and intelligent task execution capabilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/syedfahimdev"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
