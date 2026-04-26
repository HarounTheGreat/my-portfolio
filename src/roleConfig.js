const roleContent = {
  backend: {
    heroTitle: "Backend Developer",
    heroSubtitle:
      "Building robust APIs and scalable server-side systems with PHP, Symfony, and Node.js.",
    aboutSummary:
      "Backend-focused software engineer experienced in designing APIs, structuring scalable server-side applications, and working across PHP, Symfony, Node.js, and database-driven systems.",
    cvPath: "/cv-backend.pdf",
    skillsOrder: [
      "backend",
      "database",
      "devops",
      "frontend",
      "dataAnalysis",
      "design",
    ],
  },
  frontend: {
    heroTitle: "Frontend Developer",
    heroSubtitle:
      "Crafting responsive user interfaces with React.js and React Native for polished digital experiences.",
    aboutSummary:
      "Frontend-focused developer building modern, responsive interfaces with React.js and mobile-first experiences with React Native, while keeping usability and performance at the center.",
    cvPath: "/cv-frontend.pdf",
    skillsOrder: [
      "frontend",
      "design",
      "backend",
      "database",
      "devops",
      "dataAnalysis",
    ],
  },
  fullstack: {
    heroTitle: "software engineer",
    heroSubtitle:
      "Blending frontend experience and backend architecture to deliver complete, production-ready applications.",
    aboutSummary:
      "software engineer comfortable across the product stack, from building polished interfaces in React to developing scalable backend services with Node.js and PHP Symfony.",
    cvPath: "/cv-fullstack.pdf",
    skillsOrder: [
      "frontend",
      "backend",
      "database",
      "devops",
      "dataAnalysis",
      "design",
    ],
  },
};

export const getSelectedRole = () => {
  const role = new URLSearchParams(window.location.search).get("role");

  if (role && roleContent[role]) {
    return role;
  }

  return "fullstack";
};

export default roleContent;
