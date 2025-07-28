import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              AI Agent Developer & Automation Engineer
            </h3>

            <p className="text-muted-foreground">
              Resourceful and forward-thinking engineer with over 6 years of experience in DevOps, 
              automation, and system orchestration—now specializing in AI agent creation and workflow 
              automation. Proven ability to design and implement multi-agent systems using platforms like 
              CrewAI, n8n, and Make.com, integrating with LLMs (GPT-4, Claude, Mistral) for intelligent task execution.
            </p>

            <p className="text-muted-foreground">
              Skilled in multi-shot and one-shot prompting, building context-aware agents that can 
              perform business processes autonomously—such as data scraping, email parsing, customer 
              response generation, and real-time decision-making. Strong foundation in Python for scripting, 
              API integration, and orchestrating workflows across cloud environments.
            </p>

            <p className="text-muted-foreground">
              My journey began in traditional DevOps and customer engineering, where I built CI/CD pipelines, 
              managed cloud infrastructure, and provided technical support. This foundation in system administration, 
              automation, and customer service has been invaluable in developing AI solutions that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://linkedin.com/in/syedfahimdev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Resume
              </a>

              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI Agent Development</h4>
                  <p className="text-muted-foreground">
                    End-to-end design of autonomous AI agents using CrewAI, LangChain, AutoGen, 
                    and OpenAgents with multi-agent orchestration and memory systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Workflow Automation</h4>
                  <p className="text-muted-foreground">
                    Building modular, event-driven workflows across apps & APIs using n8n, Make.com, 
                    and AI + automation combos for CRM enrichment, lead qualification, and support.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">DevOps Foundation</h4>
                  <p className="text-muted-foreground">
                    Extensive experience in CI/CD pipelines, cloud infrastructure (AWS, Azure, GCP), 
                    containerization with Docker/Kubernetes, and customer support engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
