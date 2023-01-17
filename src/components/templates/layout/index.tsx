import {classNames} from '@/utils'
import {useRouter} from 'next/router'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({children}: LayoutProps) {
  const {pathname} = useRouter()
  const AuthStyle = pathname !== '/' && classNames('justify-center')
  return <div className={`max-w-xl mx-auto h-screen bg-slate-100 flex flex-col ${AuthStyle}`}>{children}</div>
}

export default Layout
