import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // AI Agent Development
  { name: "CrewAI", level: 95, category: "ai_agents" },
  { name: "LangChain", level: 90, category: "ai_agents" },
  { name: "AutoGen", level: 85, category: "ai_agents" },
  { name: "OpenAgents", level: 80, category: "ai_agents" },
  { name: "Multi-Agent Orchestration", level: 90, category: "ai_agents" },
  { name: "Prompt Engineering", level: 95, category: "ai_agents" },

  // Automation Platforms
  { name: "n8n", level: 90, category: "automation" },
  { name: "Make.com", level: 85, category: "automation" },
  { name: "Workflow Automation", level: 95, category: "automation" },
  { name: "Event-Driven Systems", level: 90, category: "automation" },
  { name: "API Integration", level: 95, category: "automation" },

  // LLM Ecosystem
  { name: "OpenAI GPT-4", level: 90, category: "llm" },
  { name: "Anthropic Claude", level: 85, category: "llm" },
  { name: "Mistral", level: 80, category: "llm" },
  { name: "Hugging Face", level: 75, category: "llm" },
  { name: "Vector Stores (FAISS, ChromaDB)", level: 80, category: "llm" },

  // Programming & DevOps
  { name: "Python", level: 95, category: "programming" },
  { name: "FastAPI", level: 85, category: "programming" },
  { name: "Terraform", level: 85, category: "programming" },
  { name: "Docker", level: 90, category: "programming" },
  { name: "Kubernetes", level: 80, category: "programming" },
  { name: "GitHub Actions", level: 85, category: "programming" },
  { name: "AWS", level: 90, category: "programming" },
  { name: "Azure", level: 85, category: "programming" },
  { name: "Jenkins", level: 85, category: "programming" },
  { name: "Customer Support", level: 90, category: "programming" },
];

const categories = ["all", "ai_agents", "automation", "llm", "programming"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category.replace('_', ' ')}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
