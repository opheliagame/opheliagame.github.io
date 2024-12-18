import Meta from "../components/meta"
import '../styles/index.css'
import { Inter, Major_Mono_Display, Mansalva } from 'next/font/google';

// TODO make constants for site title and description
export const metadata = {
  title: 'opheliagame',
  description: 'Generated by Next.js',
}


const mansalva = Mansalva({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-mansalva'
}) 

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const majorMonoDisplay = Major_Mono_Display({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-major-mono-display'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${mansalva.variable} ${inter.variable} ${majorMonoDisplay.variable}`}>
      <Meta />
      <body>{children}</body>
    </html>
  )
}
