# AI Agent Developer Portfolio

A modern, responsive portfolio website showcasing AI Agent Development and Automation Engineering expertise. Features an interactive AI chatbot and contact form integration.

## 🚀 Live Demo

**Portfolio**: [https://syedfahimdev.github.io/ai-agent-portfolio](https://syedfahimdev.github.io/ai-agent-portfolio)

## ✨ Features

- **AI Chatbot**: Interactive chatbot powered by OpenAI GPT-3.5-turbo
- **Responsive Design**: Beautiful, modern UI with Tailwind CSS
- **Contact Form**: Integrated with Formspree for email handling
- **Dark/Light Theme**: Toggle between themes
- **Professional Resume**: Downloadable HTML resume
- **GitHub Actions**: Automated deployment to GitHub Pages

## 🛠️ Tech Stack

- **Frontend**: React.js, Vite, Tailwind CSS
- **AI Integration**: OpenAI API (GPT-3.5-turbo)
- **Contact Form**: Formspree
- **Deployment**: GitHub Pages with GitHub Actions
- **Styling**: Custom CSS with Tailwind utilities

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- GitHub account
- OpenAI API key (for chatbot functionality)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/syedfahimdev/ai-agent-portfolio.git
cd ai-agent-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
# OpenAI API Configuration
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_ENABLE_OPENAI=true
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

## 🔧 Configuration

### Contact Form Setup

The contact form is configured to use Formspree. To set up your own:

1. **Go to [Formspree.io](https://formspree.io)** and create a free account
2. **Create a new form** and get your form ID
3. **Update the form ID** in `src/components/ContactSection.jsx`:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

### AI Chatbot Setup

1. **Get OpenAI API Key**:
   - Sign up at [OpenAI](https://openai.com)
   - Generate an API key
   - Add it to your `.env` file

2. **For Production Deployment**:
   - Add `VITE_OPENAI_API_KEY` to GitHub Secrets
   - Add `VITE_ENABLE_OPENAI=true` to GitHub Secrets

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Fork this repository** to your GitHub account

2. **Set up GitHub Secrets**:
   - Go to Settings → Secrets and variables → Actions
   - Add `VITE_OPENAI_API_KEY` with your OpenAI API key
   - Add `VITE_ENABLE_OPENAI` with value `true`

3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Select "GitHub Actions" as source

4. **Push your changes**:
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

5. **Your site will be live** at: `https://YOUR_USERNAME.github.io/ai-agent-portfolio`

### Vercel Deployment

1. **Connect to Vercel**:
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository

2. **Add Environment Variables**:
   - `VITE_OPENAI_API_KEY`: Your OpenAI API key
   - `VITE_ENABLE_OPENAI`: `true`

3. **Deploy**: Vercel will automatically deploy your site

### Netlify Deployment

1. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Import your GitHub repository

2. **Add Environment Variables**:
   - Go to Site settings → Environment variables
   - Add `VITE_OPENAI_API_KEY` and `VITE_ENABLE_OPENAI`

3. **Deploy**: Netlify will automatically deploy your site

## 📁 Project Structure

```
ai-agent-portfolio/
├── .github/workflows/     # GitHub Actions deployment
├── public/                # Static assets
│   └── resume.html       # Downloadable resume
├── src/
│   ├── components/       # React components
│   │   ├── AIChatbot.jsx    # AI chatbot component
│   │   ├── AboutSection.jsx # About section
│   │   ├── ContactSection.jsx # Contact form
│   │   ├── HeroSection.jsx   # Hero section
│   │   ├── Navbar.jsx        # Navigation
│   │   ├── ProjectsSection.jsx # Projects showcase
│   │   └── SkillsSection.jsx # Skills display
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── pages/            # Page components
├── .env.example          # Environment variables template
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information

Update your information in these files:
- `src/components/HeroSection.jsx` - Name and title
- `src/components/AboutSection.jsx` - About content
- `src/components/SkillsSection.jsx` - Skills and expertise
- `src/components/ProjectsSection.jsx` - Projects showcase
- `src/components/ContactSection.jsx` - Contact information

### Styling

- **Colors**: Update CSS variables in `src/index.css`
- **Theme**: Modify dark/light theme in `src/components/ThemeToggle.jsx`
- **Layout**: Adjust Tailwind classes in components

### AI Chatbot

- **Context**: Update `syedContext` in `src/components/AIChatbot.jsx`
- **Responses**: Modify `chatbotResponses` object
- **API**: Change OpenAI model or parameters

## 🔒 Security

- **API Keys**: Never commit API keys to version control
- **Environment Variables**: Use `.env` for local development
- **GitHub Secrets**: Use GitHub Secrets for production deployment
- **Formspree**: Secure form handling with spam protection

## 🐛 Troubleshooting

### Common Issues

1. **Contact Form Not Working**:
   - Check Formspree form ID in ContactSection.jsx
   - Verify form is active in Formspree dashboard

2. **AI Chatbot Not Responding**:
   - Verify OpenAI API key is set correctly
   - Check browser console for errors
   - Ensure `VITE_ENABLE_OPENAI=true`

3. **Build Failures**:
   - Check GitHub Actions logs
   - Verify environment variables are set
   - Ensure all dependencies are installed

4. **Styling Issues**:
   - Clear browser cache
   - Check Tailwind CSS compilation
   - Verify CSS imports

### Getting Help

- **GitHub Issues**: Create an issue in this repository
- **Documentation**: Check component comments for setup instructions
- **Community**: Reach out via the contact form

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Syed Fahim**
- **Email**: syedfahimdev@gmail.com
- **LinkedIn**: [linkedin.com/in/syedfahimdev](https://linkedin.com/in/syedfahimdev)
- **GitHub**: [github.com/syedfahimdev](https://github.com/syedfahimdev)

## 🙏 Acknowledgments

- **Original Template**: Beautiful React Tailwind Portfolio
- **Icons**: Lucide React
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages & GitHub Actions

---

⭐ **Star this repository if you find it helpful!** 