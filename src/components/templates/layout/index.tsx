import {useRouter} from 'next/router'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({children}: LayoutProps) {
  const {pathname} = useRouter()
  const AuthStyle = pathname !== '/'
  return (
    <div
      className={
        AuthStyle
          ? 'max-w-xl mx-auto h-screen justify-center bg-slate-100 flex flex-col'
          : 'max-w-xl mx-auto min-h-screen h-[100%] bg-slate-100 flex flex-col'
      }
    >
      {children}
    </div>
  )
}

export default Layout
