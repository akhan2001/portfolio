import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abdullah Khan",
  initials: "AK",
  url: "https://dillion.io",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "Driven by Innovation. Fueled by Passion.",
  summary:
    "I'm Abdullah Khan, an automotive enthusiast with a background in software engineering. My passion lies in creating innovative digital solutions and fostering community engagement within the automotive world.",
  avatarUrl: "/abd.JPG",
  skills: [
    "Python",
    "Java",
    "JavaScript",
    "PowerShell",
    "Bash",
    "Azure",
    "AWS",
    "Kubernetes",
    "Docker",
    "Git",
    "Terraform",
    "Jenkins",
    "Microsoft SQL Server",
    "MongoDB",
    "Agile/Scrum",
    "Jira",
  ],  
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/akhan2001",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdullah-khan-2001/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      // Instagram: {
      //   name: "Instagram",
      //   url: "https://www.instagram.com/abdxllahkhan",
      //   icon: Icons.instagram,
      //   navbar: false,
      // },
      email: {
        name: "Send Email",
        url: "mailto:m.abdullah.khan567@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Motorminds",
      href: "https://atomic.finance",
      badges: [],
      location: "",
      title: "Co-Founder & Tech Lead",
      logoUrl: "",
      start: "Oct 2024",
      end: "Present",
      description:
        "• Developing and deploying robust software tools that enable auto shops to manage workflows, including customer management, job scheduling, and parts inventory tracking, optimizing their daily operations. \n• Integrating AI by designing ETL pipelines, building custom LLM training workflows, and exploring Retrieval-Augmented Generation (RAG) methodologies to enhance AI-driven features, improve user experience, and automate processes like client support and service recommendations",
    },
    {
      company: "Auto Shop Agency",
      badges: [],
      href: "",
      location: "Remote",
      title: "Owner & Managing Director",
      logoUrl: "",
      start: "May 2024",
      end: "Present",
      description:
        "Leading Auto Shop Agency, a company dedicated to empowering auto shop owners and automotive enthusiasts through digital solutions. design, build, and deliver tailored applications and services while focusing on creating impactful online presences and a resourceful hub for the automotive community.",
    },
    {
      company: "Agency Arranged",
      href: "",
      badges: [],
      location: "",
      title: "Web Developer (Cloud)",
      logoUrl: "",
      start: "Jan 2023",
      end: "Apr 2024",
      description:
        "• Designed intuitive website wireframes using Figma, ensuring alignment with client visions and enhancing user experiences. • Developed responsive web applications using HTML/CSS, JavaScript, and React.js, optimizing for functionality and user experience. • Built and automated CI/CD pipelines with GitHub for seamless deployments and integration with cloud environments. • Managed hosting of websites on Azure, ensuring performance and maintaining reliability of the application."
    },
    {
      company: "Canadian Tire Bank",
      href: "",
      badges: [],
      location: "Remote",
      title: "Programmer Analyst",
      logoUrl: "",
      start: "Jan 2023",
      end: "Sep 2023",
      description:
        "Designed and supported payment processing applications using CT Bank’s technology standards, ensuring integration of Java code into PAYD systems. • Ensured seamless data migration and performance, utilized containerization and cloud tools for deployment. Developed Jenkins pipelines to automate code integration, testing, and deployment. Streamlined workflows, reducing deployment time and errors. • Enhanced query efficiency to reduce response times. Designed ETL pipelines to consolidate data, improve analytics, and ensure data accuracy by 25%."
    },
    {
      company: "Canadian Tire Corporation",
      href: "",
      badges: [],
      location: "Remote",
      title: "Security Analyst (DevOps)",
      logoUrl: "",
      start: "Jan 2022",
      end: "Dec 2022",
      description:
        "• Developed an automated script that streamlined the remediation of over 1 million obsolete files and data by integrating REST API, significantly reducing manual intervention. • Automated and modernized 10+ PowerShell scripts, resulting in a 80% increase in operational efficiency. • Collaborated with teams to deploy and maintain technologies like cloud monitoring tools, boosting system reliability. • Performed all procedures necessary to ensure the safety of information systems assets and to protect systems from intentional or inadvertent access or destruction.",
    },
  ],
  education: [
    {
      school: "University of Guelph",
      href: "",
      degree: "Bachelors of Computing; Honours in Software Engineering",
      logoUrl: "",
      start: "2019",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
