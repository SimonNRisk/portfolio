import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://simonsportfolio.vercel.app"),
  title: {
    default: "Simon Risk | Portfolio",
    template: "%s | Simon Risk",
  },
  description: "Portfolio of Simon Risk: projects, skills, and experience in software engineering.",
  keywords: ["Simon Risk", "Simon Risk portfolio", "software engineer", "Next.js", "TypeScript", "Queen's University"],
  authors: [{ name: "Simon Risk", url: "https://www.linkedin.com/in/simon-risk/" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Simon Risk | Portfolio",
    description: "Explore Simon Risk's projects, skills, and timeline in software engineering.",
    siteName: "Simon Risk",
    images: [
      {
        url: "/images/simon/simon.jpg",
        width: 1200,
        height: 630,
        alt: "Simon Risk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Risk | Portfolio",
    description: "Explore Simon Risk's projects, skills, and timeline in software engineering.",
    images: ["/images/simon/simon.jpg"],
    creator: "@SimonNRisk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/simon/simon.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Simon Risk",
              url: "https://simonsportfolio.vercel.app",
              image: "/images/simon/simon.jpg",
              sameAs: ["https://www.linkedin.com/in/simon-risk/", "https://github.com/SimonNRisk"],
              jobTitle: "Software Engineer / Applied Math",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Queen's University",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
