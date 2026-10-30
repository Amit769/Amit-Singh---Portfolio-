export type Stat = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  kind: string;
  summary: string;
  body: string;
  highlights: string[];
  stack: string[];
  tags: string[];
  href: string;
  stats: Stat[];
};

export type Role = {
  id: string;
  title: string;
  org: string;
  when: string;
  points: string[];
  projectId?: string;
};

export type School = {
  id: string;
  credential: string;
  school: string;
  when: string;
};

export type Mark = {
  id: string;
  title: string;
  org: string;
  when: string;
};

export type SkillGroup = { group: string; items: string };

export const profile = {
  name: "Amit Singh",
  role: "Software developer",
  location: "Greater Noida, India",
  availability: "Open to internships and junior software roles",
  email: "amitsingh.115up@gmail.com",
  phone: "+91 94151 64489",
  phoneHref: "tel:+919415164489",
  github: "https://github.com/Amit769",
  linkedin: "https://www.linkedin.com/in/amit-singh-a472632ba/",
  lede: "Final-year B.Tech student in computer science at IILM University. I build REST APIs, data pipelines, and machine-learning services in Python — and I care that they can be run, not only demoed.",
  bio: "A crack-detection model served with FastAPI, financial analytics from a Bluestock Fintech internship, and web pages I started building at YBI Foundation. I want software with a clear data path, logs when a pipeline fails, and a model you can call.",
};

export const projects: Project[] = [
  {
    id: "crack-detection",
    title: "Crack detection in mines and tunnels",
    year: "Mar 2026",
    kind: "Academic project",
    summary:
      "A CNN that classifies structural cracks, served with FastAPI so an upload comes back as a prediction.",
    body: "I trained a convolutional network on images of cracks in mines and tunnels, then wrapped the TensorFlow model in FastAPI. An upload is classified as Crack or No Crack with a confidence score, and the crack is drawn on the output image so a person can check the call.\n\nOn the project dataset the model reached 99.45% validation accuracy and 99.54% training accuracy. The aim is early risk identification: see the fracture before it is obvious on a walk-through.",
    highlights: [
      "CNN image classifier built and trained with TensorFlow",
      "FastAPI endpoint for real-time predictions, with Swagger docs",
      "OpenCV highlights the detected crack on the output image",
      "Built for structural images from mines and tunnels",
    ],
    stack: ["Python", "TensorFlow", "CNN", "FastAPI", "OpenCV"],
    tags: ["Machine learning", "FastAPI"],
    href: "https://github.com/Amit769/Crack-Detection-CNN",
    stats: [
      { value: "99.45%", label: "Validation accuracy" },
      { value: "99.54%", label: "Training accuracy" },
    ],
  },
  {
    id: "mutual-fund",
    title: "Mutual fund analytics",
    year: "Jun 2026",
    kind: "Bluestock Fintech internship",
    summary:
      "An end-to-end pipeline from fund data to SQL analysis, risk reports, and a Power BI dashboard.",
    body: "Built during a data analyst internship at Bluestock Fintech. The pipeline ingests mutual-fund data, cleans and validates it, answers questions in SQL, then studies performance in Python. Notebooks produce the risk reports. Power BI is the interactive view, and a Streamlit app sits beside them for a lighter share.\n\nThe reports cover CAGR, Sharpe, Sortino, alpha and beta, maximum drawdown, tracking error, and a fund scorecard.",
    highlights: [
      "ETL, cleaning, and exploratory analysis on mutual fund data",
      "Automated NAV ingestion from public APIs, with logging and scheduling",
      "Risk and performance reports, plus portfolio-level views",
      "Interactive Power BI dashboard and HTML summaries",
    ],
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Power BI",
      "Streamlit",
      "Plotly",
      "Matplotlib",
      "SciPy",
    ],
    tags: ["Data"],
    href: "https://github.com/Amit769/mutual-fund-analytics",
    stats: [],
  },
  {
    id: "smart-cctv",
    title: "Smart CCTV analytics",
    year: "2026",
    kind: "Independent",
    summary:
      "Fire and smoke detection on a live camera feed, held for five frames so a flicker does not raise an alarm.",
    body: "A video analytics project for hazard detection, after the still-image crack model. A YOLOv8 model fine-tuned for fire and smoke watches the feed. A detection has to persist for five consecutive frames before it counts, which is there to cut false alarms. The monitoring view is a web dashboard with the live stream and boxes on the frame.",
    highlights: [
      "Custom YOLOv8 model for fire and smoke",
      "Multi-frame verification before an alert",
      "Live monitoring dashboard around the camera stream",
      "Python service using OpenCV and FastAPI",
    ],
    stack: ["Python", "YOLOv8", "OpenCV", "FastAPI"],
    tags: ["Machine learning", "FastAPI"],
    href: "https://github.com/Amit769/AI-Smart-CCTV-Analytics",
    stats: [],
  },
  {
    id: "nifty-100",
    title: "Nifty 100 intelligence",
    year: "2026",
    kind: "Independent",
    summary:
      "Financial statements for Nifty 100 companies, turned into ratios, a screener, and a FastAPI layer.",
    body: "Separate from the mutual-fund internship. This one loads company statements into SQLite, checks the data, and computes a wide set of ratios and KPIs — the project notes account for more than fifty. Streamlit handles screening and peer comparison. FastAPI exposes the same figures, and the reporting path writes PDF summaries. Scikit-learn clusters companies.",
    highlights: [
      "ETL and validation into a SQLite warehouse",
      "Financial ratios, a stock screener, and peer comparison",
      "FastAPI service plus Streamlit dashboards",
      "PDF reports and a scikit-learn clustering pass",
    ],
    stack: [
      "Python",
      "Pandas",
      "SQL",
      "SQLite",
      "FastAPI",
      "Streamlit",
      "Plotly",
      "scikit-learn",
    ],
    tags: ["Data", "FastAPI"],
    href: "https://github.com/Amit769/Nifty100-Financial-Intelligence-Platform",
    stats: [{ value: "50+", label: "Financial KPIs" }],
  },
  {
    id: "library",
    title: "Library management",
    year: "2026",
    kind: "Web application",
    summary:
      "Catalog, members, loans, returns, and fines, with access split by role.",
    body: "A library desk written down as software: books, members, issue and return, fine calculation, and notices. Access is role-based, so a member and a librarian do not see the same controls. It is the web-application piece beside the Python and model work.",
    highlights: [
      "Book and member records in one place",
      "Issue, return, and fine tracking",
      "Role-based access for staff and members",
    ],
    stack: ["HTML", "CSS"],
    tags: ["Web"],
    href: "https://github.com/Amit769/Library-management-system-",
    stats: [],
  },
];

