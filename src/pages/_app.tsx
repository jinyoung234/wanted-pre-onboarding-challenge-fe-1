import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {NextPage} from 'next'
import type {AppProps} from 'next/app'
import React from 'react'
import {RecoilRoot} from 'recoil'
import '@/styles/globals.css'
import {Layout} from '@/components/templates'
import {NavBar} from '@/components/organisms'
import {useRouter} from 'next/router'

const App: NextPage<AppProps> = ({Component, pageProps}: AppProps) => {
  const router = useRouter()
  const isMain = router.pathname === '/'
  const queryClient = new QueryClient()
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Layout>
          {isMain && <NavBar />}
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
