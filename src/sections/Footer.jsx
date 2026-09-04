import { motion } from "framer-motion";
import { FaLinkedinIn, FaFacebook, FaGithub } from "react-icons/fa6";

const socials = [
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alok-jha-83810a3a0",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Alok-Jha-creator",
  },
  {
    Icon: FaFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/alok.jha.23607",
  },
];

const navLinks = [
  { label: "Home",        href: "#home" },
  { label: "About",       href: "#about" },
  { label: "Skills",      href: "#skills" },
  { label: "Projects",    href: "#projects" },
  { label: "Experience",  href: "#experience" },
  { label: "Contact",     href: "#contact" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* ── Decorative grid lines ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(28,216,210,1) 1px, transparent 1px), linear-gradient(90deg, rgba(28,216,210,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Neon blobs ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-[#1CD8D2]/20 via-[#00bf8f]/15 to-[#302b63]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[200px] rounded-full bg-[#302b63]/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[280px] h-[180px] rounded-full bg-[#1CD8D2]/10 blur-[100px]" />
      </div>

      {/* ── Top gradient border ── */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#1CD8D2] to-transparent" />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-12 pt-16 pb-8">

        {/* ── Upper: split layout ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-white/10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          {/* LEFT — Branding */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <h2
              className="text-5xl sm:text-6xl font-black leading-none bg-clip-text text-transparent bg-gradient-to-br from-[#1CD8D2] via-[#00bf8f] to-white tracking-tight"
            >
              Alok<br />Jha.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Full Stack Developer crafting scalable, modern apps — from robust APIs to pixel-perfect UIs.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-2">
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    y: -3,
                    color: "#1CD8D2",
                    filter: "drop-shadow(0 0 8px rgba(28,216,210,0.8))",
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 text-lg hover:border-[#1CD8D2]/40 transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CENTER — Nav links */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#1CD8D2] mb-1">
              Navigation
            </p>
            {navLinks.map(({ label, href }) => (
              <motion.a
                key={label}
                href={href}
                className="text-gray-400 text-sm w-fit relative group"
                whileHover={{ x: 6, color: "#ffffff", transition: { duration: 0.2 } }}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#1CD8D2] transition-all duration-300 inline-block" />
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* RIGHT — Quote + CTA */}
          <motion.div variants={fadeUp} className="flex flex-col gap-5 justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#1CD8D2] mb-3">
                Mantra
              </p>
              <blockquote className="text-white/80 italic text-base leading-relaxed border-l-2 border-[#1CD8D2] pl-4">
                "Success is when preparation meets opportunity."
              </blockquote>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-black bg-gradient-to-r from-[#1CD8D2] to-[#00bf8f] hover:opacity-90 hover:scale-[1.02] transition-all w-fit"
            >
              Let's Work Together →
            </a>
          </motion.div>

        </motion.div>

        {/* ── Lower: copyright bar ── */}
        <motion.div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span>© {new Date().getFullYear()} Alok Jha. All rights reserved.</span>

          <span className="flex items-center gap-1">
            Built with
            <span className="text-[#1CD8D2] mx-1">♥</span>
            using React & Framer Motion
          </span>
        </motion.div>

      </div>
    </footer>
  );
}