import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthContext from '@/components/context/AuthContext'
import ActiveStatus from '@/components/ActiveStatus'
import ToasterContext from '@/components/context/ToasterContext'
import { siteConfig } from '@/lib/siteConfig'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name} `,
  },
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
