import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import './globals.css'
import type { Metadata } from 'next'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'LiveDocs' ,
  description: 'Collaborative code editor',
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
          <main>{children}</main>
      </body>
    </html>
  )
}
