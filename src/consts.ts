import type { Site, Page, Links, Socials } from "@types"
const base = import.meta.env.BASE_URL


// Global
export const SITE: Site = {
  TITLE: "Keep Dev",
  DESCRIPTION: "Software Development and Engineering",
  AUTHOR: "Artem Shar",
}

// BASE URL
export const BASE_URL: string = "keepdev"

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: `${base}`, 
  },
  { 
    TEXT: "Blog", 
    HREF: `${base}/blog`, 
  },
  { 
    TEXT: "Projects", 
    HREF: `${base}/projects`, 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "artem.ude@gmail.com",
    HREF: "mailto:artem.ude@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "artemshar",
    HREF: "https://github.com/artemshar"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "artemshar",
    HREF: "https://www.linkedin.com/in/artemshar",
  },
]

