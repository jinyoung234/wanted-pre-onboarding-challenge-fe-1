import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({children}: LayoutProps) {
  return <div className='max-w-xl mx-auto h-screen bg-slate-100 flex'>{children}</div>
}

export default Layout
