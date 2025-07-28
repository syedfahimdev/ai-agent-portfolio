# GitHub Repository Setup Guide

## Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in to your account
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in the details**:
   - Repository name: `ai-agent-portfolio` (or your preferred name)
   - Description: `AI Agent Developer Portfolio with OpenAI Chatbot`
   - Make it **Public** (recommended for portfolio)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. **Click "Create repository"**

## Step 2: Connect Your Local Repository

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/ai-agent-portfolio.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Set Up GitHub Secrets (for AI Chatbot)

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Click "Secrets and variables"** → **"Actions"**
4. **Click "New repository secret"**
5. **Add these secrets**:
   - Name: `VITE_OPENAI_API_KEY`
   - Value: Your OpenAI API key (starts with `sk-`)
   - Name: `VITE_ENABLE_OPENAI`
   - Value: `true`

## Step 4: Enable GitHub Pages

1. **Go to "Settings"** in your repository
2. **Click "Pages"** in the left sidebar
3. **Under "Source"**, select **"GitHub Actions"**
4. **Save the changes**

## Step 5: Test Your Deployment

1. **Make a small change** to your code
2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Test deployment"
   git push
   ```
3. **Check the Actions tab** to see the deployment progress
4. **Your site will be available** at: `https://YOUR_USERNAME.github.io/ai-agent-portfolio`

## Repository Structure

Your repository now contains:
- ✅ **AI Chatbot** with OpenAI integration
- ✅ **Environment variables** setup
- ✅ **GitHub Actions** workflow for deployment
- ✅ **Complete portfolio** with your information
- ✅ **Deployment documentation**

## Next Steps

1. **Customize your portfolio** further if needed
2. **Add your OpenAI API key** to GitHub secrets
3. **Test the chatbot** on the deployed site
4. **Share your portfolio** with potential employers!

## Troubleshooting

If you encounter issues:
1. **Check GitHub Actions** logs for build errors
2. **Verify environment variables** are set correctly
3. **Test locally** with `npm run dev` first
4. **Check the deployment guide** in `DEPLOYMENT.md` 