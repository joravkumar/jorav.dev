export type Project = {
  name: string
  blurb: string
  tags: string[]
  href?: string
  repo?: string
  kind: "work" | "personal"
  org?: string
}

export type Role = {
  company: string
  title: string
  period: string
  summary: string
  points: string[]
  href?: string
}

export type SkillGroup = {
  label: string
  items: string[]
}

export const profile = {
  name: "Jorav",
  title: "Senior Software Engineer",
  // Full-stack & AI-forward positioning
  tagline: "I build web applications and the AI systems behind them.",
  bio: "Senior software engineer, 8+ years in enterprise SaaS. At Kochar Infotech I lead the architecture and scaling of a product used by 100+ enterprise customers across 10,000+ licensed seats, and I build its AI search: RAG pipelines, LLM features, and the APIs that keep them fast.",
  location: "Gurgaon, India",
  email: "me@jorav.dev",
  resumeUrl: "/resume.pdf",
  links: {
    github: "https://github.com/joravkumar",
    linkedin: "https://www.linkedin.com/in/joravkumar/",
  },
}

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "SQL"] },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "PWA",
    ],
  },
  {
    label: "Backend & Architecture",
    items: [
      "Node.js",
      "NestJS",
      "Microservices",
      "REST / WebSocket",
      "Distributed systems",
    ],
  },
  {
    label: "Data & Caching",
    items: ["PostgreSQL", "Prisma", "Redis", "Typesense", "BullMQ"],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3)",
      "Docker",
      "CI/CD",
      "Nginx",
      "Linux",
      "Observability",
    ],
  },
  {
    label: "Integrations & Auth",
    items: [
      "Genesys",
      "Zendesk",
      "Cisco",
      "Keycloak (SSO/OAuth)",
      "Webhooks",
    ],
  },
  {
    label: "AI & Search",
    items: [
      "RAG pipelines",
      "LangChain",
      "Azure OpenAI",
      "Gemini / Vertex AI",
      "MCP",
      "Multilingual semantic search",
    ],
  },
]

export const experience: Role[] = [
  {
    company: "Kochar Infotech Ltd.",
    title: "Senior Software Engineer · SDE-3",
    period: "Aug 2019 – Present",
    summary:
      "Promoted SDE-1 → SDE-2 → SDE-3. Lead architecture, performance, and scalability for a main revenue-generating SaaS product on AWS, and manage a team of 7+ engineers and interns.",
    points: [
      "Cut P95 API latency from 600ms to 320ms and raised throughput 40%+ (~5k requests/min at peak).",
      "Led the platform's shift from keyword search to a production RAG + LLM suite, improving retrieval accuracy 15%.",
      "Shipped the flagship product to marquee enterprise accounts: a leading Middle East retail conglomerate, a top Indian fintech serving 2M+ users, major MENA banks, and a US healthcare provider.",
      "Reduced infrastructure cost 30% through VP9 transcoding and CI/CD optimization.",
    ],
    href: "https://www.kochartech.com/",
  },
  {
    company: "Nugen I.T. Services",
    title: "MERN Stack Developer",
    period: "Apr 2018 – Aug 2019",
    summary:
      "My first engineering job. Full-stack work on client web apps in the MERN stack, weighted toward React front-ends.",
    points: [
      "Built and shipped React frontends for client projects.",
      "Moved into the wider MERN stack here, and picked up TypeScript and Node.",
    ],
    href: "https://nugeninfo.com/",
  },
]

export type Education = {
  degree: string
  school: string
  period: string
  note?: string
}

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Lovely Professional University",
    period: "2017 – 2019",
  },
  {
    degree: "BCA, Computer Science",
    school: "Guru Nanak Dev University",
    period: "2014 – 2017",
    note: "Grade: A",
  },
]

export const awards = [
  "1st place, Hackathon 2019 (DAVIET)",
  "3rd place, Hackathon 2019 (IIT Ropar)",
]

// Work projects shipped at Kochar Infotech Ltd.
// TODO(jorav): add any other work projects here — same shape, kind: "work".
export const workProjects: Project[] = [
  {
    name: "Knowmax",
    kind: "work",
    org: "Kochar Infotech Ltd.",
    blurb:
      "A multi-tenant knowledge-management SaaS built on React and NestJS, used by 100+ enterprise customers. I own its RAG search (multilingual, including Arabic), its LLM authoring tools, and an MCP server that exposes its APIs to AI agents.",
    tags: ["React", "NestJS", "RAG", "Typesense", "LangChain"],
    href: "https://knowmax.ai",
  },
  {
    name: "Phygital",
    kind: "work",
    org: "Kochar Infotech Ltd.",
    blurb:
      "A social commerce platform with shoppable video and live streams, built on Next.js and Node. I built the video streaming backend and tuned it for low latency under heavy concurrent viewership.",
    tags: ["Next.js", "Node.js", "Video streaming", "Real-time"],
    href: "https://phygitalmax.com",
  },
  {
    name: "LEAP",
    kind: "work",
    org: "Kochar Infotech Ltd.",
    blurb:
      "A cross-platform desktop app for an enterprise client. I built the React frontend and the multi-tier AWS backend (EC2, S3) behind it, with CI/CD and a 99.9% uptime SLA.",
    tags: ["React", "AWS", "Desktop", "CI/CD"],
    href: "https://leapmax.ai/",
  },
]

// Things I've built on my own time.
// TODO(jorav): add more personal projects here — same shape, kind: "personal".
export const personalProjects: Project[] = [
  {
    name: "Fineez",
    kind: "personal",
    blurb:
      "An offline-first PWA for tracking expenses and budgets. Everything stays on your device, nothing is uploaded. I built it to manage my own money.",
    tags: ["PWA", "React", "Offline-first"],
    href: "https://fineez.jorav.dev/",
  },
  {
    name: "tools.jorav.dev",
    kind: "personal",
    blurb:
      "A set of fast, privacy-first browser tools like JSON to Excel and a PDF manager. Everything runs on your device, nothing is ever uploaded. I built it to stop pasting sensitive files into random websites.",
    tags: ["React", "TypeScript", "Client-side", "Privacy-first"],
    href: "https://tools.jorav.dev",
  },
]

export const projects: Project[] = [...workProjects, ...personalProjects]
