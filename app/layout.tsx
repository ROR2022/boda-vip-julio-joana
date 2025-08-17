import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from '@/components/theme/ThemeProvider'

export const metadata: Metadata = {
  title: 'Boda VIP Joana Yasmin & Julio Yael',
  description: 'Boda VIP Joana Yasmin & Julio Yael',
  generator: 'Boda VIP Joana Yasmin & Julio Yael',
  // Next.js 15 detecta automáticamente favicon.ico, icon.png y apple-icon.png en /app
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
