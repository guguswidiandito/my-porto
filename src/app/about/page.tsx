'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'

export default function AboutPage() {
  const { t, language } = useLanguage()

  const experience = [
    {
      company: 'PT Tri Nindya Utama',
      position: 'Full Stack Developer',
      period: language === 'id' ? '2018 - Sekarang' : '2018 - Present',
      duration: language === 'id' ? '7+ Tahun' : '7+ Years',
      description: language === 'id'
        ? 'Mengembangkan berbagai sistem Enterprise Resource Management (ERM) untuk klien-klien besar seperti PT KAI, PT Sarinah, PTPN, dan Aerofood ACS.'
        : 'Developing various Enterprise Resource Management (ERM) systems for major clients such as PT KAI, PT Sarinah, PTPN, and Aerofood ACS.',
      highlights: language === 'id' ? [
        'Lead developer untuk beberapa project ERM skala enterprise',
        'Merancang arsitektur sistem yang scalable dan maintainable',
        'Kolaborasi dengan tim untuk deliver project tepat waktu',
        'Mentoring junior developer dalam best practices development',
      ] : [
        'Lead developer for several enterprise-scale ERM projects',
        'Designing scalable and maintainable system architecture',
        'Collaborating with teams to deliver projects on time',
        'Mentoring junior developers in development best practices',
      ],
    },
  ]

  const techStack = [
    { category: 'Backend', items: ['Laravel', 'PHP', 'Node.js', 'REST API'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript'] },
    { category: 'Database', items: ['PostgreSQL', 'MySQL', 'SQL Server'] },
    { category: 'Storage', items: ['MinIO', 'AWS S3'] },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-primary-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-5xl md:text-6xl font-bold text-white">G</span>
                </div>
              </div>

              {/* Intro */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  Gugus Widiandito
                </h1>
                <p className="text-xl text-primary-600 dark:text-primary-400 font-medium mb-4">
                  Full Stack Developer
                </p>
                <p className="text-slate-600 dark:text-slate-300 max-w-lg">
                  {language === 'id'
                    ? 'Passionate dalam membangun solusi digital yang berdampak. Berpengalaman 7+ tahun dalam pengembangan sistem enterprise.'
                    : 'Passionate about building impactful digital solutions. 7+ years of experience in enterprise system development.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                {t('about.bio1')}
              </p>
              <p className="leading-relaxed">
                {t('about.bio2')}
              </p>
              <p className="leading-relaxed">
                {t('about.bio3')}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {techStack.map((stack, index) => (
                <div key={index} className="card">
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-white dark:bg-slate-800/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t('about.experience')}
              </h2>
            </div>

            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>

                <div className="mb-2">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <span className="px-2.5 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {exp.period}
                  </p>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mt-4 mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start text-slate-600 dark:text-slate-400">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {t('about.values')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10">
              {t('about.valuesDesc')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                  {t('about.cleanCode')}
                </h3>
              </div>

              <div className="p-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                  {t('about.userCentric')}
                </h3>
              </div>

              <div className="p-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                  {t('about.learning')}
                </h3>
              </div>

              <div className="p-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                  {t('about.problemSolver')}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-800 dark:to-purple-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('about.cta')}
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('about.ctaDesc')}
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 text-lg font-medium text-primary-600 bg-white rounded-lg hover:bg-primary-50 transition-colors">
            {t('hero.contactMe')}
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
