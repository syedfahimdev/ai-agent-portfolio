# Deployment Guide for AI Chatbot Portfolio

This guide explains how to deploy your portfolio with the AI chatbot to Vercel or GitHub Pages with proper environment variable configuration.

## Environment Variables Setup

### 1. Create Environment File (Local Development)

Create a `.env` file in your project root:

```bash
# Copy the example file
cp env.example .env

# Edit the .env file with your actual API key
VITE_OPENAI_API_KEY=sk-your-actual-openai-api-key-here
VITE_ENABLE_OPENAI=true
```

### 2. Vercel Deployment

#### Option A: Using Vercel Dashboard

1. **Deploy to Vercel**:
   ```bash
   npm run build
   # Upload the dist folder to Vercel
   ```

2. **Add Environment Variables**:
   - Go to your Vercel project dashboard
   - Navigate to Settings → Environment Variables
   - Add the following variables:
     - `VITE_OPENAI_API_KEY`: Your OpenAI API key
     - `VITE_ENABLE_OPENAI`: `true` (optional, defaults to false)

#### Option B: Using Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy with environment variables**:
   ```bash
   vercel --env VITE_OPENAI_API_KEY=sk-your-api-key-here
   ```

### 3. GitHub Pages Deployment

#### Option A: Using GitHub Actions

1. **Create GitHub Secret**:
   - Go to your GitHub repository
   - Navigate to Settings → Secrets and variables → Actions
   - Add a new secret: `VITE_OPENAI_API_KEY` with your API key

2. **Create GitHub Actions Workflow**:
   Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
      env:
        VITE_OPENAI_API_KEY: ${{ secrets.VITE_OPENAI_API_KEY }}
        VITE_ENABLE_OPENAI: true
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

#### Option B: Manual Deployment

1. **Build with environment variables**:
   ```bash
   VITE_OPENAI_API_KEY=sk-your-api-key-here npm run build
   ```

2. **Deploy the `dist` folder** to GitHub Pages

### 4. Netlify Deployment

1. **Add Environment Variables**:
   - Go to your Netlify dashboard
   - Navigate to Site settings → Environment variables
   - Add:
     - `VITE_OPENAI_API_KEY`: Your OpenAI API key
     - `VITE_ENABLE_OPENAI`: `true`

2. **Deploy**:
   ```bash
   npm run build
   # Upload dist folder to Netlify
   ```

## Security Best Practices

### 1. API Key Security
- ✅ **Never commit API keys** to your repository
- ✅ **Use environment variables** for all deployments
- ✅ **Rotate API keys** regularly
- ✅ **Set up usage limits** in OpenAI dashboard

### 2. Environment File Management
```bash
# .gitignore should include:
.env
.env.local
.env.production
```

### 3. Fallback Configuration
The chatbot automatically falls back to predefined responses if:
- No API key is provided
- API key is invalid
- API request fails
- Rate limits are exceeded

## Testing Your Deployment

### 1. Local Testing
```bash
# Test with environment variables
VITE_OPENAI_API_KEY=sk-your-key npm run dev

# Test without API key (fallback mode)
npm run dev
```

### 2. Production Testing
1. Deploy your site
2. Open the chatbot
3. Check if it shows "Auto-configured" status
4. Test with questions about your resume

## Troubleshooting

### Common Issues:

1. **"API key not found"**:
   - Check environment variable name (must start with `VITE_`)
   - Verify API key is set in deployment platform
   - Check for typos in the key

2. **"OpenAI API request failed"**:
   - Verify API key is valid
   - Check OpenAI account has credits
   - Verify network connectivity

3. **"Environment variables not loading"**:
   - Restart development server
   - Clear browser cache
   - Check deployment platform settings

### Debug Mode:
Add this to your component to debug environment variables:
```javascript
console.log('API Key available:', !!import.meta.env.VITE_OPENAI_API_KEY);
console.log('Enable OpenAI:', import.meta.env.VITE_ENABLE_OPENAI);
```

## Cost Management

### OpenAI API Costs:
- **GPT-3.5-turbo**: ~$0.002 per 1K tokens
- **Typical response**: 50-150 tokens
- **Estimated cost**: $0.0001-$0.0003 per response

### Recommendations:
1. **Set usage limits** in OpenAI dashboard
2. **Monitor usage** regularly
3. **Use fallback responses** for common questions
4. **Consider rate limiting** for production

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify environment variables are set correctly
3. Test API key directly with OpenAI
4. Check deployment platform logs 