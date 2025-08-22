import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Albert Castro Albacete',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html  data-theme="dark" lang="en" className="scroll-smooth [background-color:var(--color-theme)] [color:var(--color-text)]">
      <body
        className={`${outfit.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
