'use client'

import { useLanguage } from '@/components/LanguageProvider'

const backendSkills = ['Laravel', 'PHP', 'Node.js', 'CodeIgniter', 'REST API']
const frontendSkills = ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Inertia.js', 'Tailwind CSS', 'HTML/CSS']
const databaseSkills = ['PostgreSQL', 'MySQL', 'SQL Server', 'Redis']
const storageSkills = ['MinIO', 'AWS S3', 'Object Storage Integration']
const toolsSkills = ['Git', 'GitLab CI', 'Jenkins', 'Docker', 'Linux', 'Nginx', 'Figma']

const softSkillsData = [
  { key: 'problemSolving', icon: 'puzzle' },
  { key: 'teamwork', icon: 'users' },
  { key: 'communication', icon: 'chat' },
  { key: 'projectMgmt', icon: 'clipboard' },
  { key: 'mentoring', icon: 'academic' },
  { key: 'adaptability', icon: 'refresh' },
]

const exploringTech = ['Microservices', 'Cloud Architecture', 'DevOps', 'System Design', 'AI/ML Integration']

export default function SkillsPage() {
  const { t, language } = useLanguage()

  const softSkills = [
    { name: language === 'id' ? 'Problem Solving' : 'Problem Solving', description: language === 'id' ? 'Analisis dan pemecahan masalah kompleks' : 'Analyzing and solving complex problems' },
    { name: language === 'id' ? 'Team Collaboration' : 'Team Collaboration', description: language === 'id' ? 'Bekerja efektif dalam tim' : 'Working effectively in teams' },
    { name: language === 'id' ? 'Communication' : 'Communication', description: language === 'id' ? 'Komunikasi teknis yang jelas' : 'Clear technical communication' },
    { name: language === 'id' ? 'Project Management' : 'Project Management', description: language === 'id' ? 'Mengelola proyek dari awal sampai akhir' : 'Managing projects from start to finish' },
    { name: language === 'id' ? 'Mentoring' : 'Mentoring', description: language === 'id' ? 'Membimbing developer junior' : 'Guiding junior developers' },
    { name: language === 'id' ? 'Adaptability' : 'Adaptability', description: language === 'id' ? 'Cepat belajar teknologi baru' : 'Quick to learn new technologies' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-primary-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {t('skills.pageTitle').split(' ')[0]} <span className="gradient-text">{t('skills.pageTitle').split(' ').slice(1).join(' ') || 'Skills'}</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('skills.pageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-16">
            {/* Backend */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t('skills.backend')}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill, index) => (
                  <span key={index} className="skill-badge text-base px-4 py-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t('skills.frontend')}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill, index) => (
                  <span key={index} className="skill-badge text-base px-4 py-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t('skills.database')}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {databaseSkills.map((skill, index) => (
                  <span key={index} className="skill-badge text-base px-4 py-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Storage */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t('skills.storage')}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {storageSkills.map((skill, index) => (
                  <span key={index} className="skill-badge text-base px-4 py-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t('skills.tools')}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {toolsSkills.map((skill, index) => (
                  <span key={index} className="skill-badge text-base px-4 py-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-20 bg-white dark:bg-slate-800/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('skills.soft')}</h2>
            <p className="section-subtitle">{t('skills.softDesc')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="card text-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {skill.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">{t('skills.learning')}</h2>
            <p className="section-subtitle">
              {t('skills.learningDesc')}
            </p>

            <div className="card mt-8">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {t('skills.exploring')}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {exploringTech.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
