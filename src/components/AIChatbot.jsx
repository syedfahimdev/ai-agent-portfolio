import { useState, useRef, useEffect } from "react";
import { Send, Bot, X, MessageCircle } from "lucide-react";

// Predefined responses for common questions (fallbacks)
const chatbotResponses = {
  // About Syed
  "who are you": "I'm Syed Fahim, an AI Agent Developer & Automation Engineer with over 6 years of experience. I specialize in building AI agents and automation solutions.",
  "what do you do": "I'm an AI Agent Developer & Automation Engineer. I build intelligent systems using CrewAI, LangChain, and other AI platforms to automate business processes.",
  "what is your background": "I have over 6 years of experience starting in DevOps and customer engineering, then evolving into AI agent development. I've worked at companies like Everi Holdings, Thermo Fisher, and Persona.",
  
  // Skills
  "what are your skills": "My skills include AI Agent Development (CrewAI, LangChain, AutoGen), Automation Platforms (n8n, Make.com), LLM Integration (OpenAI, Claude, Mistral), Programming (Python, FastAPI), and DevOps (Docker, Kubernetes, AWS, Azure).",
  "what technologies do you know": "I work with CrewAI, LangChain, OpenAI GPT-4, Claude, n8n, Make.com, Python, FastAPI, Docker, Kubernetes, AWS, Azure, Terraform, and many other AI and automation technologies.",
  "do you know python": "Yes, Python is my primary programming language. I use it for AI agent logic, FastAPI development, automation scripts, and building AI solutions.",
  
  // Experience
  "where do you work": "I currently work as a Customer Engineer Advocate at Everi Holdings Inc (remote position since Dec 2021). Previously, I was a DevOps Engineer at Thermo Fisher and System Administrator at Persona.",
  "what is your current job": "I'm a Customer Engineer Advocate at Everi Holdings Inc, where I deliver technical support, manage system patches, and implement client-specific workflow solutions.",
  "tell me about your experience": "I have over 6 years of experience: Customer Engineer Advocate at Everi Holdings (2021-present), DevOps Engineer at Thermo Fisher (2019-2021), System Administrator at Persona (2016-2019), and Field Service Engineer at Nautilus Hyosung (2015-2016).",
  
  // Projects
  "what projects have you built": "I've built several AI projects: 1) Autonomous Multi-Agent Task Bot using CrewAI, 2) AI-Driven Customer Service Workflow with n8n, 3) Voice-Controlled AI Assistant, and 4) AI-Powered Weekly Report Generator.",
  "tell me about your ai projects": "My AI projects include: Multi-Agent Task Bot (CrewAI + OpenAI), Customer Service Workflow (n8n + GPT-4), Voice Assistant (Offline AI + Coqui), and Weekly Report Generator (LangChain + Notion API).",
  
  // Education
  "what is your education": "I'm currently pursuing a Bachelor of Computer Science at Lehman College, CUNY. I also have an Associate of Science in Computer Engineering Technology from Leading University, Bangladesh (2015).",
  "where did you go to school": "I'm studying at Lehman College, CUNY for my Bachelor's in Computer Science. I previously earned an Associate's degree from Leading University, Bangladesh.",
  
  // Contact
  "how can I contact you": "You can reach me at syedfahimdev@gmail.com, call me at (646) 698-2164, or connect on LinkedIn at linkedin.com/in/syedfahimdev. I'm based in New Haven, CT.",
  "what is your email": "My email is syedfahimdev@gmail.com",
  "what is your phone number": "My phone number is (646) 698-2164",
  "where are you located": "I'm located in New Haven, CT 06512",
  
  // AI/DevOps specific
  "what is crewai": "CrewAI is a framework for orchestrating role-playing autonomous AI agents. I use it to build multi-agent systems where different agents handle specific tasks like research, planning, and execution.",
  "what is n8n": "n8n is a workflow automation platform. I use it to build event-driven workflows that connect different apps and APIs, often integrating AI for intelligent automation.",
  "what is langchain": "LangChain is a framework for developing applications with LLMs. I use it for building AI agents with memory, tool use, and structured output generation.",
  
  // Default responses
  "hello": "Hello! I'm Syed Fahim's AI assistant. I can answer questions about his resume, work experience, skills, and projects. What would you like to know?",
  "hi": "Hi there! I'm here to help you learn about Syed Fahim's background and experience. Feel free to ask me anything about his resume or work!",
  "help": "I can help you learn about Syed Fahim's: work experience, skills, projects, education, contact information, and AI/automation expertise. Just ask me anything!",
};

