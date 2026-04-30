// src/data/experience.js
// Source of truth for Experience section.
// Structure: array of companies, each with an array of roles,
// each role with bullets and tags.

export const companies = [
  {
    id: "smarteo",
    name: "Smarteo",
    initial: "S",
    avatarColor: "#0000EE", // brand primary
    isCurrent: true, // shows active status dot
    roles: [
      {
        id: "smarteo-backend",
        title: "Backend Software Engineer",
        type: "Full-time",
        period: "Sep 2024 – Present",
        defaultOpen: true,
        bullets: [
          "Took full backend ownership across production services following a structured handover from the founding CTO.",
          "Reduced real-time query latency by 85% and increased dispatch throughput by 4x by migrating driver location storage from MongoDB to Redis with distributed locking.",
          "Trained an ML model on 10,000+ historical trips to replace static fare estimation with adaptive predictions, extended to support fully automated AI-driven bookings.",
          "Built billing REST APIs covering invoices, credit notes, dynamic pricing tiers, and automated payment workflows — reducing manual financial intervention by ~45%.",
          "Resolved all production incidents (booking failures, data corruption, API instability) with zero service downtime.",
        ],
        tags: [
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Redis",
          "MongoDB",
          "RabbitMQ",
          "Docker",
          "scikit-learn",
        ],
      },
      {
        id: "smarteo-frontend",
        title: "Frontend Engineer",
        type: "Full-time",
        period: "Jun 2023 – Sep 2024",
        defaultOpen: false,
        bullets: [
          "Built Taxiora ERP frontend from scratch in React and TypeScript with Redux — driver management, pricing tiers, invoicing, and inventory — used daily by operations teams.",
          "Delivered real-time AMR Dashboard for autonomous robot fleet monitoring via WebSockets, reducing factory floor incident response time by 25–35%.",
          "Built Angular back-office system for German client Jobzioo — 100% on-time delivery meeting international client standards.",
          "Mentored interns through architecture guidance, code reviews, and graduation project supervision.",
        ],
        tags: [
          "React",
          "TypeScript",
          "Redux",
          "Zod",
          "Angular",
          "WebSockets",
          "Node.js",
          "PostgreSQL",
        ],
      },
      {
        id: "smarteo-intern",
        title: "Software Engineering Intern",
        type: "Internship",
        period: "Dec 2022 – Jun 2023",
        defaultOpen: false,
        bullets: [
          "Built full-stack blood donation management platform with donor and donation workflow management and Power BI analytics reporting.",
          "Received full-time offer on internship completion.",
        ],
        tags: ["MongoDB", "Express.js", "React", "Node.js", "Power BI"],
      },
    ],
  },
  {
    id: "ssh",
    name: "SSH Engineering",
    initial: "S",
    avatarColor: "#555555",
    isCurrent: false,
    roles: [
      {
        id: "ssh-intern",
        title: "Software Engineering Intern",
        type: "Internship",
        period: "Jun 2022 – Aug 2022",
        defaultOpen: false,
        bullets: [
          "Developed backend and frontend features in PHP and JavaScript.",
          "Implemented form validation and delivered assigned modules on schedule.",
        ],
        tags: ["PHP", "JavaScript"],
      },
    ],
  },
  {
    id: "itgate",
    name: "ITGATE-GROUP",
    initial: "I",
    avatarColor: "#333333",
    isCurrent: false,
    roles: [
      {
        id: "itgate-intern",
        title: "Software Engineering Intern",
        type: "Internship",
        period: "Jan 2021 – May 2021",
        defaultOpen: false,
        bullets: [
          "Built NLP-based platform analyzing sentiment patterns in social media content.",
        ],
        tags: ["Python", "Django"],
      },
    ],
  },
];
