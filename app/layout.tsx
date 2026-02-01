import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Outfit, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Prateek Bansal | Software Engineer & Cloud Architect',
  description: 'Software Engineer with expertise in AI, Cloud Architecture, and distributed systems. GCP Professional Cloud Architect certified.',
  keywords: ['Software Engineer', 'Cloud Architect', 'AI', 'Java', 'Python', 'GCP', 'React', 'Spring Boot'],
  authors: [{ name: 'Prateek Bansal' }],
  openGraph: {
    title: 'Prateek Bansal | Software Engineer & Cloud Architect',
    description: 'Building robust backend services and modern web applications',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0f1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} ${outfit.variable} ${ibmPlexSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
