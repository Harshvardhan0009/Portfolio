// ─── PERSONAL INFO ─────────────────────────────────────────────────────────
export const personalInfo = {
  name: "Harshvardhan Sharma",
  firstName: "Harshvardhan",
  lastName: "Sharma",
  role: "Software Engineer",
  tagline: "Precision Engineering — Delivering lightning-fast, high-performance software solutions.",
  email: "sharmaharsh1204@gmail.com",
  phone: "+91-706-754-4783",
  location: "India 🇮🇳",
  github: "https://github.com/Harshvardhan0009",
  linkedin: "https://www.linkedin.com/in/harshvardhan1204/",
  twitter: "",
  resume: "/resume.pdf",
  available: true,
};

// ─── ABOUT ──────────────────────────────────────────────────────────────────
export const aboutText = [
  "I'm a passionate Computer Science student at Lovely Professional University, specializing in Full-Stack Development and Data Structures & Algorithms. I enjoy building systems that are both highly performant and user-centric.",
  "From integrating real-time collaboration tools with WebRTC and Socket.io to developing AI-driven conversational assistants, I bring technical rigor and problem-solving skills to every project. I have a strong foundation in C++, React.js, Node.js, and MongoDB.",
  "Beyond coursework, I actively hone my analytical skills through competitive programming, having solved over 200+ problems on GeeksForGeeks, and I continuously seek opportunities to create impactful software solutions.",
];

export const stats = [
  { num: "200+", label: "DSA Problems" },
  { num: "Frontend", label: "React/Next" },
  { num: "Backend", label: "Node/Express" },
];

// ─── SKILLS ─────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: "Languages",
    style: "System & Scripting",
    icon: "💻",
    color: "ds-thunder",
    items: ["C++", "C", "Java", "Python", "JavaScript", "TypeScript", "Dart"],
    type: "thunder",
  },
  {
    category: "Frameworks & UI",
    style: "Web & Apps",
    icon: "⚡",
    color: "ds-thunder",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Socket.io"],
    type: "thunder",
  },
  {
    category: "Machine Learning",
    style: "Data & AI",
    icon: "🤖",
    color: "pink-acc",
    items: ["Scikit-Learn", "XGBoost", "TensorFlow", "PyTorch", "Pandas", "NumPy"],
    type: "flame",
  },
  {
    category: "Tools & Databases",
    style: "Infrastructure",
    icon: "🗄️",
    color: "pink-acc",
    items: ["MongoDB", "MySQL", "Postgres", "Firebase", "Docker", "Git", "Postman", "Power BI"],
    type: "flame",
  },
];


// ─── PROJECTS ───────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "PrepSync",
    emoji: "🎯",
    image: "/projects/virtual-meeting.jpg",
    preview: "preview-1",
    description:
      "A real-time interview prep platform featuring a collaborative shared code editor, whiteboard, chat, and video calls. Integrated AI-based mock interviews with automated feedback, scoring, and an analytics dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "WebRTC"],
    tagColors: ["green", "pink", "flame", "green", "pink"],
    github: "https://github.com/lordinsane07/PrpSync",
    demo: "#",
    featured: true,
    difficulty: 5,
    status: "Mar 2026",
  },
  {
    id: 2,
    title: "TechVaultGlobal",
    emoji: "🔐",
    image: "/projects/techvault.jpg",
    preview: "preview-2",
    description:
      "A full-stack web application built with a responsive component-based frontend and dynamic card layouts. Implemented RESTful APIs for seamless client-server communication and deployed via Git/GitHub.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    tagColors: ["green", "pink", "green", "flame"],
    github: "https://github.com/Harshvardhan0009/TechVault-Global",
    demo: "#",
    featured: true,
    difficulty: 4,
    status: "Feb 2026",
  },
  {
    id: 3,
    title: "AI Gardening Assistant",
    emoji: "🌱",
    image: "/projects/robot-gardener.jpg",
    preview: "preview-3",
    description:
      "A web app providing real-time plant care guidance via an interactive chat interface. Implemented AI/NLP-driven response logic for watering, soil care, and seasonal practice recommendations.",
    tags: ["HTML/CSS", "JavaScript", "NLP", "AI"],
    tagColors: ["green", "flame", "pink", "green"],
    github: "https://github.com/Harshvardhan0009/Ai-Based-Gardening-Assistant",
    demo: "https://harshvardhan0009.github.io/Ai-Based-Gardening-Assistant",
    featured: true,
    difficulty: 4,
    status: "Apr 2025",
  },
];

