import {
  SiC,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGithub,
  SiGithubactions,
  SiGit,
  SiHelm,
  SiKalilinux,
  SiKeras,
  SiKubernetes,
  SiLinux,
  SiMysql,
  SiN8N,
  SiOpencv,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiRedis,
  SiScikitlearn,
  SiTensorflow,
  SiTerraform,
  SiUbuntu,
  SiVscodium,
} from "react-icons/si";
import { FaAws, FaBrain, FaRobot, FaServer, FaWindows } from "react-icons/fa";
import { TbApi, TbWebhook } from "react-icons/tb";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  Python: SiPython,
  "Scikit-Learn": SiScikitlearn,
  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  YOLOv8: FaRobot,
  OpenCV: SiOpencv,
  FAISS: FaBrain,
  "Prompt Engineering": FaBrain,
  AWS: FaAws,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,
  Helm: SiHelm,
  "GitHub Actions": SiGithubactions,
  Flask: SiFlask,
  FastAPI: SiFastapi,
  "REST APIs": TbApi,
  Webhooks: TbWebhook,
  n8n: SiN8N,
  "GitHub Webhooks": TbWebhook,
  "Workflow Automation": SiN8N,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Linux: SiLinux,
  Ubuntu: SiUbuntu,
  "Kali Linux": SiKalilinux,
  Windows: FaWindows,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  "VS Code/Cursor": SiVscodium,
};

const defaultIcon = FaServer;

export function getTechIcon(name: string): IconType {
  return iconMap[name] ?? defaultIcon;
}

export function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = getTechIcon(name);
  return <Icon className={className} aria-hidden />;
}

export { SiGithub, SiC };
