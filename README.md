# AI-Powered Portfolio

> A modern, AI-powered portfolio built with Next.js 15, TypeScript, and Anthropic's Claude AI

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## 🌟 Features

- **AI-Powered Chatbot**: Interactive AI assistant powered by Anthropic's Claude that can answer questions about my experience, projects, and skills
- **Modern Tech Stack**: Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components
- **Responsive Design**: Fully responsive and optimized for all devices
- **Dark Mode**: Beautiful dark/light theme switching
- **Interactive Projects Showcase**: Apple-inspired cards carousel for project display
- **Contact Form**: Easy-to-use contact form with email integration
- **SEO Optimized**: Built-in SEO optimization with Next.js metadata API
- **Type-Safe**: Full TypeScript support for better developer experience

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible component library
- **Radix UI** - Unstyled, accessible components

### AI & Backend
- **Anthropic Claude (Sonnet 4)** - AI chatbot integration
- **AI SDK by Vercel** - Streamlined AI integration
- **Next.js API Routes** - Serverless API endpoints

### Tools & Libraries
- **Framer Motion** - Animations and transitions
- **React Hook Form** - Form management
- **Sonner** - Toast notifications
- **clsx** - Conditional classnames

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Anthropic API key (for AI chatbot feature)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/alvinadefuin/alvinadefuin.git
   cd alvinadefuin
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Fill in your environment variables:
   ```env
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Configure your portfolio**

   Edit `portfolio-config.json` to add your personal information, projects, experience, and skills.

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Configuration

The portfolio is fully configurable through `portfolio-config.json`. You can customize:

- Personal information (name, bio, avatar)
- Education and experience
- Skills and technologies
- Projects and showcases
- Contact information
- Social media links

For detailed configuration instructions, see [SETUP_GUIDE.md](SETUP_GUIDE.md)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy!

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- AWS
- Google Cloud
- DigitalOcean

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 📁 Project Structure

```
alvinadefuin/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── api/             # API routes
│   │   │   └── chat/        # AI chatbot endpoints
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── chat/           # Chatbot components
│   │   ├── projects/       # Project showcase
│   │   ├── ui/             # shadcn/ui components
│   │   └── ...             # Other components
│   ├── lib/                # Utility functions
│   ├── hooks/              # Custom React hooks
│   └── types/              # TypeScript types
├── public/                 # Static assets
│   ├── projects/          # Project images
│   └── ...
├── portfolio-config.json  # Portfolio configuration
├── next.config.ts         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/alvinadefuin/alvinadefuin/issues).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Alvin Adefuin**
- GitHub: [@alvinadefuin](https://github.com/alvinadefuin)
- LinkedIn: [Alvin Adefuin](https://linkedin.com/in/alvinadefuin)
- Website: [alvinadefuin.netlify.app](https://alvinadefuin.netlify.app)

## 🙏 Acknowledgments

- **Inspired by**: [Anuj Jain's Portfolio](https://github.com/anujjainbatu/portfolio) - Special thanks for the design inspiration and project structure
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Anthropic](https://www.anthropic.com/) for Claude AI
- [Vercel](https://vercel.com/) for the AI SDK and hosting platform
- [Radix UI](https://www.radix-ui.com/) for accessible components

## 📧 Contact

Feel free to reach out if you have any questions or want to collaborate!

- Email: adefuinalvin1@gmail.com
- Location: Santa Cruz, Laguna, Philippines

---

⭐️ If you like this portfolio template, please give it a star!
