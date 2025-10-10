import React from 'react'

export const metadata = {
  title: 'Button Test App',
  description: 'A simple app to test buttons with Cypress',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}