import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import avatar from "../assets/avator.png";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa6";
import ParticleBackground from "../components/ParticlesBackgrounds";

/* ─── SOCIALS ───────────────────────────────────────────────────────── */
const socials = [
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/alok-jha-83810a3a0" },
  { Icon: FaGithub,     label: "GitHub",   href: "https://github.com/Alok-Jha-creator" },
  { Icon: FaFacebook,   label: "Facebook", href: "https://www.facebook.com/alok.jha.23607" },
];

/* ─── 3D TEXT SHADOW UTILITY ────────────────────────────────────────── */
// Builds a layered CSS text-shadow for deep 3D extrusion effect
const make3DShadow = (depth = 18, color = "#0a4a40", accentColor = "#1CD8D2") => {
  let shadow = "";
  for (let i = 1; i <= depth; i++) {
    shadow += `${i}px ${i}px 0px ${color}`;
    if (i < depth) shadow += ", ";
  }
  // final glow layer
  shadow += `, ${depth + 2}px ${depth + 2}px 20px rgba(28,216,210,0.4)`;
  shadow += `, ${depth + 4}px ${depth + 4}px 40px rgba(0,191,143,0.2)`;
  return shadow;
};

const makeSmall3DShadow = (depth = 8, color = "#0a3a30") => {
  let shadow = "";
  for (let i = 1; i <= depth; i++) {
    shadow += `${i}px ${i}px 0px ${color}`;
    if (i < depth) shadow += ", ";
  }
  shadow += `, ${depth + 1}px ${depth + 1}px 12px rgba(28,216,210,0.35)`;
  return shadow;
};

/* ─── MOUSE PARALLAX HOOK ───────────────────────────────────────────── */
const useMouseParallax = (strength = 15) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [strength, -strength]), { stiffness: 100, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-strength, strength]), { stiffness: 100, damping: 25 });

  const handleMouseMove = (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    mouseX.set(e.clientX - cx);
    mouseY.set(e.clientY - cy);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
};

