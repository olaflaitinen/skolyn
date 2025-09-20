import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Skolyn - Clarity in the Complex | AI-Powered Medical Diagnostics',
  description: 'Skolyn is a clinical co-pilot, leveraging transparent AI to augment diagnostic accuracy and efficiency for radiologists and improve patient outcomes.',
  keywords: 'AI in radiology, explainable AI medical, radiology workflow software, medical AI diagnostics, clinical decision support',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}