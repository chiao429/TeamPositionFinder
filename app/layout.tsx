import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '小隊查詢系統',
  description: '快速查詢小隊編號與隊長資訊',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
