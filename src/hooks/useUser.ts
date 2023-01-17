import {getStoredToken} from '@/utils'
import {useRouter} from 'next/router'
import React from 'react'

const useUser = () => {
  const router = useRouter()
  React.useEffect(() => {
    const accessToken = getStoredToken()
    if (!accessToken) {
      alert('다시 로그인해주세요.')
      router.push('/sign-in')
    }
  }, [router, router.reload])
}

export default useUser
