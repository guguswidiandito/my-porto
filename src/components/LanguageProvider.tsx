'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'id' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  id: {
    // Navbar
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.projects': 'Proyek',
    'nav.skills': 'Keahlian',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontak',

    // Hero
    'hero.available': 'Tersedia untuk proyek baru',
    'hero.greeting': 'Halo, Saya',
    'hero.role': 'Full Stack Developer',
    'hero.experience': '7+ tahun',
    'hero.description': 'pengalaman. Spesialisasi dalam membangun sistem enterprise yang scalable dan reliable.',
    'hero.viewProjects': 'Lihat Proyek',
    'hero.contactMe': 'Hubungi Saya',
    'hero.yearsExp': 'Tahun Pengalaman',
    'hero.projectsDone': 'Proyek Selesai',
    'hero.enterpriseClients': 'Klien Enterprise',
    'hero.techStack': 'Tech Stack',

    // Featured Projects
    'projects.featured': 'Proyek Unggulan',
    'projects.featuredDesc': 'Beberapa proyek terbaru yang sedang dan telah dikerjakan',
    'projects.viewAll': 'Lihat Semua',
    'projects.viewAllProjects': 'Lihat Semua Proyek',
    'projects.inProgress': 'Dalam Pengerjaan',
    'projects.completed': 'Selesai',
    'projects.title': 'Proyek',
    'projects.subtitle': 'Berbagai proyek yang telah dan sedang saya kerjakan, mulai dari sistem enterprise hingga aplikasi untuk berbagai instansi.',
    'projects.totalProjects': 'Total Proyek',
    'projects.enterprise': 'Proyek Enterprise',
    'projects.enterpriseDesc': 'Proyek untuk klien korporat dan BUMN',
    'projects.client': 'Proyek Klien',
    'projects.clientDesc': 'Proyek untuk berbagai klien dan instansi',
    'projects.techUsed': 'Teknologi yang Digunakan',
    'projects.techUsedDesc': 'Stack teknologi yang sering saya gunakan dalam proyek',

    // Project descriptions
    'project.kai': 'Enterprise Risk Management untuk PT Kereta Api Indonesia',
    'project.sarinah': 'Enterprise Risk Management untuk PT Sarinah Persero',
    'project.ptpn': 'Enterprise Risk Management untuk PT Perkebunan Nusantara',
    'project.indosat': 'Enterprise Risk Management untuk PT Indosat Ooredoo Hutchison',

    // Skills
    'skills.title': 'Keahlian',
    'skills.subtitle': 'Teknologi utama yang saya kuasai',
    'skills.viewAll': 'Lihat Semua Keahlian',
    'skills.pageTitle': 'Keahlian Saya',
    'skills.pageSubtitle': 'Keahlian teknis yang telah diasah selama 7+ tahun dalam mengembangkan berbagai sistem enterprise dan aplikasi web.',
    'skills.backend': 'Backend Development',
    'skills.frontend': 'Frontend Development',
    'skills.database': 'Database',
    'skills.storage': 'Cloud Storage',
    'skills.tools': 'Tools & Lainnya',
    'skills.soft': 'Soft Skills',
    'skills.softDesc': 'Kemampuan non-teknis yang mendukung profesionalisme',
    'skills.learning': 'Terus Belajar',
    'skills.learningDesc': 'Teknologi terus berkembang, dan saya selalu berusaha untuk mengikuti perkembangan terbaru.',
    'skills.exploring': 'Sedang Dipelajari',

    // About
    'about.title': 'Tentang',
    'about.subtitle': 'Seorang Full Stack Developer yang passionate dalam membangun solusi digital yang berdampak.',
    'about.bio1': 'Saya adalah Full Stack Developer dengan pengalaman lebih dari 7 tahun di PT Tri Nindya Utama. Spesialisasi saya adalah mengembangkan sistem Enterprise Resource Management (ERM) untuk berbagai perusahaan besar di Indonesia.',
    'about.bio2': 'Selama berkarir, saya telah berhasil menyelesaikan berbagai project untuk klien enterprise seperti PT KAI, PT Sarinah, PTPN, dan Aerofood ACS. Saya juga aktif mengerjakan project pribadi yang membantu berbagai instansi seperti PDAM, sekolah, dan perusahaan swasta.',
    'about.bio3': 'Saya percaya bahwa kode yang baik adalah kode yang tidak hanya berfungsi, tetapi juga mudah dibaca, dipelihara, dan dikembangkan. Dengan pendekatan user-centric, saya selalu berusaha membangun sistem yang tidak hanya powerful tetapi juga mudah digunakan.',
    'about.location': 'Lokasi',
    'about.values': 'Nilai & Pendekatan',
    'about.valuesDesc': 'Prinsip yang saya pegang dalam setiap proyek',
    'about.cleanCode': 'Clean Code',
    'about.cleanCodeDesc': 'Menulis kode yang bersih, readable, dan maintainable adalah prioritas utama saya.',
    'about.userCentric': 'User-Centric',
    'about.userCentricDesc': 'Fokus pada pengalaman pengguna dan memastikan sistem mudah digunakan.',
    'about.learning': 'Continuous Learning',
    'about.learningDesc': 'Selalu mengikuti perkembangan teknologi dan best practices terbaru.',
    'about.problemSolver': 'Problem Solver',
    'about.problemSolverDesc': 'Menikmati tantangan dan menemukan solusi kreatif untuk masalah kompleks.',
    'about.experience': 'Pengalaman Kerja',
    'about.experienceDesc': 'Perjalanan karir profesional saya',
    'about.present': 'Sekarang',
    'about.years': 'Tahun',
    'about.cta': 'Mari Berkolaborasi',
    'about.ctaDesc': 'Tertarik untuk bekerja sama? Saya selalu terbuka untuk diskusi proyek baru.',

    // Contact
    'contact.title': 'Hubungi',
    'contact.subtitle': 'Punya proyek yang ingin didiskusikan? Atau sekadar ingin say hello? Jangan ragu untuk menghubungi saya.',
    'contact.info': 'Informasi Kontak',
    'contact.availableFor': 'Tersedia Untuk',
    'contact.availableNow': 'Tersedia untuk proyek baru',
    'contact.responseTime': 'Waktu Respon',
    'contact.within24': 'Dalam 24 jam',
    'contact.basedIn': 'Berbasis di Indonesia',
    'contact.basedInDesc': 'Bekerja secara remote dan terbuka untuk kolaborasi dengan klien dari berbagai lokasi. Timezone: WIB (UTC+7)',
    'contact.ready': 'Siap Memulai Proyek?',
    'contact.readyDesc': 'Mari diskusikan bagaimana saya bisa membantu mewujudkan ide Anda menjadi kenyataan.',
    'contact.sendEmail': 'Kirim Email',
    'contact.fullstack': 'Pengembangan proyek full-stack',
    'contact.consult': 'Konsultasi arsitektur sistem',
    'contact.enterprise': 'Pengembangan sistem enterprise',
    'contact.mentoring': 'Mentoring dan code review',

    // CTA
    'cta.title': 'Punya Proyek yang Ingin Didiskusikan?',
    'cta.description': 'Saya selalu terbuka untuk diskusi mengenai proyek baru, ide-ide kreatif, atau kesempatan kolaborasi.',
    'cta.button': 'Mari Berdiskusi',

    // Footer
    'footer.rights': 'Hak cipta dilindungi.',

    // Common
    'common.with': 'dengan',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    // Hero
    'hero.available': 'Available for new projects',
    'hero.greeting': "Hi, I'm",
    'hero.role': 'Full Stack Developer',
    'hero.experience': '7+ years',
    'hero.description': 'of experience. Specializing in building scalable and reliable enterprise systems.',
    'hero.viewProjects': 'View Projects',
    'hero.contactMe': 'Contact Me',
    'hero.yearsExp': 'Years Experience',
    'hero.projectsDone': 'Projects Done',
    'hero.enterpriseClients': 'Enterprise Clients',
    'hero.techStack': 'Tech Stack',

    // Featured Projects
    'projects.featured': 'Featured Projects',
    'projects.featuredDesc': 'Some recent projects that are in progress or completed',
    'projects.viewAll': 'View All',
    'projects.viewAllProjects': 'View All Projects',
    'projects.inProgress': 'In Progress',
    'projects.completed': 'Completed',
    'projects.title': 'Projects',
    'projects.subtitle': 'Various projects I have worked on, from enterprise systems to applications for various institutions.',
    'projects.totalProjects': 'Total Projects',
    'projects.enterprise': 'Enterprise Projects',
    'projects.enterpriseDesc': 'Projects for corporate and state-owned enterprises',
    'projects.client': 'Client Projects',
    'projects.clientDesc': 'Projects for various clients and institutions',
    'projects.techUsed': 'Technologies Used',
    'projects.techUsedDesc': 'Tech stack I frequently use in projects',

    // Project descriptions
    'project.kai': 'Enterprise Risk Management for PT Kereta Api Indonesia',
    'project.sarinah': 'Enterprise Risk Management for PT Sarinah Persero',
    'project.ptpn': 'Enterprise Risk Management for PT Perkebunan Nusantara',
    'project.indosat': 'Enterprise Risk Management for PT Indosat Ooredoo Hutchison',

    // Skills
    'skills.title': 'Skills',
    'skills.subtitle': 'Main technologies I work with',
    'skills.viewAll': 'View All Skills',
    'skills.pageTitle': 'My Skills',
    'skills.pageSubtitle': 'Technical skills honed over 7+ years developing various enterprise systems and web applications.',
    'skills.backend': 'Backend Development',
    'skills.frontend': 'Frontend Development',
    'skills.database': 'Database',
    'skills.storage': 'Cloud Storage',
    'skills.tools': 'Tools & Others',
    'skills.soft': 'Soft Skills',
    'skills.softDesc': 'Non-technical skills that support professionalism',
    'skills.learning': 'Always Learning',
    'skills.learningDesc': 'Technology keeps evolving, and I always strive to keep up with the latest developments.',
    'skills.exploring': 'Currently Exploring',

    // About
    'about.title': 'About',
    'about.subtitle': 'A passionate Full Stack Developer dedicated to building impactful digital solutions.',
    'about.bio1': "I'm a Full Stack Developer with over 7 years of experience at PT Tri Nindya Utama. I specialize in developing Enterprise Resource Management (ERM) systems for various large companies in Indonesia.",
    'about.bio2': "Throughout my career, I have successfully completed various projects for enterprise clients such as PT KAI, PT Sarinah, PTPN, and Aerofood ACS. I'm also actively working on personal projects helping various institutions like PDAM, schools, and private companies.",
    'about.bio3': 'I believe good code is not only functional but also readable, maintainable, and extensible. With a user-centric approach, I always strive to build systems that are not only powerful but also easy to use.',
    'about.location': 'Location',
    'about.values': 'Values & Approach',
    'about.valuesDesc': 'Principles I hold in every project',
    'about.cleanCode': 'Clean Code',
    'about.cleanCodeDesc': 'Writing clean, readable, and maintainable code is my top priority.',
    'about.userCentric': 'User-Centric',
    'about.userCentricDesc': 'Focus on user experience and ensuring systems are easy to use.',
    'about.learning': 'Continuous Learning',
    'about.learningDesc': 'Always keeping up with the latest technology and best practices.',
    'about.problemSolver': 'Problem Solver',
    'about.problemSolverDesc': 'Enjoying challenges and finding creative solutions to complex problems.',
    'about.experience': 'Work Experience',
    'about.experienceDesc': 'My professional career journey',
    'about.present': 'Present',
    'about.years': 'Years',
    'about.cta': "Let's Collaborate",
    'about.ctaDesc': "Interested in working together? I'm always open to discussing new projects.",

    // Contact
    'contact.title': 'Get in',
    'contact.subtitle': "Have a project to discuss? Or just want to say hello? Don't hesitate to reach out.",
    'contact.info': 'Contact Information',
    'contact.availableFor': 'Available For',
    'contact.availableNow': 'Available for new projects',
    'contact.responseTime': 'Response Time',
    'contact.within24': 'Within 24 hours',
    'contact.basedIn': 'Based in Indonesia',
    'contact.basedInDesc': 'Working remotely and open to collaboration with clients from various locations. Timezone: WIB (UTC+7)',
    'contact.ready': 'Ready to Start a Project?',
    'contact.readyDesc': "Let's discuss how I can help turn your ideas into reality.",
    'contact.sendEmail': 'Send Email',
    'contact.fullstack': 'Full-stack project development',
    'contact.consult': 'System architecture consulting',
    'contact.enterprise': 'Enterprise system development',
    'contact.mentoring': 'Mentoring and code review',

    // CTA
    'cta.title': 'Have a Project to Discuss?',
    'cta.description': "I'm always open to discussing new projects, creative ideas, or collaboration opportunities.",
    'cta.button': "Let's Talk",

    // Footer
    'footer.rights': 'All rights reserved.',

    // Common
    'common.with': 'with',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('id')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'id' || saved === 'en')) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['id']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