export const roles: Role[] = [
  {
    id: "bluestock",
    title: "Data analyst intern",
    org: "Bluestock Fintech",
    when: "June 2026",
    projectId: "mutual-fund",
    points: [
      "Developed an end-to-end analytics platform in Python, SQL, and Power BI for financial data.",
      "Ran ETL, cleaning, exploratory analysis, and an interactive dashboard.",
      "Automated NAV ingestion from public APIs, with logging, error handling, and scheduling.",
      "Wrote interactive reports, HTML summaries, and portfolio notes for investment analysis.",
    ],
  },
  {
    id: "ybi",
    title: "Web developer intern",
    org: "YBI Foundation",
    when: "June 2023 – July 2023",
    points: [
      "Built and maintained web pages and application components.",
      "Worked with front-end developers on API consumption and data flow.",
      "Hands-on practice with React and the surrounding web toolchain.",
    ],
  },
];

export const education: School[] = [
  {
    id: "btech",
    credential: "B.Tech, Computer Science & Engineering",
    school: "IILM University, Greater Noida",
    when: "2023 – 2027",
  },
  {
    id: "twelfth",
    credential: "12th class",
    school: "J.B. Academy, Faizabad",
    when: "2022 – 2023",
  },
  {
    id: "tenth",
    credential: "10th class",
    school: "J.B. Academy, Faizabad",
    when: "2020 – 2021",
  },
];

export const certifications: Mark[] = [
  {
    id: "coursera-etl",
    title: "Data Science and ETL Tools",
    org: "Coursera",
    when: "Dec 2025",
  },
  {
    id: "infosys-python",
    title: "Python Fundamentals",
    org: "Infosys",
    when: "Mar 2025",
  },
  {
    id: "internshala-ds",
    title: "Data Science",
    org: "Internshala",
    when: "Jan 2025",
  },
  {
    id: "coursera-java",
    title: "Java Certification",
    org: "Coursera",
    when: "Sep 2024",
  },
];

export const workshops: Mark[] = [
  {
    id: "cyber",
    title: "Cyber Security Workshop",
    org: "IILM University",
    when: "Oct 2024",
  },
  {
    id: "cloud",
    title: "Cloud Computing Workshop",
    org: "IEEE Conference",
    when: "Sep 2025",
  },
  {
    id: "ieee-ai",
    title: "IEEE International Conference on AI and Cyber Security",
    org: "IEEE",
    when: "Apr 2026",
  },
];

export const skills: SkillGroup[] = [
  { group: "Programming", items: "Python, Java, SQL" },
  {
    group: "Data and analytics",
    items: "Pandas, NumPy, Power BI, Excel, Matplotlib, Plotly",
  },
  {
    group: "Machine learning",
    items: "TensorFlow, CNN, deep learning",
  },
  { group: "Web", items: "HTML, CSS, React" },
  { group: "Databases", items: "PostgreSQL, Apache Hadoop" },
  { group: "APIs", items: "REST, FastAPI" },
  { group: "Tools", items: "Git, GitHub, data structures and algorithms" },
];

export const filters = ["All", "Machine learning", "Data", "FastAPI", "Web"] as const;

export type Filter = (typeof filters)[number];

export function shortUrl(value: string) {
  return value.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
