'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'

const skills = [
  'Laravel', 'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'
]

export default function Home() {
  const { t } = useLanguage()

  const featuredProjects = [
    {
      title: 'ERM PT KAI',
      description: t('project.kai'),
      status: t('projects.inProgress'),
      tags: ['Laravel', 'React', 'PostgreSQL'],
    },
    {
      title: 'SIRISKCA - PT Sarinah',
      description: t('project.sarinah'),
      status: t('projects.inProgress'),
      tags: ['Laravel', 'React', 'MySQL'],
    },
    {
      title: 'MyRisk - Indosat',
      description: t('project.indosat'),
      status: t('projects.completed'),
      tags: ['Laravel', 'React', 'MySQL'],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-primary-950"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

        <div className="container-custom relative py-20 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {t('hero.greeting')}{' '}
              <span className="gradient-text">Gugus Widiandito</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              <span className="font-semibold text-slate-900 dark:text-white">{t('hero.role')}</span>{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">{t('hero.experience')}</span>{' '}
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/projects" className="btn-primary">
                {t('hero.viewProjects')}
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-secondary">
                {t('hero.contactMe')}
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">7+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{t('hero.yearsExp')}</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">27+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{t('hero.projectsDone')}</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{t('hero.enterpriseClients')}</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{t('hero.techStack')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white dark:bg-slate-800/50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="section-title">{t('projects.featured')}</h2>
              <p className="section-subtitle mb-0">{t('projects.featuredDesc')}</p>
            </div>
            <Link href="/projects" className="hidden md:inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
              {t('projects.viewAll')}
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={index} className="card card-hover group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                    project.status === t('projects.inProgress')
                      ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                      : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/projects" className="btn-secondary">
              {t('projects.viewAllProjects')}
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('skills.title')}</h2>
            <p className="section-subtitle">{t('skills.subtitle')}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>

          <div className="text-center">
            <Link href="/skills" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
              {t('skills.viewAll')}
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-800 dark:to-purple-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 text-lg font-medium text-primary-600 bg-white rounded-lg hover:bg-primary-50 transition-colors">
            {t('cta.button')}
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
