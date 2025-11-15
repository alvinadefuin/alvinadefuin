import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Alvin Adefuin - AI Software Developer | Professional Portfolio",
    template: "%s | Alvin Adefuin Portfolio"
  },
  description: "Professional portfolio of Alvin Adefuin - AI Software Developer with expertise in RAG Systems, Full-stack Development, and AI-powered solutions. Showcasing Journey AI projects and KASAKA Agricultural App. Available for opportunities.",
  keywords: [
    "Alvin Adefuin",
    "AI Software Developer",
    "Full-stack Developer",
    "Python Developer",
    "Portfolio",
    "Software Developer",
    "RAG Systems",
    "AI Development",
    "Web Development",
    "Next.js",
    "React",
    "Preact",
    "Flask",
    "API Development",
    "Machine Learning",
    "Professional Portfolio",
    "Developer Portfolio",
    "Tech Portfolio",
    "Philippines Developer",
    "Laguna Developer",
    "GitHub Actions",
    "Sentry",
    "Agricultural Technology"
  ],
  authors: [
    {
      name: "Alvin Adefuin",
      url: "https://alvinadefuin-portfolio.vercel.app",
    },
  ],
  creator: "Alvin Adefuin",
  publisher: "Alvin Adefuin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alvinadefuin-portfolio.vercel.app",
    title: "Alvin Adefuin - AI Software Developer | Professional Portfolio",
    description: "Professional portfolio showcasing AI-powered projects including Journey AI with RAG systems and KASAKA Agricultural Application. Best in Thesis awardee available for new opportunities.",
    siteName: "Alvin Adefuin Portfolio",
    images: [
      {
        url: "https://alvinadefuin-portfolio.vercel.app/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Alvin Adefuin - Professional Portfolio with AI Chatbot",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvin Adefuin - AI Software Developer",
    description: "Professional portfolio showcasing AI projects, RAG systems, and full-stack development solutions. Available for opportunities.",
    creator: "@alvinadefuin",
    site: "@alvinadefuin",
    images: [{
      url: "https://alvinadefuin-portfolio.vercel.app/portfolio.png",
      alt: "Alvin Adefuin Professional Portfolio"
    }],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      }
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://alvinadefuin-portfolio.vercel.app",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "google-site-verification": "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://alvinadefuin-portfolio.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Alvin Adefuin",
              "jobTitle": "AI Software Developer",
              "url": "https://alvinadefuin-portfolio.vercel.app",
              "image": "https://alvinadefuin-portfolio.vercel.app/avatar.jpg",
              "sameAs": [
                "https://github.com/alvinadefuin",
                "https://linkedin.com/in/alvinadefuin"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Journey Better Business Group Inc."
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Laguna University"
              },
              "knowsAbout": [
                "AI Development",
                "RAG Systems",
                "Python Development",
                "Full Stack Development",
                "React Development",
                "API Development",
                "Flask",
                "Machine Learning",
                "Agricultural Technology"
              ],
              "description": "AI Software Developer with expertise in RAG systems, full-stack development, and AI-powered solutions. Best in Thesis awardee working at Journey Better Business Group Inc."
            })
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
