import { PortfolioConfig, ContactInfo, ProfileInfo } from '@/types/portfolio';

class ConfigParser {
  private config: PortfolioConfig;

  constructor(config: PortfolioConfig) {
    this.config = config;
  }

  // Generate system prompt for AI chatbot
  generateSystemPrompt(): string {
    const { personal, education, experience, skills, projects, personality, internship } = this.config;

    // Calculate age if birthdate is provided
    const age = personal.birthdate
      ? this.calculateAge(personal.birthdate)
      : personal.age;

    const { social } = this.config;

    return `
You are ${personal.name}, a ${personal.title}. Someone is chatting with your portfolio. Answer as yourself — casual, friendly, and direct. Keep answers short (1–3 sentences) unless more detail is genuinely needed. Never list everything you know; highlight what's most relevant. You can ask a follow-up question if it helps.

You have full access to the conversation history. Don't repeat info you've already shared — if asked a follow-up, answer only the new part. If something isn't available (e.g. phone), say so in one sentence without padding.

Never mention tools, function calls, or any technical implementation details. You have no tools — you simply know things about yourself.

When mentioning links, emails, or URLs always format them as markdown: [label](url). Never write bare URLs.

## Your Info
- Age: ${age}, based in ${personal.location}
- Email: [${personal.email}](mailto:${personal.email})
- LinkedIn: [linkedin.com/in/alvinadefuin](${social.linkedin})
- GitHub: [github.com/alvinadefuin](${social.github})${social.website ? `\n- Website: [${social.website}](${social.website})` : ''}
- Studying: ${education.current.degree} at ${education.current.institution}, CGPA ${education.current.cgpa}, graduating ${education.current.graduationDate}
- Skills: ${skills.programming.join(', ')} | ML/AI: ${skills.ml_ai.join(', ')} | Web: ${skills.web_development.join(', ')} | DBs: ${skills.databases.join(', ')} | DevOps: ${skills.devops_cloud.join(', ')}
- Experience: ${experience.map(exp => `${exp.position} at ${exp.company} (${exp.duration})`).join('; ')}
- Featured projects: ${projects.filter(p => p.featured).map(p => p.title).join(', ')}
- Availability: ${internship.availability}
- Personality: ${personality.traits.join(', ')}
`;
  }

  // Generate contact information
  generateContactInfo(): ContactInfo {
    const { personal, social } = this.config;

    return {
      name: personal.name,
      email: personal.email,
      handle: personal.handle,
      socials: [
        { name: 'LinkedIn', url: social.linkedin },
        { name: 'GitHub', url: social.github },
        { name: 'Website', url: social.website },
      ].filter(social => social.url && social.url !== '')
    };
  }

  // Calculate age from birthdate
  private calculateAge(birthdate: string): number {
    const birth = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  }

  // Generate profile information for presentation
  generateProfileInfo(): ProfileInfo {
    const { personal } = this.config;

    // Use calculated age if birthdate is provided, otherwise use configured age
    const age = personal.birthdate
      ? this.calculateAge(personal.birthdate)
      : personal.age;

    return {
      name: personal.name,
      age: `${age} years old`,
      location: personal.location,
      description: personal.bio,
      src: personal.avatar,
      fallbackSrc: personal.fallbackAvatar
    };
  }

  // Generate skills data with categories
  generateSkillsData() {
    const { skills } = this.config;
    
    return [
      {
        category: 'Programming Languages',
        skills: skills.programming,
        color: 'bg-blue-50 text-blue-600 border border-blue-200'
      },
      {
        category: 'ML/AI Technologies',
        skills: skills.ml_ai,
        color: 'bg-purple-50 text-purple-600 border border-purple-200'
      },
      {
        category: 'Web Development',
        skills: skills.web_development,
        color: 'bg-green-50 text-green-600 border border-green-200'
      },
      {
        category: 'Databases',
        skills: skills.databases,
        color: 'bg-orange-50 text-orange-600 border border-orange-200'
      },
      {
        category: 'DevOps & Cloud',
        skills: skills.devops_cloud,
        color: 'bg-emerald-50 text-emerald-600 border border-emerald-200'
      },
      {
        category: 'IoT & Hardware',
        skills: skills.iot_hardware,
        color: 'bg-indigo-50 text-indigo-600 border border-indigo-200'
      },
      {
        category: 'Soft Skills',
        skills: skills.soft_skills,
        color: 'bg-amber-50 text-amber-600 border border-amber-200'
      }
    ].filter(category => category.skills.length > 0);
  }

  // Generate project data for carousel
  generateProjectData() {
    return this.config.projects.map(project => ({
      category: project.category,
      title: project.title,
      src: project.images[0]?.src || '/placeholder.jpg',
      content: project // Pass the entire project object
    }));
  }

  // Generate preset replies based on questions
  generatePresetReplies() {
    const { personal } = this.config;
    
    const replies: Record<string, { reply: string; tool: string }> = {};
    
    // Only generate presets for main category questions
    replies["Who are you?"] = {
      reply: personal.bio,
      tool: "getPresentation"
    };
    
    replies["What are your skills?"] = {
      reply: `My technical expertise spans multiple domains...`,
      tool: "getSkills"
    };
    
    replies["What projects are you most proud of?"] = {
      reply: `Here are some of my key projects...`,
      tool: "getProjects"
    };
    
    replies["Can I see your resume?"] = {
      reply: `Here's my resume with all the details...`,
      tool: "getResume"
    };
    
    replies["How can I reach you?"] = {
      reply: `Here's how you can reach me...`,
      tool: "getContact"
    };
    
    replies["Am I available for opportunities?"] = {
      reply: `Here are my current opportunities and availability...`,
      tool: "getInternship"
    };
    
    return replies;
  }

  // Generate resume details
  generateResumeDetails() {
    return this.config.resume;
  }

  // Generate internship information
  generateInternshipInfo() {
    const { internship, personal, social } = this.config;
    
    if (!internship.seeking) {
      return "I'm not currently seeking internship opportunities.";
    }
    
    return `Here's what I'm looking for 👇

- 📅 **Duration**: ${internship.duration} starting **${internship.startDate}**
- 🌍 **Location**: ${internship.preferredLocation}
- 🧑‍💻 **Focus**: ${internship.focusAreas.join(', ')}
- 🛠️ **Working Style**: ${internship.workStyle}
- 🎯 **Goals**: ${internship.goals}

📬 **Contact me** via:
- Email: ${personal.email}
- LinkedIn: ${social.linkedin}
- GitHub: ${social.github}

${internship.availability} ✌️`;
  }

  // Get all configuration data
  getConfig(): PortfolioConfig {
    return this.config;
  }
}

export default ConfigParser;
