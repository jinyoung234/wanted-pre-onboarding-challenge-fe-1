import {postSignIn} from '@/apis'
import {FormInterface} from '@/types'
import {setStoredToken} from '@/utils'
import {useMutation} from '@tanstack/react-query'
import {AxiosError} from 'axios'
import {useRouter} from 'next/router'

function useSignInMutation() {
  const router = useRouter()
  const {mutate: postSignInMutate} = useMutation((userParams: FormInterface) => postSignIn(userParams), {
    onSuccess: ({data}) => {
      setStoredToken(data.token)
      router.push('/')
    },
    onError: (errorResponse: AxiosError<{details: string}>) => {
      if (errorResponse.message === 'Network Error') {
        alert(errorResponse.message)
        return
      }
      const ERROR_MESSAGE = errorResponse?.response?.data.details
      if (ERROR_MESSAGE) alert(ERROR_MESSAGE)
    },
  })
  return {postSignInMutate}
}

export default useSignInMutation
