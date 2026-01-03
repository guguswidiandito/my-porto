'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function ProjectsPage() {
  const { t, language } = useLanguage()

  const projects = [
    // Enterprise Projects - In Progress
    {
      title: 'SMARTKA Redesign (ERM)',
      client: 'PT Kereta Api Indonesia (KAI)',
      description: language === 'id'
        ? 'Redesign sistem manajemen risiko enterprise SMARTKA untuk meningkatkan user experience dan performa sistem.'
        : 'Redesign of SMARTKA enterprise risk management system to improve user experience and system performance.',
      status: 'in_progress' as const,
      category: 'enterprise' as const,
      tags: ['Laravel', 'React', 'PostgreSQL', 'REST API'],
    },
    {
      title: 'SIRISKCA (ERM)',
      client: 'PT Sarinah (Persero)',
      description: language === 'id'
        ? 'Sistem ERM terintegrasi untuk PT Sarinah yang mengelola risiko bisnis retail dan manajemen properti.'
        : 'Integrated ERM system for PT Sarinah managing retail business and property management risks.',
      status: 'in_progress' as const,
      category: 'enterprise' as const,
      tags: ['Laravel', 'React', 'MySQL', 'REST API'],
    },
    {
      title: 'MyRisk (ERM)',
      client: 'PT Indosat Ooredoo Hutchison',
      description: language === 'id'
        ? 'Sistem manajemen risiko enterprise untuk Indosat yang mengintegrasikan pengelolaan risiko operasional dan bisnis telekomunikasi.'
        : 'Enterprise risk management system for Indosat integrating telecommunication operational and business risk management.',
      status: 'completed' as const,
      category: 'enterprise' as const,
      tags: ['Laravel', 'React', 'MySQL', 'REST API'],
    },
    // Enterprise Projects - Completed
    {
      title: 'ERIN (ERM)',
      client: 'PT Perkebunan Nusantara (PTPN)',
      description: language === 'id'
        ? 'Sistem manajemen risiko enterprise untuk PTPN yang mengintegrasikan pengelolaan risiko perkebunan dan supply chain.'
        : 'Enterprise risk management system for PTPN integrating plantation and supply chain risk management.',
      status: 'completed' as const,
      category: 'enterprise' as const,
      tags: ['Laravel', 'React', 'SQL Server', 'REST API'],
    },
    {
      title: 'SINUSA (Sistem Investasi Nusantara)',
      client: 'PT Perkebunan Nusantara (PTPN)',
      description: language === 'id'
        ? 'Sistem pengelolaan capital expenditure (Capex) dari holding hingga sub holding, mencakup perencanaan, pelaksanaan, dan monitoring investasi.'
        : 'Capital expenditure (Capex) management system from holding to sub holding, covering investment planning, execution, and monitoring.',
      status: 'in_progress' as const,
      category: 'enterprise' as const,
      tags: ['Laravel', 'React', 'SQL Server', 'REST API'],
    },
    {
      title: 'Enterprise Risk Management (ERM)',
      client: 'Aerofood ACS',
      description: language === 'id'
        ? 'Sistem ERM untuk Aerofood ACS (anak perusahaan Garuda Indonesia) dalam pengelolaan risiko catering penerbangan.'
        : 'ERM system for Aerofood ACS (Garuda Indonesia subsidiary) in flight catering risk management.',
      status: 'completed' as const,
      category: 'enterprise' as const,
      tags: ['Laravel', 'React', 'MySQL', 'REST API'],
    },
    {
      title: 'Audit Management System',
      client: 'PT Wijaya Karya (WIKA)',
      description: language === 'id'
        ? 'Sistem manajemen audit untuk mendukung proses audit internal perusahaan konstruksi BUMN.'
        : 'Audit management system to support internal audit processes for state-owned construction company.',
      status: 'completed' as const,
      category: 'enterprise' as const,
      tags: ['PHP', 'MySQL'],
    },
    {
      title: 'Audit Management System',
      client: 'PT Bank Negara Indonesia (BNI)',
      description: language === 'id'
        ? 'Sistem manajemen audit untuk mendukung proses audit internal perbankan.'
        : 'Audit management system to support internal banking audit processes.',
      status: 'completed' as const,
      category: 'enterprise' as const,
      tags: ['PHP', 'MySQL'],
    },
    {
      title: 'Audit Management System',
      client: 'Bank Raya Indonesia',
      description: language === 'id'
        ? 'Sistem manajemen audit untuk mendukung proses audit internal perbankan digital.'
        : 'Audit management system to support digital banking internal audit processes.',
      status: 'completed' as const,
      category: 'enterprise' as const,
      tags: ['PHP', 'MySQL'],
    },
    {
      title: 'KPKU (Kriteria Penilaian Kinerja Unggul)',
      client: 'Enterprise Client',
      description: language === 'id'
        ? 'Sistem penilaian kinerja unggul untuk evaluasi dan monitoring kinerja perusahaan.'
        : 'Performance excellence assessment system for company performance evaluation and monitoring.',
      status: 'completed' as const,
      category: 'enterprise' as const,
      tags: ['PHP', 'MySQL'],
    },
    {
      title: 'GCG (Good Corporate Governance)',
      client: 'Enterprise Client',
      description: language === 'id'
        ? 'Sistem tata kelola perusahaan yang baik untuk memastikan transparansi dan akuntabilitas.'
        : 'Good corporate governance system to ensure transparency and accountability.',
      status: 'completed' as const,
      category: 'enterprise' as const,
      tags: ['PHP', 'MySQL'],
    },
    {
      title: 'Enterprise Risk Management (ERM)',
      client: 'PT Waskita Karya',
      description: language === 'id'
        ? 'Sistem manajemen risiko enterprise untuk perusahaan konstruksi BUMN.'
        : 'Enterprise risk management system for state-owned construction company.',
      status: 'completed' as const,
      category: 'enterprise' as const,
      tags: ['PHP', 'CodeIgniter', 'MySQL'],
    },
    {
      title: 'Enterprise Risk Management (ERM)',
      client: 'PT Pelindo',
      description: language === 'id'
        ? 'Sistem manajemen risiko enterprise untuk perusahaan pelabuhan BUMN.'
        : 'Enterprise risk management system for state-owned port company.',
      status: 'completed' as const,
      category: 'enterprise' as const,
      tags: ['CodeIgniter', 'MySQL'],
    },
    {
      title: 'Enterprise Risk Management (ERM)',
      client: 'Perum Peruri',
      description: language === 'id'
        ? 'Sistem manajemen risiko enterprise untuk perusahaan percetakan uang dan dokumen negara.'
        : 'Enterprise risk management system for state money and document printing company.',
      status: 'completed' as const,
      category: 'enterprise' as const,
      tags: ['CodeIgniter', 'MySQL'],
    },
    {
      title: 'Activity Management System',
      client: 'PT Tri Nindya Utama',
      description: language === 'id'
        ? 'Sistem manajemen aktivitas internal untuk memantau dan mengelola progress pekerjaan tim development.'
        : 'Internal activity management system to monitor and manage development team work progress.',
      status: 'completed' as const,
      category: 'enterprise' as const,
      tags: ['Next.js', 'MySQL'],
    },
    // Personal/Client Projects
    {
      title: language === 'id' ? 'Sistem PPDB dan Kelulusan' : 'Student Admission & Graduation System',
      client: 'SMK Islamiyah Adiwerna',
      description: language === 'id'
        ? 'Sistem Penerimaan Peserta Didik Baru (PPDB) dan pengumuman kelulusan online untuk SMK Islamiyah Adiwerna.'
        : 'New Student Admission System (PPDB) and online graduation announcement for SMK Islamiyah Adiwerna.',
      status: 'completed' as const,
      category: 'personal' as const,
      tags: ['Laravel', 'MySQL'],
    },
    {
      title: 'ATM Tracking System (DN Tracking & ATMI)',
      client: 'PT Kevin Guna Pratama',
      description: language === 'id'
        ? 'Sistem pelacakan ATM dan manajemen inventori spare part. Terdiri dari 2 aplikasi: DN Tracking dan ATMI.'
        : 'ATM tracking system and spare part inventory management. Consists of 2 apps: DN Tracking and ATMI.',
      status: 'completed' as const,
      category: 'personal' as const,
      tags: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],
    },
    {
      title: 'ERP System',
      client: 'PT Kevin Guna Pratama',
      description: language === 'id'
        ? 'Enterprise Resource Planning system untuk mengelola operasional bisnis perusahaan secara terintegrasi.'
        : 'Enterprise Resource Planning system for integrated business operations management.',
      status: 'completed' as const,
      category: 'personal' as const,
      tags: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],
    },
    {
      title: language === 'id' ? 'Sistem Ekspedisi' : 'Expedition System',
      client: 'PT Hakaes',
      description: language === 'id'
        ? 'Sistem manajemen ekspedisi untuk mengelola pengiriman barang, tracking, dan laporan operasional.'
        : 'Expedition management system for shipment management, tracking, and operational reports.',
      status: 'completed' as const,
      category: 'personal' as const,
      tags: ['Laravel', 'React', 'MySQL', 'REST API'],
    },
    {
      title: 'TV ATM Tracking System',
      client: 'PT Kevin Guna Pratama',
      description: language === 'id'
        ? 'Sistem untuk mengelola dan memonitor konten yang ditampilkan pada layar TV di mesin ATM secara real-time.'
        : 'System to manage and monitor content displayed on TV screens inside ATM machines in real-time.',
      status: 'completed' as const,
      category: 'personal' as const,
      tags: ['Laravel', 'Vue.js', 'MySQL', 'WebSocket'],
    },
    {
      title: language === 'id' ? 'Sistem Kepegawaian' : 'HR Management System',
      client: 'PDAM Tirta Ayu Tegal',
      description: language === 'id'
        ? 'Sistem informasi kepegawaian untuk mengelola data karyawan, absensi, cuti, dan penggajian.'
        : 'HR information system for managing employee data, attendance, leave, and payroll.',
      status: 'completed' as const,
      category: 'personal' as const,
      tags: ['Laravel', 'React', 'MySQL', 'REST API'],
    },
  ]

  const enterpriseProjects = projects.filter(p => p.category === 'enterprise')
  const personalProjects = projects.filter(p => p.category === 'personal')

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-primary-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {language === 'id' ? '' : 'My '}<span className="gradient-text">{t('projects.title')}</span>{language === 'id' ? ' Saya' : ''}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('projects.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">
                27+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{t('projects.totalProjects')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">
                25+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{t('projects.completed')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-500">
                {projects.filter(p => p.status === 'in_progress').length}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{t('projects.inProgress')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">
                {enterpriseProjects.length}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{t('hero.enterpriseClients')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Projects */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="section-title mb-0">{t('projects.enterprise')}</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 ml-13">
              {t('projects.enterpriseDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {enterpriseProjects.map((project, index) => (
              <div key={index} className="card card-hover group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                        project.status === 'in_progress'
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                          : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      }`}>
                        {project.status === 'in_progress' ? t('projects.inProgress') : t('projects.completed')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                      {project.client}
                    </p>
                  </div>
                </div>
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
        </div>
      </section>

      {/* Personal/Client Projects */}
      <section className="py-20 bg-white dark:bg-slate-800/50">
        <div className="container-custom">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="section-title mb-0">{t('projects.client')}</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 ml-13">
              {t('projects.clientDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => (
              <div key={index} className="card card-hover group">
                <div className="mb-4">
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    {t('projects.completed')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-3">
                  {project.client}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Used */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('projects.techUsed')}</h2>
            <p className="section-subtitle">{t('projects.techUsedDesc')}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {['Laravel', 'React', 'Vue.js', 'Next.js', 'TypeScript', 'PostgreSQL', 'MySQL', 'SQL Server', 'REST API', 'WebSocket', 'Node.js'].map((tech, index) => (
              <span key={index} className="skill-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
