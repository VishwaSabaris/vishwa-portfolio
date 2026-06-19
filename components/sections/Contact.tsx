"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { personal } from "@/data/portfolio";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: personal.linkedinHandle,
    href: personal.linkedin,
  },
  {
    icon: SiGithub,
    label: "GitHub",
    value: `@${personal.githubUsername}`,
    href: personal.github,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personal.location,
    href: null,
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/vishwasabaris655@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading title="Let's build something extraordinary" />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 lg:col-span-2"
          >
            {contactLinks.map((link) => (
              <GlassCard key={link.label} hover={false} className="!p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
                    <link.icon className="h-5 w-5 text-violet-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-zinc-500">{link.label}</p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="truncate text-sm font-medium text-zinc-200 transition-colors hover:text-violet-400"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-zinc-200">
                        {link.value}
                      </p>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <GlassCard hover={false} className="!p-6 md:!p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-medium text-zinc-400"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium text-zinc-400"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="input-field"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-xs font-medium text-zinc-400"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="input-field"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium text-zinc-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full sm:w-auto disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>
                {status === "sent" && (
                  <p className="text-sm text-emerald-400">
                    Message sent successfully. I&apos;ll get back to you soon!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please email me directly at{" "}
                    <a
                      href={`mailto:${personal.email}`}
                      className="underline hover:text-red-300"
                    >
                      {personal.email}
                    </a>
                  </p>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
