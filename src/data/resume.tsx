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
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "m.abdullah.khan567@gmail.com",
    tel: "+1 905-699-2659",
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
      logoUrl: "/motorminds-pfp.PNG",
      start: "Oct 2024",
      end: "Present",
      description:
        "• Developing and deploying a SaaS Application to enable auto shops to manage workflows, including customer management, job scheduling, and parts inventory tracking, optimizing their daily operations. • Integrating AI by designing ETL pipelines, building custom LLM training workflows, and exploring Retrieval-Augmented Generation (RAG) methodologies to enhance AI-driven features, improve user experience, and automate processes like client support and service recommendations",
    },
    {
      company: "Auto Shop Agency",
      badges: [],
      href: "",
      location: "Remote",
      title: "Owner & Managing Director",
      logoUrl: "/Auto-Shop-Agency-PFP.png",
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
      logoUrl: "/agency_arranged_logo.png",
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
      logoUrl: "/ctfs.png",
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
      logoUrl: "/CanadianTireLogo.png",
      start: "Jan 2022",
      end: "Dec 2022",
      description:
        "• Developed an automated script that streamlined the remediation of over 1 million obsolete files and data by integrating REST API, significantly reducing manual intervention. • Automated and modernized 10+ PowerShell scripts, resulting in a 80% increase in operational efficiency. • Collaborated with teams to deploy and maintain technologies like cloud monitoring tools, boosting system reliability. • Performed all procedures necessary to ensure the safety of information systems assets and to protect systems from intentional or inadvertent access or destruction.",
    },
  ],
  education: [
    {
      school: "University of Guelph",
      href: "https://www.uoguelph.ca",
      degree: "Bachelors of Computing; Honours in Software Engineering",
      logoUrl: "/uoguelph.png",
      start: "2019",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Motorminds",
      href: "https://motorminds.ca",
      dates: "Sept 2024 - Present",
      active: true,
      description:
        "Motorminds is an AI-integrated SaaS platform designed to optimize automotive workflows, customer management, and parts inventory tracking for auto shops.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Azure OpenAI",
        "Terraform",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://motorminds.ca",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/motorminds_banner.png",
      video: "",
    },
    {
      title: "Automeetic",
      href: "https://github.com/akhan2001/automeetic",
      dates: "",
      active: true,
      description:
        "Automeetic is a social platform built for car enthusiasts to connect, share their passion, and organize car meetups. Users can join groups, chat, and discover upcoming events, creating a dynamic community experience.",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
      links: [
        {
          type: "Source",
          href: "https://github.com/akhan2001/automeetic",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/automeetic.png",
      video: "",
    },
    {
      title: "Auto Shop Agency",
      href: "https://autoshopagency.webflow.io",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Auto Shop Agency empowers auto shops through digital marketing and branding services, offering tailored solutions like custom websites and SEO optimization.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Webflow",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://autoshopagency.webflow.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/autoshopagency_banner.png",
      video: "",
    },
    {
      title: "Styling",
      href: "https://styling-apparel.com",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Styling is an automotive apparel lifestyle brand and an emerging car videography and production company, merging car culture with creative expression.",
      technologies: [
        "Shopify",
        "Webflow",
        "Figma",
        "Adobe Premiere",
        "Final Cut Pro",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://styling-apparel.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/styling_banner.png",
      video: "",
    },
  ],
  hackathons: [
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
  ],
} as const;
