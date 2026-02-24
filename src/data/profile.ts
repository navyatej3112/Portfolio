/**
 * Single source of truth for portfolio content.
 * Recruiter-friendly copy; no verbatim resume text.
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
  githubRepo?: string
  liveUrl?: string
  tags: string[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

/** One-line expertise for HeroAbout core grid */
export interface CoreExpertiseItem {
  label: string
  line: string
}

/** Hobby for HeroAbout, icon key maps to lucide (Dumbbell, Activity, Code, Zap, MapPin etc.) */
export interface HobbyItem {
  label: string
  iconKey: string
}

export interface Profile {
  name: string
  headline: string
  location: string
  email: string
  phone?: string
  linkedinUrl: string
  githubUrl: string
  /** Merged top section: status badge text */
  statusBadge: string
  /** Merged top: headline + subheadline */
  heroHeadline: string
  heroSubheadline: string
  /** Two short paragraphs (technical + personal) */
  aboutParagraph1: string
  aboutParagraph2: string
  /** 3–4 key stats for hero bar (e.g. GPA, 50+ sources, Hackathon winner) */
  keyStats: string[]
  /** Backend | Cloud | AI one-liners */
  coreExpertise: CoreExpertiseItem[]
  /** Personal interests with icon keys */
  hobbies: HobbyItem[]
  skills: SkillGroup[]
  experience: ExperienceItem[]
  education: EducationItem[]
  projects: ProjectItem[]
  resumePath: string
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
  statusBadge: 'Seeking Summer 2026 SWE roles',
  heroHeadline: 'Building scalable backend systems and AI-driven developer tools.',
  heroSubheadline:
    'MS Computer Science at NC State. Focused on cloud-native architecture, RAG pipelines, and high-performance services.',
  aboutParagraph1:
    'I build backend systems and cloud-native services that scale. My work centers on serverless APIs, data pipelines, and AI-powered tools—especially RAG systems for fast, reliable knowledge retrieval. I care about clean APIs, observability, and maintainable code.',
  aboutParagraph2:
    'Based in Raleigh, NC. I stay active with gym workouts and outdoor running, solve LeetCode daily, enjoy football, and love to travel. Open to Software Engineer roles (backend or full-stack) starting Summer 2026.',
  keyStats: ['MS CS GPA 3.97', '50+ data sources integrated', 'Hackathon winner', 'LeetCode daily'],
  coreExpertise: [
    { label: 'Backend', line: 'FastAPI, REST, event-driven ingestion' },
    { label: 'Cloud', line: 'AWS Lambda, S3, API Gateway, Amplify' },
    { label: 'AI', line: 'RAG, LangChain, FAISS, hybrid retrieval' },
  ],
  hobbies: [
    { label: 'Gym & fitness', iconKey: 'dumbbell' },
    { label: 'Outdoor running', iconKey: 'activity' },
    { label: 'LeetCode daily', iconKey: 'code' },
    { label: 'Football', iconKey: 'zap' },
    { label: 'Travel', iconKey: 'map' },
  ],
  skills: [
    { label: 'Languages', items: ['Python', 'Java', 'TypeScript', 'SQL'] },
    { label: 'Backend', items: ['FastAPI', 'Flask', 'REST APIs', 'OAuth2', 'JWT', 'OpenAPI'] },
    {
      label: 'Cloud/DevOps',
      items: ['AWS (S3, Lambda, API Gateway, ECS/Fargate, CloudWatch)', 'Docker'],
    },
    {
      label: 'AI/ML',
      items: ['PyTorch', 'LangChain', 'scikit-learn', 'Sentence Transformers', 'RAG (FAISS/Pinecone)'],
    },
    { label: 'Databases/Systems', items: ['PostgreSQL', 'MySQL', 'Redis', 'SQS', 'Celery', 'ETL'] },
    { label: 'Testing/Quality', items: ['pytest', 'JUnit', 'mypy', 'observability (logging/metrics, OpenTelemetry)'] },
  ],
  experience: [
    {
      role: 'Cloud Backend Engineer',
      company: 'ARoS Lab, NC State University',
      location: 'Raleigh, NC',
      start: 'May 2025',
      end: 'Aug 2025',
      bullets: [
        'Built dataset management and labeling features for a cloud web app that prepares research image data for model training.',
        'Delivered REST APIs with AWS Amplify and API Gateway for upload, label, and export workflows.',
        'Implemented S3 and Lambda triggers with structured logging for ingestion and preprocessing.',
      ],
    },
    {
      role: 'Software Engineering Intern',
      company: 'Symbiosis Technologies',
      location: 'Visakhapatnam, India',
      start: 'May 2023',
      end: 'May 2024',
      bullets: [
        'Built a FastAPI ingestion service for 50+ data sources with schema validation and pagination.',
        'Implemented an OpenCV pipeline with Celery and Redis; persisted results to PostgreSQL with retries.',
        'Delivered analytics APIs and React + Power BI dashboards; introduced Docker and GitHub Actions.',
      ],
    },
    {
      role: 'Software Engineering Researcher',
      company: 'GITAM University',
      location: 'Visakhapatnam, India',
      start: 'Jan 2022',
      end: 'May 2023',
      bullets: [
        'Built a Python ETL pipeline with Pandas and NumPy; exposed typed FastAPI endpoints with validation and caching.',
        'Fine-tuned Llama-2 in PyTorch and Keras; shipped a Flask trends dashboard for analysis.',
      ],
    },
  ],
  education: [
    {
      degree: 'MS Computer Science',
      school: 'North Carolina State University',
      location: 'Raleigh, NC',
      start: 'Aug 2024',
      end: 'May 2026',
      gpa: '3.97',
    },
    {
      degree: 'BTech CSE',
      school: 'GITAM University',
      location: 'Visakhapatnam, India',
      start: 'Aug 2020',
      end: 'May 2024',
      gpa: '7.93',
    },
  ],
  projects: [
    {
      title: 'Spidey Social',
      oneLiner: 'Hackathon-winning real-time social app built with React, TypeScript, and AWS serverless stack.',
      highlights: [
        'Full-stack app with AWS Lambda, DynamoDB, API Gateway, WebSockets, and Cognito.',
        'Infrastructure as code with AWS CDK; monitoring with CloudWatch.',
        'Won hackathon recognition for execution and technical depth.',
      ],
      tech: ['React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'WebSockets', 'Cognito', 'AWS CDK', 'CloudWatch'],
      tags: ['Full Stack', 'Systems'],
    },
    {
      title: 'OnCall Copilot',
      oneLiner: 'Slack-based AI assistant that answers on-call questions using runbooks and service docs with cited answers.',
      highlights: [
        'RAG pipeline with hybrid retrieval and reranking; Redis caching for low latency.',
        '~780 ms median latency; 89% top-3 source recall.',
        'Containerized FastAPI service with Docker; suggests mitigation steps and dashboard links.',
      ],
      tech: ['Python', 'FAISS', 'Pinecone', 'LangChain', 'Slack Bolt', 'FastAPI', 'Docker', 'Redis'],
      githubUrl: 'https://github.com/navyatej3112/OnCall-Copilot',
      githubRepo: 'navyatej3112/OnCall-Copilot',
      tags: ['AI/ML', 'Systems'],
    },
  ],
  resumePath: '/Navyatej_Tummala_cv.pdf',
  profileImagePath: '/profile.jpeg',
}
