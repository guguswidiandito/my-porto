import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Article {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  content: string
}

const articles: Article[] = [
  {
    slug: 'mengenal-nextjs-framework-react-modern',
    title: 'Mengenal Next.js: Framework React Modern untuk Production',
    excerpt: 'Panduan lengkap tentang Next.js, mulai dari konsep dasar hingga fitur-fitur canggih seperti App Router, Server Components, dan Static Site Generation.',
    date: '2024-12-15',
    readTime: '15 min',
    tags: ['Next.js', 'React', 'Web Development'],
    content: `
## Apa itu Next.js?

Next.js adalah framework React yang dikembangkan oleh Vercel untuk membangun aplikasi web modern. Framework ini menyediakan berbagai fitur out-of-the-box yang membuat pengembangan aplikasi React menjadi lebih mudah dan efisien.

## Mengapa Memilih Next.js?

### 1. Server-Side Rendering (SSR)

Next.js memungkinkan rendering halaman di server sebelum dikirim ke browser. Ini sangat bermanfaat untuk:

- **SEO yang lebih baik**: Search engine dapat dengan mudah mengindeks konten
- **Performa awal lebih cepat**: User melihat konten lebih cepat
- **Social media sharing**: Preview yang akurat saat sharing link

### 2. Static Site Generation (SSG)

Untuk konten yang jarang berubah, Next.js dapat men-generate halaman statis saat build time:

\`\`\`typescript
export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
\`\`\`

### 3. App Router (Next.js 13+)

App Router adalah sistem routing terbaru yang menggunakan React Server Components secara default:

- **Layouts**: Shared UI yang persist antar navigasi
- **Loading UI**: Streaming dan Suspense built-in
- **Error Handling**: Error boundaries di level route
- **Server Components**: Reduce JavaScript bundle size

### 4. File-Based Routing

Struktur folder langsung menjadi routing:

\`\`\`
app/
├── page.tsx          → /
├── about/
│   └── page.tsx      → /about
├── blog/
│   ├── page.tsx      → /blog
│   └── [slug]/
│       └── page.tsx  → /blog/:slug
\`\`\`

## Server Components vs Client Components

### Server Components (Default)

- Render di server
- Tidak menambah JavaScript bundle
- Bisa langsung akses database
- Tidak bisa menggunakan hooks atau event handlers

### Client Components

Ditandai dengan \`'use client'\` directive:

\`\`\`typescript
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
\`\`\`

## Data Fetching di Next.js

### Fetch Data di Server Component

\`\`\`typescript
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'force-cache', // SSG
    // cache: 'no-store', // SSR
    // next: { revalidate: 3600 }, // ISR
  })
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <div>{data.title}</div>
}
\`\`\`

### Server Actions

Untuk mutasi data, gunakan Server Actions:

\`\`\`typescript
async function createPost(formData: FormData) {
  'use server'
  const title = formData.get('title')
  await db.post.create({ data: { title } })
}
\`\`\`

## Fitur-Fitur Penting Lainnya

### Image Optimization

\`\`\`typescript
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={630}
  priority
/>
\`\`\`

### Font Optimization

\`\`\`typescript
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
\`\`\`

### Metadata API

\`\`\`typescript
export const metadata: Metadata = {
  title: 'My App',
  description: 'Description here',
  openGraph: {
    title: 'My App',
    images: ['/og.png'],
  },
}
\`\`\`

## Kesimpulan

Next.js adalah pilihan tepat untuk membangun aplikasi React modern dengan performa tinggi dan SEO yang baik. Dengan fitur-fitur seperti App Router, Server Components, dan berbagai optimasi built-in, Next.js membantu developer fokus pada membangun fitur tanpa perlu khawatir tentang konfigurasi kompleks.
    `,
  },
  {
    slug: 'optimasi-performa-nextjs',
    title: 'Optimasi Performa di Next.js: Dari Loading hingga SEO',
    excerpt: 'Teknik-teknik optimasi performa di Next.js termasuk Image Optimization, Code Splitting, Caching Strategies, dan best practices untuk SEO.',
    date: '2024-12-20',
    readTime: '12 min',
    tags: ['Next.js', 'Performance', 'SEO'],
    content: `
## Mengapa Performa Penting?

Performa website langsung mempengaruhi:
- **User Experience**: User meninggalkan site yang lambat
- **SEO Ranking**: Google menggunakan Core Web Vitals sebagai ranking factor
- **Conversion Rate**: Setiap detik delay bisa menurunkan conversion

## Core Web Vitals

### 1. Largest Contentful Paint (LCP)

Mengukur waktu loading konten utama. Target: < 2.5 detik

**Optimasi LCP:**

\`\`\`typescript
// Prioritaskan gambar hero
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Hero"
  priority // Preload image
  sizes="100vw"
/>
\`\`\`

### 2. First Input Delay (FID) / Interaction to Next Paint (INP)

Mengukur responsivitas interaksi. Target: < 100ms

**Optimasi FID/INP:**

\`\`\`typescript
// Gunakan dynamic import untuk code splitting
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
})
\`\`\`

### 3. Cumulative Layout Shift (CLS)

Mengukur stabilitas visual. Target: < 0.1

**Optimasi CLS:**

\`\`\`typescript
// Selalu tentukan dimensi gambar
<Image
  src="/image.jpg"
  width={800}
  height={600}
  alt="Description"
/>

// Gunakan aspect-ratio untuk container
<div className="aspect-video">
  <video />
</div>
\`\`\`

## Image Optimization

### Next.js Image Component

\`\`\`typescript
import Image from 'next/image'

// Responsive images
<Image
  src="/photo.jpg"
  alt="Photo"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
/>

// Static images dengan automatic optimization
import heroImage from '@/public/hero.jpg'
<Image src={heroImage} alt="Hero" placeholder="blur" />
\`\`\`

### Remote Images

\`\`\`typescript
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.example.com',
      },
    ],
  },
}
\`\`\`

## Caching Strategies

### Static vs Dynamic Rendering

\`\`\`typescript
// Force static (SSG)
export const dynamic = 'force-static'

// Force dynamic (SSR)
export const dynamic = 'force-dynamic'

// Revalidate every hour (ISR)
export const revalidate = 3600
\`\`\`

### Data Cache

\`\`\`typescript
// Cached forever (default)
fetch('https://api.example.com/data')

// No caching
fetch('https://api.example.com/data', { cache: 'no-store' })

// Revalidate after 1 hour
fetch('https://api.example.com/data', {
  next: { revalidate: 3600 }
})

// Tag-based revalidation
fetch('https://api.example.com/posts', {
  next: { tags: ['posts'] }
})

// Revalidate by tag
import { revalidateTag } from 'next/cache'
revalidateTag('posts')
\`\`\`

## Code Splitting & Lazy Loading

### Dynamic Imports

\`\`\`typescript
import dynamic from 'next/dynamic'

// Client-side only component
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <div>Loading map...</div>
})

// Lazy load below the fold
const Comments = dynamic(() => import('./Comments'))
\`\`\`

### Route-based Code Splitting

Next.js otomatis melakukan code splitting per route. Setiap halaman hanya memuat JavaScript yang diperlukan.

## SEO Optimization

### Metadata API

\`\`\`typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'My Site',
    template: '%s | My Site',
  },
  description: 'Description for SEO',
  keywords: ['nextjs', 'react', 'web development'],
  authors: [{ name: 'Author Name' }],
  openGraph: {
    title: 'My Site',
    description: 'OG Description',
    url: 'https://mysite.com',
    siteName: 'My Site',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Site',
    description: 'Twitter description',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}
\`\`\`

### Dynamic Metadata

\`\`\`typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug)

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [post.image],
    },
  }
}
\`\`\`

### Sitemap & Robots

\`\`\`typescript
// app/sitemap.ts
export default async function sitemap() {
  const posts = await getPosts()

  return [
    { url: 'https://mysite.com', lastModified: new Date() },
    ...posts.map((post) => ({
      url: \`https://mysite.com/blog/\${post.slug}\`,
      lastModified: post.updatedAt,
    })),
  ]
}

// app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://mysite.com/sitemap.xml',
  }
}
\`\`\`

## Bundle Analysis

\`\`\`bash
npm install @next/bundle-analyzer

# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({})

# Run analysis
ANALYZE=true npm run build
\`\`\`

## Kesimpulan

Optimasi performa di Next.js melibatkan berbagai aspek mulai dari image optimization, caching strategies, code splitting, hingga SEO. Dengan memanfaatkan fitur-fitur built-in Next.js dan mengikuti best practices, kita bisa membangun aplikasi yang cepat dan ramah SEO.
    `,
  },
  {
    slug: 'membangun-aplikasi-fullstack-nextjs',
    title: 'Membangun Aplikasi Full-Stack dengan Next.js dan Database',
    excerpt: 'Tutorial lengkap membangun aplikasi full-stack dengan Next.js, Server Actions, Prisma, PostgreSQL, dan deployment ke production.',
    date: '2024-12-28',
    readTime: '18 min',
    tags: ['Next.js', 'Full Stack', 'PostgreSQL'],
    content: `
## Arsitektur Full-Stack dengan Next.js

Next.js memungkinkan kita membangun aplikasi full-stack dalam satu project. Dengan Server Components dan Server Actions, kita bisa menghilangkan kebutuhan akan API endpoints terpisah untuk banyak use case.

## Setup Project

### 1. Inisialisasi Next.js

\`\`\`bash
npx create-next-app@latest my-fullstack-app
cd my-fullstack-app
\`\`\`

### 2. Install Prisma

\`\`\`bash
npm install prisma @prisma/client
npx prisma init
\`\`\`

### 3. Konfigurasi Database

\`\`\`prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
\`\`\`

### 4. Generate dan Migrate

\`\`\`bash
npx prisma migrate dev --name init
npx prisma generate
\`\`\`

## Database Client

\`\`\`typescript
// lib/db.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
\`\`\`

## Server Actions untuk CRUD

### Create Action

\`\`\`typescript
// app/actions/posts.ts
'use server'

import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const authorId = formData.get('authorId') as string

  await prisma.post.create({
    data: {
      title,
      content,
      authorId,
    },
  })

  revalidatePath('/posts')
}
\`\`\`

### Read Data

\`\`\`typescript
// app/posts/page.tsx
import { prisma } from '@/lib/db'

async function getPosts() {
  return prisma.post.findMany({
    include: { author: true },
    orderBy: { createdAt: 'desc' },
  })
}

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>By {post.author.name}</p>
        </article>
      ))}
    </div>
  )
}
\`\`\`

### Update Action

\`\`\`typescript
'use server'

export async function updatePost(id: string, formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string

  await prisma.post.update({
    where: { id },
    data: { title, content },
  })

  revalidatePath('/posts')
  revalidatePath(\`/posts/\${id}\`)
}
\`\`\`

### Delete Action

\`\`\`typescript
'use server'

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: { id },
  })

  revalidatePath('/posts')
}
\`\`\`

## Form dengan Server Actions

\`\`\`typescript
// components/CreatePostForm.tsx
'use client'

import { createPost } from '@/app/actions/posts'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Creating...' : 'Create Post'}
    </button>
  )
}

export default function CreatePostForm({ authorId }: { authorId: string }) {
  return (
    <form action={createPost}>
      <input type="hidden" name="authorId" value={authorId} />

      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </div>

      <div>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows={5} />
      </div>

      <SubmitButton />
    </form>
  )
}
\`\`\`

## Validasi dengan Zod

\`\`\`typescript
// lib/validations.ts
import { z } from 'zod'

export const postSchema = z.object({
  title: z.string().min(3).max(100),
  content: z.string().optional(),
})

// Di server action
'use server'

import { postSchema } from '@/lib/validations'

export async function createPost(formData: FormData) {
  const rawData = {
    title: formData.get('title'),
    content: formData.get('content'),
  }

  const validatedData = postSchema.parse(rawData)

  // Proceed with validated data
  await prisma.post.create({
    data: validatedData,
  })
}
\`\`\`

## Authentication dengan NextAuth.js

\`\`\`typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/db'

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
})

export { handler as GET, handler as POST }
\`\`\`

## API Routes (Opsional)

Untuk kasus yang membutuhkan REST API:

\`\`\`typescript
// app/api/posts/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  const posts = await prisma.post.findMany()
  return NextResponse.json(posts)
}

export async function POST(request: Request) {
  const body = await request.json()

  const post = await prisma.post.create({
    data: body,
  })

  return NextResponse.json(post, { status: 201 })
}
\`\`\`

## Error Handling

\`\`\`typescript
// app/posts/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
\`\`\`

## Deployment

### Environment Variables

\`\`\`env
# .env.production
DATABASE_URL="postgresql://user:pass@host:5432/db"
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-secret-key"
\`\`\`

### Deploy ke Vercel

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Database Migration di Production

\`\`\`bash
npx prisma migrate deploy
\`\`\`

## Best Practices

1. **Gunakan Server Components** untuk data fetching
2. **Server Actions** untuk mutations (lebih aman dari API routes)
3. **Validasi di server** selalu, client-side validation hanya untuk UX
4. **Gunakan connection pooling** untuk database di serverless
5. **Cache aggressively** dengan revalidation strategies
6. **Error boundaries** di setiap level yang masuk akal

## Kesimpulan

Next.js dengan Server Components dan Server Actions memungkinkan kita membangun aplikasi full-stack dengan cara yang lebih sederhana dan type-safe. Dengan Prisma sebagai ORM, kita mendapatkan developer experience yang excellent dan database migrations yang reliable.
    `,
  },
]

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: ['Gugus Widiandito'],
      tags: article.tags,
    },
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      {/* Article Header */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-primary-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag, index) => (
                <span key={index} className="skill-badge">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400">
              <span>{formatDate(article.date)}</span>
              <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
              <span>{article.readTime} read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-custom">
          <article className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-slate-900 prose-pre:text-slate-100">
            <div dangerouslySetInnerHTML={{ __html: formatContent(article.content) }} />
          </article>
        </div>
      </section>

      {/* Author & Share */}
      <section className="py-12 border-t border-slate-200 dark:border-slate-700">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">G</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Gugus Widiandito</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Full Stack Developer with 7+ years of experience in building enterprise systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="py-16 bg-white dark:bg-slate-800/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">More Articles</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {articles
                .filter((a) => a.slug !== article.slug)
                .slice(0, 2)
                .map((a, index) => (
                  <Link key={index} href={`/blog/${a.slug}`} className="card card-hover group">
                    <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2">
                      {a.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                      {a.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function formatContent(content: string): string {
  // Basic markdown to HTML conversion
  let html = content
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Lists
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')

  // Wrap list items
  html = html.replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>')
  // Clean up nested ul tags
  html = html.replace(/<\/ul>\s*<ul>/g, '')

  return `<p>${html}</p>`
}
