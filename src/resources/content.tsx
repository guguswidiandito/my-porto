import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Gugus",
  lastName: "Widiandito",
  name: `Gugus Widiandito`,
  role: "Web Developer",
  avatar: "/images/avatars.jpg",
  email: "guguswidiandito@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/guguswidiandito",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/guguswidiandito",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/guguswidiandito/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@guguswidiandito",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building reliable systems for risk and audit</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Enterprise Systems</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/enterprise-risk-and-audit-management-system",
  },
  subline: (
    <>
      I'm {person.name}, a web developer specializing in{" "}
      <Text as="span" size="xl" weight="strong">
        ERM & Audit Management Systems
      </Text>
      .<br />
      I build scalable enterprise applications using Laravel and modern
      JavaScript frameworks, turning complex governance workflows into
      efficient digital solutions.
    </>
  ),
};


const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Gugus is a Jakarta-based web developer specializing in Enterprise Risk Management (ERM) and Audit Management Systems. He focuses on building scalable, secure, and maintainable web applications using Laravel and React, translating complex governance, risk, and compliance workflows into efficient, user-friendly digital solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "PT Tri Nindya Utama",
        timeframe: "2018 - Present",
        role: "Senior Web Developer",
        achievements: [
          <>
            Led the development and modernization of ERM and Audit Management System interfaces,
            improving usability and reducing user processing time by over 25%.
          </>,
          <>
            Optimized backend and frontend performance using Laravel and React,
            resulting in faster page load times and more reliable large-scale enterprise workflows.
          </>,
        ],

        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "STMIK YMI Tegal",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Laravel",
        description: (
          <>Building robust backend systems for ERM and Audit Management applications with clean architecture and secure data handling.</>
        ),
        tags: [
          { name: "PHP", icon: "php" },
          { name: "Laravel", icon: "laravel" },
        ],
        images: [],
      },
      {
        title: "React",
        description: (
          <>Developing scalable and maintainable frontend applications with complex business workflows and dynamic user interfaces.</>
        ),
        tags: [
          { name: "JavaScript", icon: "javascript" },
          { name: "React", icon: "react" },
        ],
        images: [],
      },
      {
        title: "TypeScript",
        description: (
          <>Writing type-safe, predictable code to improve maintainability and reduce runtime errors in large-scale applications.</>
        ),
        tags: [
          { name: "TypeScript", icon: "typescript" },
        ],
        images: [],
      },
      {
        title: "Next.js",
        description: (
          <>Building modern web applications with server-side rendering, optimized performance, and clean routing architecture.</>
        ),
        tags: [
          { name: "Next.js", icon: "nextjs" },
          { name: "React", icon: "react" },
        ],
        images: [],
      },
      {
        title: "Node.js",
        description: (
          <>Creating APIs and background services to support frontend applications and system integrations.</>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
        ],
        images: [],
      },
      {
        title: "Vue.js",
        description: (
          <>Developing lightweight and reactive user interfaces for internal tools and enterprise dashboards.</>
        ),
        tags: [
          { name: "Vue.js", icon: "vue" },
        ],
        images: [],
      },
    ],

  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
