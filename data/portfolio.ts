export const personal = {
  name: "Vishwa Sabaris V",
  role: "AI | Cloud | DevOps Engineer",
  status:
    "B.E CSE Artificial Intelligence & Machine Learning Student",
  location: "Coimbatore, Tamil Nadu, India",
  email: "vishwasabaris655@gmail.com",
  github: "https://github.com/VishwaSabaris",
  githubUsername: "VishwaSabaris",
  linkedin: "https://www.linkedin.com/in/vishwa-sabaris-aa487837b/",
  linkedinHandle: "vishwa-sabaris",
  tagline: "Building the future with AI, Cloud, and Automation.",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "GitHub", href: "#github" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroRoles = [
  "AI Engineer",
  "Cloud Enthusiast",
  "DevOps Learner",
  "Building AI Solutions",
  "Event-Driven Systems",
  "Cloud Automation",
] as const;

export const heroStats = [
  { value: "10+", label: "Projects" },
  { value: "AI + Cloud + DevOps", label: "Focus Areas" },
  { value: "20+", label: "Technologies" },
  { value: "Continuous", label: "Learner" },
] as const;

export const coreInterests = [
  "AI SYSTEMS",
  "CLOUD ENGINEERING",
  "DEVOPS",
  "AUTOMATION",
  "GENAI",
  "MLOPS",
  "LLMOPS",
  "PLATFORM ENGINEERING",
  "KUBERNETES",
  "EVENT DRIVEN SYSTEMS",
] as const;

export const techStack = [
  {
    category: "AI & Machine Learning",
    items: [
      "Python",
      "Scikit-Learn",
      "TensorFlow",
      "Keras",
      "YOLOv8",
      "OpenCV",
      "FAISS",
      "Prompt Engineering",
    ],
  },
  {
    category: "Cloud",
    items: ["AWS"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "Terraform", "Helm", "GitHub Actions"],
  },
  {
    category: "Backend",
    items: ["Flask", "FastAPI", "REST APIs", "Webhooks"],
  },
  {
    category: "Automation",
    items: ["n8n", "GitHub Webhooks", "Workflow Automation"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "Redis"],
  },
  {
    category: "Operating Systems",
    items: ["Linux", "Ubuntu", "Kali Linux", "Windows"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code/Cursor"],
  },
] as const;

export const projects = [
  {
    title: "GitHub Event-Driven Automation Platform",
    description:
      "Real-time event-driven automation platform using GitHub Webhooks, n8n, Dockerized workflows, and Flask backend APIs to process repository events automatically.",
    tags: [
      "GitHub Webhooks",
      "n8n",
      "Docker",
      "Flask",
      "Python",
      "REST API",
    ],
  },
  {
    title: "Plant Image Classification using Deep Learning",
    description:
      "Deep learning plant image classification system using MobileNetV2, CNN, TensorFlow, Keras, data augmentation, and transfer learning.",
    tags: ["TensorFlow", "Keras", "MobileNetV2", "CNN", "Deep Learning"],
  },
  {
    title: "Generative AI Internship Projects",
    description:
      "Collection of Generative AI projects covering System Prompt Engineering, RAG Document Analyst using FAISS, and Multimodal Content Engine using Whisper.",
    tags: ["RAG", "FAISS", "Whisper", "Prompt Engineering", "Streamlit"],
  },
  {
    title: "AI Voice Agent",
    description:
      "Tamil voice assistant prototype using Faster-Whisper STT, custom Scikit-Learn SLM, gTTS, and SMTP automation for restaurant order handling.",
    tags: ["Faster-Whisper", "gTTS", "Scikit-Learn", "Tamil NLP", "Python"],
  },
  {
    title: "Iris Classification System",
    description:
      "Machine learning classification project using the Iris dataset, Scikit-Learn, KNN/Random Forest, Streamlit, and model evaluation metrics.",
    tags: ["Machine Learning", "Classification", "Scikit-Learn", "Streamlit"],
  },
  {
    title: "Memory Matrix Game",
    description:
      "Console-based C programming game demonstrating pointers, dynamic memory allocation, matrix operations, and memory management.",
    tags: ["C Programming", "Pointers", "Memory Management"],
  },
  {
    title: "AWS Highly Available 3-Tier Infrastructure using Terraform",
    description:
      "Terraform Infrastructure-as-Code project for AWS 3-tier architecture using VPC, public/private subnets, ALB, Auto Scaling Group, EC2, RDS, and GitHub Actions.",
    tags: ["AWS", "Terraform", "VPC", "ALB", "ASG", "RDS", "GitHub Actions"],
  },
  {
    title: "EKS Flask Deployment via Helm",
    description:
      "Containerized Flask application deployed to Amazon EKS using Docker, Kubernetes manifests, Helm chart, HPA, ingress, and GitHub Actions CI/CD.",
    tags: ["EKS", "Kubernetes", "Docker", "Helm", "Flask", "GitHub Actions"],
  },
] as const;

export const roadmap = [
  {
    phase: "Shipped",
    subtitle: "Foundation built",
    items: [
      "Python",
      "Git",
      "GitHub",
      "Linux",
      "AWS",
      "Terraform",
      "Docker",
      "Flask",
      "Machine Learning",
      "Deep Learning",
      "GitHub Actions",
    ],
    accent: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/20",
  },
  {
    phase: "In Flight",
    subtitle: "Currently mastering",
    items: [
      "Kubernetes",
      "Helm",
      "Kafka",
      "Redis",
      "Prometheus",
      "Grafana",
    ],
    accent: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/20",
  },
  {
    phase: "Horizon",
    subtitle: "Next frontier",
    items: [
      "MLOps",
      "LLMOps",
      "AI Agents",
      "Platform Engineering",
      "SRE",
      "Cloud Native Systems",
    ],
    accent: "from-fuchsia-500 to-pink-600",
    glow: "shadow-fuchsia-500/20",
  },
] as const;

export const certifications = [
  {
    provider: "Microsoft",
    items: ["AI Skills Fest 2026", "Microsoft Learn credentials"],
    icon: "microsoft",
  },
  {
    provider: "IIT Madras",
    items: ["Data Science and AI Certification"],
    icon: "iit",
  },
  {
    provider: "Cisco Networking Academy",
    items: ["HTML Essentials", "Python Essentials"],
    icon: "cisco",
  },
  {
    provider: "Google",
    items: [
      "Introduction to Generative AI",
      "Introduction to Responsible AI",
      "Google Skills credentials",
    ],
    icon: "google",
  },
  {
    provider: "Forage",
    items: [
      "AWS Solutions Architecture Job Simulation",
      "Tata GenAI Powered Data Analytics Job Simulation",
      "Deloitte Australia Data Analytics Job Simulation",
    ],
    icon: "forage",
  },
  {
    provider: "Alison",
    items: ["Basics of Prompt Engineering"],
    icon: "alison",
  },
] as const;

export const achievements = [
  {
    title: "SMART HACK 2025",
    detail: "Second Prize",
    icon: "trophy",
  },
  {
    title: "SIDP 3.0",
    detail: "State Level Competition Participant",
    icon: "medal",
  },
  {
    title: "CodeChef",
    detail: "542+ problems solved",
    icon: "code",
  },
  {
    title: "LeetCode",
    detail: "50+ problems solved",
    icon: "leetcode",
  },
] as const;
