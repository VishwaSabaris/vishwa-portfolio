import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#050508]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <p className="text-lg font-semibold text-white">{personal.name}</p>
            <p className="mt-1 text-sm text-zinc-500">{personal.role}</p>
          </div>
          <p className="max-w-md text-sm italic text-zinc-400">
            &ldquo;{personal.tagline}&rdquo;
          </p>
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2.5 text-zinc-500 transition-colors hover:bg-white/5 hover:text-violet-400"
              aria-label="GitHub"
            >
              <SiGithub size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2.5 text-zinc-500 transition-colors hover:bg-white/5 hover:text-cyan-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="rounded-lg p-2.5 text-zinc-500 transition-colors hover:bg-white/5 hover:text-fuchsia-400"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
