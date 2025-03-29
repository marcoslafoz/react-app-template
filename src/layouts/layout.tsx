import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = props => {
  const { children } = props

  return <div className='flex items-center justify-center min-h-screen bg-gray-200'>{children}</div>
}
