export const profile = {
  name: 'Anxic',
  role: 'Computer Science Student',
  institution: 'Assumption University',
  location: 'Bangkok, Thailand',
  intro:
    'I\u2019m Anxic, a Computer Science student currently beginning my journey in technology. I previously completed a Diploma in Information Technology at Kaplan Higher Education Academy in Singapore and I\u2019m continuing to build my knowledge through programming, databases, networking, and software development.',
  about:
    'I am currently studying Computer Science at Assumption University in Bangkok, Thailand. Before starting my degree, I completed a Diploma in Information Technology at Kaplan Higher Education Academy in Singapore. I am interested in technology and enjoy learning through practical projects and hands-on work.',
}

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export type EducationEntry = {
  school: string
  degree: string
  location: string
  period: string
  status: 'current' | 'completed'
}

export const education: EducationEntry[] = [
  {
    school: 'Assumption University',
    degree: 'Bachelor of Science in Computer Science',
    location: 'Bangkok, Thailand',
    period: '2026 \u2013 2031',
    status: 'current',
  },
  {
    school: 'Kaplan Higher Education Academy',
    degree: 'Diploma in Information Technology',
    location: 'Singapore',
    period: '2025',
    status: 'completed',
  },
  {
    school: 'Kaplan',
    degree: 'Foundation Diploma',
    location: 'Singapore',
    period: '2024 \u2013 2025',
    status: 'completed',
  },
]

export const skills = [
  'HTML/CSS',
  'MySQL',
  'Git',
  'Object-Oriented Programming',
  'Database Fundamentals',
  'Networking Fundamentals',
]

export type Project = {
  title: string
  description: string
  features: string[]
  /** Add a GitHub or demo URL here when ready. */
  href?: string
}

export const projects: Project[] = [
  {
    title: 'Lecture AI',
    description:
      'Lecture AI is a local-first desktop application designed to transcribe English lectures offline. It uses Whisper-based speech recognition to convert recorded lectures into accurate, timestamped transcripts while keeping the audio and transcript data stored locally. The project focuses on privacy, simplicity, and reliable transcription without unnecessary features such as chatbots, quizzes, or automatic summaries.',
    features: [
      'Offline English lecture transcription',
      'Whisper-based speech recognition',
      'Timestamped transcripts',
      'Local-first and privacy-focused',
      'Desktop application',
      'Simple, distraction-free interface',
    ],
  },
]

/** Fill these in with your real links when ready. Left empty on purpose. */
export const contacts = [
  { label: 'Email', value: 'paingheinkyawkoks@gmail.com', placeholder: 'Add your email address' },
  { label: 'LinkedIn', value: 'https://www.linkedin.com/in/paing-hein-kyaw-763129428/?isSelfProfile=true', placeholder: 'Add your LinkedIn profile' },
  { label: 'GitHub', value: 'https://github.com/anxic313', placeholder: 'Add your GitHub profile' },
]
