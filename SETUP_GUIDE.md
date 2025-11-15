# AI Portfolio Chatbot - Setup Guide

Welcome to your AI-powered portfolio chatbot! This guide will walk you through all the steps needed to get your portfolio up and running.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Customization](#customization)
5. [API Setup (Optional)](#api-setup-optional)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager (comes with Node.js)
- A code editor (VS Code recommended)
- Git (optional, for version control)

---

## Installation

1. **Navigate to your project directory:**
   ```bash
   cd /path/to/alvinadefuin
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   - Visit `http://localhost:3000`
   - You should see your portfolio chatbot running!

---

## Configuration

### 1. Update Your Personal Information

Edit the file: **`src/portfolio-config.json`**

```json
{
  "personalInfo": {
    "name": "Your Full Name",
    "title": "Your Job Title",
    "tagline": "Your tagline or motto",
    "email": "your.email@example.com",
    "phone": "Your Phone Number",
    "location": "Your City, Country",
    "website": "https://your-website.com",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "avatar": "/avatar.jpg"
  }
}
```

### 2. Update Your Skills

In the same `portfolio-config.json` file:

```json
{
  "about": {
    "bio": "Write a brief professional bio about yourself...",
    "skills": {
      "frontend": ["React", "JavaScript", "HTML", "CSS"],
      "backend": ["Python", "Node.js", "Flask"],
      "tools": ["Git", "Docker", "VS Code"],
      "other": ["API Integration", "PostgreSQL"]
    },
    "softSkills": ["Team Player", "Problem Solving", "Adaptability"]
  }
}
```

### 3. Add Your Experience

```json
{
  "experience": [
    {
      "title": "Your Job Title",
      "company": "Company Name",
      "period": "Jan 2020 - Present",
      "location": "City, Country or Remote",
      "description": "Brief description of your role",
      "responsibilities": [
        "Key responsibility 1",
        "Key responsibility 2",
        "Key responsibility 3"
      ]
    }
  ]
}
```

### 4. Add Your Projects

```json
{
  "projects": [
    {
      "name": "Project Name",
      "description": "Project description",
      "role": "Your role in the project",
      "technologies": ["Tech1", "Tech2", "Tech3"],
      "achievements": [
        "Achievement 1",
        "Achievement 2"
      ],
      "link": "https://project-url.com",
      "featured": true
    }
  ]
}
```

### 5. Add Your Education

```json
{
  "education": [
    {
      "degree": "Bachelor of Science in Computer Science",
      "school": "University Name",
      "year": "2019 - 2023",
      "location": "City, Country"
    }
  ]
}
```

---

## Customization

### Adding Your Profile Picture

1. **Add your avatar image:**
   - Place your profile picture in the `public` folder
   - Name it `avatar.jpg` (or update the path in config)
   - Supported formats: JPG, PNG, WebP
   - Recommended size: 500x500px (square)

2. **Update the avatar path in `portfolio-config.json`:**
   ```json
   "avatar": "/avatar.jpg"
   ```

### Customizing the Chatbot

Edit the chatbot configuration in `portfolio-config.json`:

```json
{
  "chatbot": {
    "name": "Your Name's AI Assistant",
    "personality": "Professional, friendly, knowledgeable",
    "tone": "Conversational and helpful",
    "welcomeMessage": "Custom welcome message here!",
    "availabilityStatus": "Available for Opportunities",
    "presetQuestions": [
      "What are your main technical skills?",
      "Tell me about your experience",
      "What projects have you worked on?",
      "How can I contact you?",
      "What's your educational background?"
    ]
  }
}
```

---

## API Setup (Optional)

The chatbot works out-of-the-box with **fallback responses** based on your config. To enable **AI-powered responses** using Google Gemini:

### 1. Get Your Google Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Get API Key" or "Create API Key"
4. Copy your API key

### 2. Create Environment File

1. **Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Open `.env` and add your API key:**
   ```env
   REACT_APP_GEMINI_API_KEY=your_actual_api_key_here
   ```

3. **Restart your development server:**
   ```bash
   # Stop the server (Ctrl+C)
   npm start
   ```

### 3. Testing AI Responses

- Click the "✨ Get AI Response" button when viewing responses
- The chatbot will use Google Gemini for more dynamic, conversational answers
- **Note:** Free tier has quota limits. Fallback responses will be used if quota is exceeded.

---

## Deployment

### Option 1: Netlify (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Setup portfolio chatbot"
   git push origin main
   ```

2. **Deploy to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `build`
   - Add environment variables (if using AI):
     - Key: `REACT_APP_GEMINI_API_KEY`
     - Value: Your API key
   - Click "Deploy site"

### Option 2: Vercel

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Add environment variables:**
   - Go to your Vercel dashboard
   - Select your project → Settings → Environment Variables
   - Add `REACT_APP_GEMINI_API_KEY` with your API key

### Option 3: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to `package.json`:**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

---

## Troubleshooting

### Issue: "Module not found" errors

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Avatar image not showing

**Solutions:**
1. Make sure the image is in the `public` folder
2. Check the path in `portfolio-config.json` starts with `/`
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Changes not reflecting

**Solutions:**
1. Stop the dev server (Ctrl+C)
2. Clear cache: `rm -rf .cache`
3. Restart: `npm start`
4. Hard refresh browser (Ctrl+Shift+R)

### Issue: AI responses not working

**Solutions:**
1. Check `.env` file exists and has correct API key
2. Restart dev server after adding `.env`
3. Check API quota at [Google AI Studio](https://makersuite.google.com/)
4. Fallback responses will work if AI fails

### Issue: Build fails

**Solutions:**
```bash
# Update dependencies
npm update

# Check for errors
npm run build

# Check Node version (should be v14+)
node --version
```

---

## Customization Tips

### Colors and Styling

The portfolio uses Tailwind CSS. To customize colors:

1. **Edit `tailwind.config.js`** (if it exists) or
2. **Modify colors directly in `ChatInterface.jsx`:**
   - Search for color classes like `bg-blue-500`
   - Replace with your preferred colors

### Animations

All animations use Framer Motion. To adjust:

1. **Open `src/components/ChatInterface.jsx`**
2. **Find motion components:**
   ```jsx
   <motion.div
     whileHover={{ scale: 1.05 }}
     transition={{ duration: 0.3 }}
   >
   ```
3. **Adjust values** to speed up/slow down animations

---

## Quick Checklist

Before deploying, make sure you've:

- [ ] Updated `portfolio-config.json` with your information
- [ ] Added your profile picture (optional)
- [ ] Tested the chatbot locally
- [ ] Set up Google Gemini API key (optional)
- [ ] Updated contact information
- [ ] Tested all quick questions
- [ ] Checked responsive design on mobile
- [ ] Updated GitHub/LinkedIn links

---

## Need Help?

- Check existing GitHub issues
- Review React documentation: https://react.dev
- Check Framer Motion docs: https://www.framer.com/motion/
- Google Gemini API docs: https://ai.google.dev/docs

---

## License

This project is open source and available under the MIT License.

---

**Congratulations!** 🎉 Your AI portfolio chatbot is now ready to impress visitors!