// ─── ACHIEVEMENTS ─────────────────────────────────────────────
export const achievements = [
  {
    icon: "🏅",
    title: "200+ Problems on GeeksForGeeks",
    desc: "Achieved an institute rank of 621, strengthening algorithmic problem-solving skills and data structure fundamentals.",
    badge: "Problem Solving",
    color: "flame",
  },
  {
    icon: "🎓",
    title: "Dean's List - Top 11%",
    desc: "Recognised for outstanding academic performance and extra-curricular activities at Lovely Professional University.",
    badge: "Academic",
    color: "pink",
  },
  {
    icon: "🚩",
    title: "Top 10 — Cisco CTF Competition",
    desc: "Ranked among the Top 10 performers in a university-level Capture-the-Flag (CTF) cybersecurity competition organized by Cisco in November 2023.",
    badge: "Cybersecurity",
    color: "green",
  },
];

// ─── CERTIFICATIONS ───────────────────────────────────────────
export const certifications = [
  {
    icon: "🧠",
    title: "AI Foundations Associate",
    desc: "Earned the Oracle AI Foundations Associate certification in March 2026.",
    badge: "Oracle",
    color: "flame",
    link: "/Certifications/eCertificate.pdf",
  },
  {
    icon: "💻",
    title: "Data Structures And Algorithms",
    desc: "Certified in Data Structures and Algorithms by GeeksForGeeks in October 2025.",
    badge: "GFG",
    color: "green",
    link: "/Certifications/gfgcertificate.pdf",
  },
  {
    icon: "☕",
    title: "Java Certification",
    desc: "Completed Java certification from NeoColab in May 2025.",
    badge: "NeoColab",
    color: "pink",
    link: "/Certifications/JAVA.ai.pdf",
  },
  {
    icon: "☁️",
    title: "Cloud Computing",
    desc: "Completed Cloud Computing certification from NPTEL IIT Kharagpur in April 2025.",
    badge: "NPTEL",
    color: "green",
    link: "/Certifications/Cloud Computing.pdf",
  },
];

// ─── EDUCATION ───────────────────────────────────────────────────────────────
export const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Lovely Professional University",
    location: "Punjab, India",
    duration: "Aug 2023 – Present",
    cgpa: "8.17 / 10.0",
    courses: [
      "Data Structures & Algorithms",
      "Object Oriented Programming",
      "Web Development",
      "Machine Learning",
      "Database Management Systems",
    ],
  },
  {
    degree: "Intermediate (Class 12th)",
    school: "ST. Thomas Sr. Sec. School",
    location: "Mandsor, Madhya Pradesh",
    duration: "Apr 2021 – Mar 2022",
    cgpa: "83.4%",
    courses: ["Physics", "Chemistry", "Mathematics", "English", "Computer Science"],
  },
];

// ─── EXPERIENCE & TRAINING ───────────────────────────────────────────────────
export const experience = [
  {
    role: "Data Structures & Algorithms Trainee",
    org: "Summer Training Program",
    type: "Training",
    duration: "Jun 2025 – Jul 2025 · Remote",
    icon: "FaLaptopCode",
    points: [
      "Completed intensive training on core DSA concepts including Arrays, Linked Lists, Stacks, and Algorithm Design.",
      "Developed a To-Do List Manager System using C++, OOP, File Handling, and Problem Solving techniques.",
    ],
  },
  {
    role: "Cadet — NCC A Certificate Holder",
    org: "National Cadet Corps (NCC)",
    type: "Leadership",
    duration: "2019 – 2020",
    icon: "FaUsers",
    points: [
      "National Camp: Selected and participated in 1 National Level NCC Camp, representing the district.",
      "District Camp: Participated in 1 District Level NCC Camp, demonstrating discipline and teamwork.",
      "Awarded the NCC A Certificate upon successful completion of cadet training and rigorous examinations.",
    ],
  },
];
