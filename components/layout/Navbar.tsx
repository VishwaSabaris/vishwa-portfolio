"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { navLinks, personal } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 md:px-6",
            scrolled && "glass-nav rounded-2xl border border-white/10 px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl md:mx-6 lg:mx-auto",
          )}
        >
          <a
            href="#"
            className="group flex items-center gap-2"
            aria-label="Home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-sm font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-transform group-hover:scale-105">
              V
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="GitHub"
            >
              <SiGithub size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-zinc-400 transition-colors hover:text-white lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 flex h-full w-[min(320px,85vw)] flex-col border-l border-white/10 bg-[#0a0a12]/95 p-6 pt-24 backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3 border-t border-white/10 pt-6">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm text-zinc-300"
                >
                  <SiGithub size={18} /> GitHub
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm text-zinc-300"
                >
                  <FaLinkedin size={18} /> LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
