/**
 * Single source of truth for portfolio content.
 * Update this file to change site copy — keep structure, edit strings.
 */

export interface ExperienceItem {
  role: string
  company: string
  location: string
  start: string
  end: string
  bullets: string[]
}

export interface EducationItem {
  degree: string
  school: string
  location: string
  start: string
  end: string
  gpa?: string
}

export interface ProjectItem {
  title: string
  oneLiner: string
  highlights: [string, string, string]
  tech: string[]
  githubUrl?: string
  /** e.g. "username/repo" for optional stars/updated fetch */
  githubRepo?: string
  liveUrl?: string
  /** Filter tags: AI/ML, Full Stack, Data, Systems */
  tags: string[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface Profile {
  name: string
  headline: string
  location: string
  email: string
  phone?: string
  linkedinUrl: string
  githubUrl: string
  /** Hero headline (static, recruiter-friendly) */
  heroHeadline: string
  /** Hero subheadline */
  heroSubheadline: string
  /** "Currently" line for hero panel */
  currentlyLine: string
  /** About section: first paragraph (technical) */
  aboutParagraph1: string
  /** About section: second paragraph (personal/hobbies) */
  aboutParagraph2: string
  skills: SkillGroup[]
  experience: ExperienceItem[]
  education: EducationItem[]
  projects: ProjectItem[]
  /** Path to PDF in public folder, e.g. "/resume.pdf" */
  resumePath: string
  /** Path to profile image in public folder, e.g. "/profile.jpg" */
  profileImagePath: string
}

export const profile: Profile = {
  name: 'Navyatej Tummala',
  headline: 'Backend & Full-Stack Engineer',
  location: 'Raleigh, NC',
  email: 'navyatej31@gmail.com',
  phone: '(425) 515-1639',
  linkedinUrl: 'https://www.linkedin.com/in/navyatej-tummala/',
  githubUrl: 'https://github.com/navyatej3112',
  heroHeadline: 'Building scalable backend systems and AI-driven developer tools.',
  heroSubheadline:
    'MS Computer Science candidate at NC State. Focused on cloud-native architecture, RAG pipelines, and high-performance services.',
  currentlyLine: 'Currently: Optimizing RAG pipelines and seeking Summer 2026 Software Engineering roles.',
  aboutParagraph1:
    'I build backend systems and cloud-native services that scale. My work centers on serverless architectures, data pipelines, and AI-powered developer tools—especially RAG systems that make knowledge retrieval fast and reliable. I care about clean APIs, solid observability, and code that lasts.',
  aboutParagraph2:
    'Based in Raleigh, NC. Outside work I stay active with the gym and outdoor running, solve LeetCode daily, enjoy watching football, and love to travel. Open to Software Engineer roles (backend or full-stack) starting Summer 2026.',
  skills: [
    {
      label: 'Core Backend',
      items: [
        'Python',
        'Java',
        'TypeScript',
        'SQL',
        'FastAPI',
        'Flask',
        'Node.js',
        'REST APIs',
        'LangChain',
        'BERT',
        'PostgreSQL',
        'Redis',
        'pytest',
        'JUnit',
      ],
    },
    {
      label: 'Cloud/DevOps',
      items: ['AWS (S3, Lambda, API Gateway, Amplify)', 'Docker', 'GitHub Actions', 'Linux', 'Git'],
    },
    {
      label: 'Frontend',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    },
  ],
  experience: [
    {
      role: 'Cloud Backend Engineer',
      company: 'ARoS Lab, NC State University',
      location: 'Raleigh, NC',
      start: 'May 2025',
      end: 'Aug 2025',
      bullets: [
        'Built core features for a cloud web app that manages research image datasets and prepares data for model training.',
        'Designed a serverless backend with AWS Amplify and API Gateway, exposing REST APIs for upload, labeling, and export.',
        'Wired event-driven ingestion with S3 and Lambda for reliable handling of large compressed archives and structured logging.',
      ],
    },
    {
      role: 'Software Engineering Intern',
      company: 'Symbiosis Technologies',
      location: 'Visakhapatnam, India',
      start: 'May 2023',
      end: 'May 2024',
      bullets: [
        'Built a FastAPI ingestion service supporting 50+ data sources with schema validation and pagination, cutting manual data collection effort.',
        'Implemented an OpenCV processing pipeline with Celery and Redis for background jobs and retries, persisting to PostgreSQL.',
        'Delivered analytics APIs and React + Power BI dashboards, improving insight quality and shortening refresh cycles; added Docker, CI, auth, and rate limiting.',
      ],
    },
    {
      role: 'Software Engineering Researcher',
      company: 'GITAM University',
      location: 'Visakhapatnam, India',
      start: 'Jan 2022',
      end: 'May 2023',
      bullets: [
        'Created a Python ETL pipeline with Pandas and NumPy to ingest and clean 5,000+ daily news and social posts; exposed typed FastAPI endpoints with validation and caching.',
        'Optimized Llama-2 models in PyTorch and Keras with testing and monitoring; built a Flask trends dashboard that improved signal precision and sped up analysis.',
      ],
    },
  ],
  education: [
    {
      degree: 'Master of Computer Science',
      school: 'North Carolina State University',
      location: 'Raleigh, NC',
      start: 'Aug 2024',
      end: 'May 2026',
      gpa: '3.97',
    },
    {
      degree: 'B.Tech. in Computer Science and Engineering',
      school: 'GITAM University',
      location: 'Visakhapatnam, India',
      start: 'Aug 2020',
      end: 'May 2024',
      gpa: '7.93',
    },
  ],
  projects: [
    {
      title: 'OnCall Copilot',
      oneLiner: 'Slack-based AI assistant that answers on-call questions using runbooks, postmortems, and service docs with cited answers.',
      highlights: [
        'RAG pipeline with hybrid retrieval (BM25 + embeddings) and cross-encoder reranking.',
        'Containerized FastAPI service with Redis caching; ~780 ms median latency, 89% top-3 source recall.',
        'Suggests mitigation steps with links to dashboards and log queries.',
      ],
      tech: ['Python', 'FastAPI', 'Slack Bolt', 'LangChain', 'FAISS', 'Pinecone', 'Redis', 'Docker'],
      githubUrl: 'https://github.com/navyatej3112/OnCall-Copilot',
      githubRepo: 'navyatej3112/OnCall-Copilot',
      tags: ['AI/ML', 'Systems'],
    },
    {
      title: 'GenAI Drug Information Assistant',
      oneLiner: 'Drug information chatbot using BERT-based NLP and FDA data to deliver real-time medication and regulatory answers.',
      highlights: [
        'Rasa-based intent classification, entity recognition, and dialogue management.',
        'Secured API and refresh pipeline to keep responses current.',
        'Built for healthcare professionals and the public.',
      ],
      tech: ['Python', 'BERT', 'FDA API', 'Rasa', 'FastAPI', 'SQL'],
      tags: ['AI/ML', 'Full Stack'],
    },
  ],
  resumePath: '/Navyatej_Tummala_cv.pdf',
  profileImagePath: '/profile.jpeg',
}
