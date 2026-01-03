'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'

export default function BlogPage() {
  const { language } = useLanguage()

  const articles = [
    {
      slug: 'mengenal-nextjs-framework-react-modern',
      title: language === 'id'
        ? 'Mengenal Next.js: Framework React Modern untuk Production'
        : 'Getting to Know Next.js: A Modern React Framework for Production',
      excerpt: language === 'id'
        ? 'Panduan lengkap tentang Next.js, mulai dari konsep dasar hingga fitur-fitur canggih seperti App Router, Server Components, dan Static Site Generation.'
        : 'Complete guide to Next.js, from basic concepts to advanced features like App Router, Server Components, and Static Site Generation.',
      date: '2024-12-15',
      readTime: '15 min',
      tags: ['Next.js', 'React', 'Web Development'],
      featured: true,
    },
    {
      slug: 'optimasi-performa-nextjs',
      title: language === 'id'
        ? 'Optimasi Performa di Next.js: Dari Loading hingga SEO'
        : 'Performance Optimization in Next.js: From Loading to SEO',
      excerpt: language === 'id'
        ? 'Teknik-teknik optimasi performa di Next.js termasuk Image Optimization, Code Splitting, Caching Strategies, dan best practices untuk SEO.'
        : 'Performance optimization techniques in Next.js including Image Optimization, Code Splitting, Caching Strategies, and SEO best practices.',
      date: '2024-12-20',
      readTime: '12 min',
      tags: ['Next.js', 'Performance', 'SEO'],
      featured: true,
    },
    {
      slug: 'membangun-aplikasi-fullstack-nextjs',
      title: language === 'id'
        ? 'Membangun Aplikasi Full-Stack dengan Next.js dan Database'
        : 'Building Full-Stack Applications with Next.js and Database',
      excerpt: language === 'id'
        ? 'Tutorial lengkap membangun aplikasi full-stack dengan Next.js, Server Actions, Prisma, PostgreSQL, dan deployment ke production.'
        : 'Complete tutorial on building full-stack applications with Next.js, Server Actions, Prisma, PostgreSQL, and production deployment.',
      date: '2024-12-28',
      readTime: '18 min',
      tags: ['Next.js', 'Full Stack', 'PostgreSQL'],
      featured: true,
    },
  ]

  function formatDate(dateString: string) {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === 'id' ? 'id-ID' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-primary-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              <span className="gradient-text">Blog</span> & {language === 'id' ? 'Artikel' : 'Articles'}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'id'
                ? 'Berbagi pengetahuan dan pengalaman seputar web development, dengan fokus pada Next.js dan teknologi modern lainnya.'
                : 'Sharing knowledge and experience about web development, focusing on Next.js and other modern technologies.'}
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {articles.map((article, index) => (
              <Link
                key={index}
                href={`/blog/${article.slug}`}
                className="card card-hover block group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                    <span>{formatDate(article.date)}</span>
                    <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                    <span>{article.readTime} {language === 'id' ? 'baca' : 'read'}</span>
                  </div>
                  {article.featured && (
                    <span className="px-2.5 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">
                      {language === 'id' ? 'Unggulan' : 'Featured'}
                    </span>
                  )}
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-3">
                  {article.title}
                </h2>

                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-primary-600 dark:text-primary-400 font-medium text-sm inline-flex items-center">
                    {language === 'id' ? 'Baca Selengkapnya' : 'Read More'}
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white dark:bg-slate-800/50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title">{language === 'id' ? 'Tetap Update' : 'Stay Updated'}</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              {language === 'id'
                ? 'Artikel baru tentang web development dan tips programming akan terus diupdate. Follow sosial media saya untuk update terbaru.'
                : 'New articles about web development and programming tips will be continuously updated. Follow my social media for the latest updates.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/guguswidiandito"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/guguswidiandito"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
