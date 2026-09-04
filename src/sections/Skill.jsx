import { motion } from "framer-motion";

// ── All your actual skills as shields.io badge URLs ───────────────────────────
const skills = [
  { name: "JavaScript",    url: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" },
  { name: "C++",           url: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" },
  { name: "Firebase",      url: "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" },
  { name: "Netlify",       url: "https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=%2300C7B7" },
  { name: "Context API",   url: "https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react" },
  { name: "Express.js",    url: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" },
  { name: "Insomnia",      url: "https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE" },
  { name: "JWT",           url: "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" },
  { name: "jQuery",        url: "https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white" },
  { name: "NPM",           url: "https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" },
  { name: "Next.js",       url: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" },
  { name: "Node.js",       url: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" },
  { name: "Nodemon",       url: "https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD" },
  { name: "React Router",  url: "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" },
  { name: "React",         url: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },
  { name: "Apache",        url: "https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white" },
  { name: "MongoDB",       url: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" },
  { name: "Framer Motion", url: "https://img.shields.io/badge/Framer%20Motion-black?style=for-the-badge&logo=framer&logoColor=white" },
  { name: "Canva",         url: "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white" },
  { name: "Jira",          url: "https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white" },
  { name: "Postman",       url: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
];

// Split into two rows
const half = Math.ceil(skills.length / 2);
const row1Skills = skills.slice(0, half);
const row2Skills = skills.slice(half);

// Triplicate for seamless infinite loop
const row1 = [...row1Skills, ...row1Skills, ...row1Skills];
const row2 = [...row2Skills, ...row2Skills, ...row2Skills];

// ── Badge Card ────────────────────────────────────────────────────────────────
function BadgeCard({ name, url }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -4,
        filter: "drop-shadow(0 0 10px rgba(28,216,210,0.5))",
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      className="shrink-0 cursor-default select-none"
    >
      <img
        src={url}
        alt={name}
        className="h-8 rounded-md"
        loading="lazy"
      />
    </motion.div>
  );
}

// ── Marquee Row ───────────────────────────────────────────────────────────────
function MarqueeRow({ items, direction = "left", duration = 40 }) {
  const xFrom = direction === "left" ? "0%"       : "-33.33%";
  const xTo   = direction === "left" ? "-33.33%"  : "0%";

  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

        <motion.div
          className="flex items-center gap-4 w-max py-2"
          animate={{ x: [xFrom, xTo] }}
          transition={{ duration, ease: "linear", repeat: Infinity }}
        >
          {items.map(({ name, url }, i) => (
            <BadgeCard key={`${name}-${i}`} name={name} url={url} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen w-full flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
      aria-label="Skills"
    >
      {/* Neon blobs — same as Home/About */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-[-60px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] opacity-15 blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 left-[-40px] w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-15 blur-[130px] animate-pulse delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full bg-gradient-to-r from-[#00bf8f] to-[#1CD8D2] opacity-8 blur-[110px]" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center gap-14 py-24">

        {/* ── Heading ── */}
        <motion.div
          className="text-center px-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]">
            My Skills
          </h2>
          <p className="mt-3 text-gray-400 text-base sm:text-lg">
            Modern Applications | Modern Technologies
          </p>
        </motion.div>

        {/* ── Divider line ── */}
        <motion.div
          className="w-24 h-[2px] rounded-full bg-gradient-to-r from-[#1CD8D2] to-[#00bf8f]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        {/* ── Row 1: scrolls left ── */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <MarqueeRow items={row1} direction="left" duration={38} />
        </motion.div>

        {/* ── Row 2: scrolls right ── */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <MarqueeRow items={row2} direction="right" duration={45} />
        </motion.div>

        {/* ── Bottom stat chips ── */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 px-6 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Technologies", value: `${skills.length}+` },
            { label: "Experience",   value: "1+ Years" },
            { label: "Projects",     value: "5+" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, borderColor: "rgba(28,216,210,0.5)" }}
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-center min-w-[120px] transition-colors"
            >
              <div className="text-xl font-bold text-[#1CD8D2]">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}