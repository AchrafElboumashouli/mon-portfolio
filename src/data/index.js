export const personal = {
  name: "Achraf El Boumashouli",
  title: "AI & Data Science Engineer",
  subtitle: "Machine Learning · Deep Learning · Data Engineering · Cloud",
  tagline: "Building end-to-end data pipelines, predictive models, and full-stack AI applications — from raw data ingestion to production deployment.",
  location: "Fès, Morocco",
  email: "elboumashouli.achraf@etu.uae.ac.ma",
  phone: "+212 638-559-959",
  github: "https://github.com/achraf-el-boumashouli", // placeholder — update with real URL from GitHub on CV
  linkedin: "https://www.linkedin.com/in/achraf-el-boumashouli", // placeholder — update from LinkedIn on CV
  seeking: "Open to internships in Data Engineering, Data Analytics, Machine Learning, or Cloud Computing",
};

export const skills = [
  {
    category: "AI & Machine Learning",
    icon: "Brain",
    items: ["Scikit-learn", "TensorFlow", "Keras", "Deep Learning", "NLP", "CNN"],
  },
  {
    category: "Data Analysis & BI",
    icon: "BarChart2",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA", "Statistics", "Power BI"],
  },
  {
    category: "Cloud & Data Engineering",
    icon: "Cloud",
    items: ["AWS S3", "AWS Glue", "AWS Athena", "AWS Lambda", "ETL Pipelines", "Data Lake"],
  },
  {
    category: "Programming & Databases",
    icon: "Code2",
    items: ["Python", "Java", "SQL", "OOP", "MySQL", "SQL Server", "JDBC"],
  },
  {
    category: "Web Development",
    icon: "Globe",
    items: ["Next.js", "React", "FastAPI", "TypeScript", "HTML5", "CSS3", "JavaScript", "Streamlit"],
  },
  {
    category: "Tools & Big Data",
    icon: "Wrench",
    items: ["Git", "GitHub", "Jupyter", "VS Code", "Linux", "Hadoop", "HDFS", "Apache Spark"],
  },
];

export const experiences = [
  {
    role: "Full-Stack Developer & Intelligent Validation",
    project: "SAP MRP Validator",
    company: "Yazaki Morocco S.A. — Business Support Center (BSC)",
    period: "Jul 2026 – Sep 2026",
    type: "Internship",
    description:
      "Built a mathematical validation engine comparing ML model predictions against SAP MRP references. Developed a REST API with FastAPI and a React frontend displaying VALID/INVALID results with detailed explanations.",
    stack: ["Python", "FastAPI", "Pydantic", "React", "SQLAlchemy", "pytest"],
  },
  {
    role: "Full-Stack Developer",
    project: "Smart Water Quality Monitoring System",
    company: "LTI, ENSA Tanger — PRIMA CIRQUA Project",
    period: "Jun 2026 – Sep 2026",
    type: "Internship",
    description:
      "Developed a full-stack web application for wastewater quality monitoring integrating sensor data collection, statistical analysis, Excel import, user authentication, and an anomaly detection system with real-time alerts.",
    stack: ["Python", "FastAPI", "Next.js", "React", "TypeScript", "PostgreSQL", "Pandas", "ThingSpeak"],
  },
];

export const projects = [
  {
    title: "AWS Data Lake Architecture",
    subtitle: "Final-Year Project (LST)",
    period: "2024 – 2025",
    description:
      "Designed a scalable Data Lake on AWS to ingest, catalog, and analyze Scopus research data. Automated ETL pipelines with Glue, SQL queries via Athena, and visualized scientific production trends.",
    stack: ["AWS S3", "AWS Glue", "AWS Lambda", "AWS Athena", "Python"],
    type: "Cloud / Data Engineering",
    color: "indigo",
  },
  {
    title: "DataMind AI",
    subtitle: "ML Platform",
    period: "2025 – 2026",
    description:
      "AI platform for loading datasets, automated preprocessing and EDA, and training models across classification, regression, and clustering tasks with interactive performance comparison dashboards.",
    stack: ["AWS", "Python", "Scikit-learn", "Pandas", "Streamlit"],
    type: "AI / Full-Stack",
    color: "violet",
  },
  {
    title: "Deepfake Detection Web App",
    subtitle: "Computer Vision",
    period: "2025 – 2026",
    description:
      "Real-time deepfake detection for images and videos via a CNN served by a Python REST API, integrated into an interactive Next.js frontend.",
    stack: ["Python", "TensorFlow/Keras", "CNN", "REST API", "Next.js", "React"],
    type: "Deep Learning / Web",
    color: "purple",
  },
  {
    title: "Streamlit Data Science Tool",
    subtitle: "ML Toolkit",
    period: "2024 – 2025",
    description:
      "Interactive tool for preprocessing, EDA, and predictive modeling with automatic feature engineering, multi-algorithm selection, and interactive metrics.",
    stack: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy"],
    type: "Data Science",
    color: "sky",
  },
  {
    title: "Restaurant Management System",
    subtitle: "OOP Application",
    period: "2024 – 2025",
    description:
      "Object-oriented Java application for managing restaurant operations — menus, tables, orders, and payments — with full data persistence via MySQL/JDBC.",
    stack: ["Java", "OOP", "MySQL", "JDBC", "SQL"],
    type: "Backend / Systems",
    color: "emerald",
  },
];

export const education = [
  {
    degree: "Master 2 — Artificial Intelligence & Data Science",
    school: "FST Tanger (FSTT)",
    location: "Morocco",
    period: "2025 – Present",
    current: true,
  },
  {
    degree: "Bachelor of Science & Technology — Computer Engineering & Software Development",
    school: "FST Al Hoceïma (FSTH)",
    location: "Morocco",
    period: "2024 – 2025",
    current: false,
  },
  {
    degree: "DEUST — Mathematics, Computer Science & Physics (M.I.P.)",
    school: "FST Al Hoceïma (FSTH)",
    location: "Morocco",
    period: "2021 – 2024",
    current: false,
  },
  {
    degree: "Baccalauréat — Physical Sciences",
    school: "Lycée Qualifiant Ben Souda",
    location: "Fès, Morocco",
    period: "2020 – 2021",
    current: false,
  },
];

export const languages = [
  { name: "Arabic", level: "Native", pct: 100 },
  { name: "French", level: "Intermediate (B1)", pct: 60 },
  { name: "English", level: "Intermediate (B1)", pct: 60 },
];