// Syed's resume data for context
const syedContext = `
Syed Fahim is an AI Agent Developer & Automation Engineer with over 6 years of experience.

Current Role: Customer Engineer Advocate at Everi Holdings Inc (Dec 2021 - Present)
- Delivers Tier-1/2 technical support and escalations
- Manages system patches and security updates
- Implements client-specific workflow solutions

Previous Experience:
- DevOps Engineer at Thermo Fisher (Feb 2019 - Dec 2021)
- System Administrator at Persona (Aug 2016 - Feb 2019)
- Field Service Engineer at Nautilus Hyosung (Jun 2015 - Aug 2016)

Skills: AI Agent Development (CrewAI, LangChain, AutoGen), Automation Platforms (n8n, Make.com), LLM Integration (OpenAI, Claude, Mistral), Programming (Python, FastAPI), DevOps (Docker, Kubernetes, AWS, Azure)

Projects:
1. Autonomous Multi-Agent Task Bot (CrewAI + OpenAI + LangChain)
2. AI-Driven Customer Service Workflow (n8n + Make.com + OpenAI)
3. Voice-Controlled AI Assistant (Offline AI + Coqui + Python)
4. AI-Powered Weekly Report Generator (LangChain + GPT-4 + Notion API)

Education: Bachelor of Computer Science at Lehman College, CUNY (in progress), Associate of Science in Computer Engineering Technology from Leading University, Bangladesh (2015)

Contact: syedfahimdev@gmail.com, (646) 698-2164, New Haven, CT, LinkedIn: linkedin.com/in/syedfahimdev
`;

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Syed Fahim's AI assistant. I can answer questions about his resume, work experience, skills, and projects. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [useOpenAI, setUseOpenAI] = useState(false);
  const [hasEnvironmentKey, setHasEnvironmentKey] = useState(false);
  const messagesEndRef = useRef(null);

  // Check for environment variable on component mount
  useEffect(() => {
    const envApiKey = import.meta.env.VITE_OPENAI_API_KEY;
    const envEnableOpenAI = import.meta.env.VITE_ENABLE_OPENAI === 'true';
    
    if (envApiKey && envApiKey !== 'your_openai_api_key_here') {
      setHasEnvironmentKey(true);
      setApiKey(envApiKey);
      if (envEnableOpenAI) {
        setUseOpenAI(true);
      }
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(chatbotResponses)) {
      if (lowerMessage.includes(key.toLowerCase())) {
        return response;
      }
    }
    
    // Check for partial matches
    const words = lowerMessage.split(" ");
    for (const word of words) {
      if (word.length > 3) { // Only check words longer than 3 characters
        for (const [key, response] of Object.entries(chatbotResponses)) {
          if (key.toLowerCase().includes(word)) {
            return response;
          }
        }
      }
    }
    
    // Default response
    return "I'm not sure about that specific question. You can ask me about Syed's work experience, skills, projects, education, or contact information. Try asking something like 'What are your skills?' or 'Tell me about your experience.'";
  };

  const callOpenAI = async (userMessage) => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are an AI assistant for Syed Fahim's portfolio. You help answer questions about his resume, work experience, skills, and projects. Always be helpful, professional, and accurate. Here is Syed's information: ${syedContext}`
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          max_tokens: 300,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('OpenAI API request failed');
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI API error:', error);
      return null;
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    let botResponse = "";

    // Try OpenAI API first if enabled and API key is provided
    if (useOpenAI && apiKey) {
      const openAIResponse = await callOpenAI(inputValue);
      if (openAIResponse) {
        botResponse = openAIResponse;
      } else {
        // Fallback to predefined responses if OpenAI fails
        botResponse = findBestResponse(inputValue);
      }
    } else {
      // Use predefined responses
      botResponse = findBestResponse(inputValue);
    }

    // Simulate typing delay
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 group"
        aria-label="Open AI Chatbot"
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          <Bot className="h-3 w-3" />
        </div>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          <div className="bg-background border border-border rounded-lg shadow-xl w-full max-w-md h-96 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Syed's AI Assistant</h3>
                  <p className="text-xs text-muted-foreground">
                    {useOpenAI ? "Powered by OpenAI" : "Predefined responses"}
                    {hasEnvironmentKey && " (Auto-configured)"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-secondary rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* API Key Input (only show if OpenAI is enabled and no env key) */}
            {useOpenAI && !hasEnvironmentKey && (
              <div className="p-3 border-b border-border bg-secondary/20">
                <div className="flex items-center gap-2">
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter OpenAI API Key"
                    className="flex-1 px-2 py-1 text-xs border border-input bg-background rounded focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button
                    onClick={() => setUseOpenAI(!useOpenAI)}
                    className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded hover:bg-secondary/80"
                  >
                    {useOpenAI ? "Disable" : "Enable"} AI
                  </button>
                </div>
              </div>
            )}

            {/* Environment Key Status */}
            {hasEnvironmentKey && (
              <div className="p-2 border-b border-border bg-green-500/10">
                <p className="text-xs text-green-600 text-center">
                  ✅ OpenAI API configured via environment variables
                </p>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Syed's experience..."
                  className="flex-1 px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              
              {/* Toggle OpenAI (only show if no env key) */}
              {!hasEnvironmentKey && (
                <div className="mt-2 flex justify-center">
                  <button
                    onClick={() => setUseOpenAI(!useOpenAI)}
                    className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    {useOpenAI ? "Switch to Predefined" : "Enable OpenAI"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}; 