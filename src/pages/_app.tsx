import Layout from '@/Layout'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {NextPage} from 'next'
import type {AppProps} from 'next/app'
import React from 'react'
import {RecoilRoot} from 'recoil'
import '@/styles/globals.css'

const App: NextPage<AppProps> = ({Component, pageProps}: AppProps) => {
  const queryClient = new QueryClient()
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