/* ─── SOCIAL ICON ───────────────────────────────────────────────────── */
const SocialIcon = ({ Icon, label, href }) => (
  <motion.a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 text-2xl md:text-3xl"
    whileHover={{
      scale: 1.25,
      y: -4,
      filter: "drop-shadow(0 0 8px rgba(28,216,210,0.9)) drop-shadow(0 0 20px rgba(0,191,143,0.7))",
    }}
    whileTap={{ scale: 0.92 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
  >
    <Icon />
  </motion.a>
);

/* ─── MAIN ──────────────────────────────────────────────────────────── */
const Home = React.forwardRef((props, ref) => {
  const roles = useMemo(() => ["Web Developer", "MERN Stack Developer", "Full Stack Developer"], []);
  const [index, setIndex]       = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useMouseParallax(8);

  /* typing */
  useEffect(() => {
    const current = roles[index];
    const t = setTimeout(() => {
      if (!deleting && subIndex < current.length)        setSubIndex(v => v + 1);
      else if (!deleting && subIndex === current.length) setTimeout(() => setDeleting(true), 1200);
      else if (deleting && subIndex > 0)                 setSubIndex(v => v - 1);
      else { setDeleting(false); setIndex(p => (p + 1) % roles.length); }
    }, deleting ? 40 : 60);
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, roles]);

  return (
    <section
      ref={ref}
      id="home"
      className="h-screen w-full relative overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <ParticleBackground />

      {/* gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw]
            h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px]
            rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] blur-[150px]"
          animate={{ opacity: [0.10, 0.18, 0.10], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw]
            h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px]
            rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] blur-[150px]"
          animate={{ opacity: [0.20, 0.35, 0.20], scale: [1, 1.06, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* ── MAIN GRID ── */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">

        {/* ── LEFT ── */}
        <motion.div
          className="flex flex-col justify-center h-full text-center lg:text-left"
          style={{ perspective: "1000px" }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="w-full lg:pr-24 mx-auto max-w-[48rem]"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >

            {/* ── TYPING ROLE — 3D small shadow ── */}
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              style={{
                color: "#e0fff9",
                textShadow: makeSmall3DShadow(5, "#063d2e"),
                transformStyle: "preserve-3d",
                transform: "translateZ(30px)",
              }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <motion.span
                className="inline-block w-[2px] ml-1 bg-white align-middle"
                style={{ height: "1em" }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.div>

            {/* ── NAME — deep 3D extrusion ── */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}
            >
              {/* "Hello, I'm" — medium 3D */}
              <span
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{
                  color: "#1CD8D2",
                  textShadow: makeSmall3DShadow(10, "#063d2e"),
                  WebkitTextStroke: "1px rgba(28,216,210,0.3)",
                }}
              >
                Hello, I&apos;m
              </span>

              {/* "Alok Jha" — deep 3D extrusion, the star */}
              <span
                className="block text-white font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap mt-1"
                style={{
                  textShadow: make3DShadow(22, "#062a20"),
                  WebkitTextStroke: "1px rgba(255,255,255,0.15)",
                  letterSpacing: "-0.02em",
                }}
              >
                Alok Jha
              </span>
            </motion.h1>

            {/* ── DESCRIPTION ── */}
            <motion.p
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{
                transform: "translateZ(20px)",
                transformStyle: "preserve-3d",
                textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
              }}
            >
              "I architect end-to-end digital products — from robust{" "}
              <span style={{ color: "#1CD8D2", textShadow: "1px 1px 0 #063d2e, 2px 2px 0 #063d2e, 3px 3px 8px rgba(28,216,210,0.4)" }}>
                Node.js APIs
              </span>{" "}
              and{" "}
              <span style={{ color: "#00bf8f", textShadow: "1px 1px 0 #063d2e, 2px 2px 0 #063d2e, 3px 3px 8px rgba(0,191,143,0.4)" }}>
                MongoDB schemas
              </span>{" "}
              to pixel-perfect{" "}
              <span style={{ color: "#1CD8D2", textShadow: "1px 1px 0 #063d2e, 2px 2px 0 #063d2e, 3px 3px 8px rgba(28,216,210,0.4)" }}>
                React interfaces
              </span>{" "}
              that users love."
            </motion.p>

            {/* ── BUTTONS — 3D depth ── */}
            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-5"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
            >
              {/* Primary */}
              <motion.a
                href="#projects"
                className="relative inline-flex items-center gap-2 px-7 py-3 rounded-full
                  text-base font-bold text-white overflow-hidden select-none"
                style={{
                  background: "linear-gradient(135deg, #1CD8D2, #00bf8f)",
                  boxShadow: "0 6px 0 #063d2e, 0 8px 20px rgba(28,216,210,0.35), 0 12px 40px rgba(0,0,0,0.4)",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.4)",
                }}
                whileHover={{
                  y: -3,
                  boxShadow: "0 9px 0 #063d2e, 0 12px 30px rgba(28,216,210,0.55), 0 18px 50px rgba(0,0,0,0.5)",
                }}
                whileTap={{
                  y: 4,
                  boxShadow: "0 2px 0 #063d2e, 0 4px 10px rgba(28,216,210,0.3)",
                }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
                  initial={{ x: "-110%" }}
                  whileHover={{ x: "210%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">View My Work</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >→</motion.span>
              </motion.a>

              {/* Secondary */}
              <motion.a
                href="/Resume.pdf"
                download
                className="relative inline-flex items-center gap-2 px-7 py-3 rounded-full
                  text-base font-bold text-white overflow-hidden select-none
                  border border-white/20 bg-white/5 backdrop-blur-sm"
                style={{
                  boxShadow: "0 6px 0 rgba(255,255,255,0.05), 0 8px 20px rgba(0,0,0,0.5)",
                  textShadow: "1px 1px 0 #111, 2px 2px 0 #0a0a0a, 3px 3px 8px rgba(0,0,0,0.6)",
                }}
                whileHover={{
                  y: -3,
                  borderColor: "rgba(255,255,255,0.4)",
                  boxShadow: "0 9px 0 rgba(255,255,255,0.07), 0 12px 30px rgba(0,0,0,0.6)",
                }}
                whileTap={{
                  y: 4,
                  boxShadow: "0 2px 0 rgba(255,255,255,0.05), 0 4px 8px rgba(0,0,0,0.4)",
                }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
              >
                <span className="relative z-10">My Resume</span>
                <motion.span
                  className="relative z-10 text-sm"
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >↓</motion.span>
              </motion.a>
            </motion.div>

            {/* ── SOCIALS ── */}
            <motion.div
              className="mt-10 flex gap-5 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
            >
              {socials.map(s => <SocialIcon key={s.label} {...s} />)}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT — AVATAR with 3D parallax tilt ── */}
        <motion.div
          className="relative hidden lg:flex items-center justify-center"
          style={{ perspective: "1000px" }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              position: "absolute",
              top: 0, left: 0, right: 0, bottom: 0,
            }}
          >
            {/* glow */}
            <div
              className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                right: "10px",
                width: "min(22vw, 510px)",
                height: "min(40vw, 760px)",
                borderRadius: "50%",
                filter: "blur(88px)",
                opacity: 0.4,
                background: "conic-gradient(from 0deg, #1CD8D2, #00bf8f, #302b63, #1CD8D2)",
                transform: "translateZ(-40px)",
              }}
            />

            {/* avatar image */}
            <motion.img
              src={avatar}
              alt="Alok Jha avatar"
              className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
              style={{
                right: "-30px",
                width: "min(95vw, 780px)",
                maxHeight: "100vh",
                filter: "drop-shadow(-12px 20px 40px rgba(0,0,0,0.8)) drop-shadow(0 0 30px rgba(28,216,210,0.25))",
                transform: "translateZ(60px)",
              }}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
});

Home.displayName = "Home";
export default Home;