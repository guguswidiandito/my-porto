import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/components/LanguageProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Gugus Widiandito | Full Stack Developer',
    template: '%s | Gugus Widiandito',
  },
  description: 'Full Stack Developer dengan 7+ tahun pengalaman. Spesialisasi dalam Laravel, React, Next.js, dan pengembangan sistem enterprise. Berbasis di Indonesia.',
  keywords: [
    'Full Stack Developer',
    'Laravel Developer',
    'React Developer',
    'Next.js Developer',
    'Web Developer Indonesia',
    'Software Engineer',
    'ERP Developer',
    'Enterprise System Developer',
    'Gugus Widiandito',
  ],
  authors: [{ name: 'Gugus Widiandito', url: 'https://guguswidiandito.dev' }],
  creator: 'Gugus Widiandito',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://guguswidiandito.dev',
    siteName: 'Gugus Widiandito Portfolio',
    title: 'Gugus Widiandito | Full Stack Developer',
    description: 'Full Stack Developer dengan 7+ tahun pengalaman. Spesialisasi dalam Laravel, React, Next.js, dan pengembangan sistem enterprise.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gugus Widiandito - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gugus Widiandito | Full Stack Developer',
    description: 'Full Stack Developer dengan 7+ tahun pengalaman.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
