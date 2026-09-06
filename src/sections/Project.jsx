import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import online from "../assets/online.png";
import image1 from "../assets/image.png";
import room from "../assets/room.png";
import port from "../assets/port.png";


const projects = [
  {
    id: 1,
    title: "Room Finder App",
    subtitle: "Full Stack Web App",
    description:
      "A modern e-commerce platform with product listing, cart management, secure JWT authentication, and real-time order tracking. Built with React, Node.js, Express, and MongoDB.",
    image:room,
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    github: "https://github.com/Alok-Jha-creator",
    live: "https://yoursite.netlify.app",
    accent: "#1CD8D2",
    size: "small", 
  },
  {
    id: 2,
    title: "Portfolio Website",
    subtitle: "Frontend Project",
    description:
      "Personal developer portfolio with smooth animations, particle backgrounds, and fully responsive design using React, Tailwind CSS, and Framer Motion.",
    image: port,
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Alok-Jha-creator",
    live: "https://github.com/Alok-Jha-creator",
    accent: "#00bf9f",
    size: "small",
  },
  {
    id: 3,
    title: "Online voting system",
    subtitle: "Full Stack App",
    description:
      "A full-featured task management app with drag-and-drop, real-time updates, user auth, and deadline reminders. Built with Next.js, Firebase, and Context API.",
    image: online,
    tags: ["Next.js", "Firebase", "Context API", "Tailwind CSS"],
    github: "https://github.com/Alok-Jha-creator",
    live: "https://yoursite.netlify.app",
    accent: "#a78bfa",
    size: "small",
  },
  {
    id: 4,
    title: "Tech booking system",
    subtitle: "FullStack App",
    description:
      "A full-featured task management app with drag-and-drop, real-time updates, user auth, and deadline reminders. Built with Next.js, Firebase, and Context API.",
    image: image1,
    tags: ["React.js", "Firebase", "Context API", "Tailwind CSS"],
    github: "https://github.com/Alok-Jha-creator",
     //live: "https://yoursite.netlify.app",
    accent: "#a78bfa",
    size: "small",
  },
];

// ── Icons ─────────────────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  const isLarge = project.size === "small" ? false : true;

  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer group
        ${isLarge ? "md:col-span-2 md:row-span-2" : "col-span-1"}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered ? `0 0 30px ${project.accent}22` : "none",
        borderColor: hovered ? `${project.accent}44` : "rgba(255,255,255,0.1)",
        transition: "box-shadow 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* ── Screenshot ── */}
      <div className="w-full h-full min-h-[220px] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* ── Overlay on hover ── */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6"
            style={{
              background: `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.15) 100%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Subtitle */}
            <motion.p
              className="text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ color: project.accent }}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {project.subtitle}
            </motion.p>

            {/* Title */}
            <motion.h3
              className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-tight"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              {project.description}
            </motion.p>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.18 }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-md border border-white/15 bg-white/10 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-3"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.22 }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition"
              >
                <GithubIcon /> GitHub
              </a>
             
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Always-visible bottom label (non-hover state) ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 px-5 py-3 flex items-center justify-between"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
        }}
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-white font-semibold text-sm">{project.title}</span>
        <span
          className="text-xs font-medium px-2 py-0.5 rounded-full border"
          style={{ color: project.accent, borderColor: `${project.accent}55` }}
        >
          {project.subtitle}
        </span>
      </motion.div>
    </motion.div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
      aria-label="Projects"
    >
      {/* Neon blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[-60px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] opacity-15 blur-[140px] animate-pulse" />
        <div className="absolute bottom-10 right-[-40px] w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-15 blur-[130px] animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-24 flex flex-col gap-12">

        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]">
            My Projects
          </h2>
          <p className="mt-3 text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Real-world apps I've designed, built, and shipped — from concept to production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 auto-rows-[280px]">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View All button */}
        <motion.div
          className="flex justify-center mt-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/Alok-Jha-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-[#1CD8D2]/40 transition-all"
          >
            <GithubIcon />
            View All on GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
}