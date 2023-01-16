import {postSignUp} from '@/apis'
import {FormInterface} from '@/types'
import {useMutation} from '@tanstack/react-query'
import {AxiosError} from 'axios'
import {useRouter} from 'next/router'

function useSignUpMutation() {
  const router = useRouter()
  const {mutate: postSignUpMutate} = useMutation((userParams: FormInterface) => postSignUp(userParams), {
    onSuccess: () => {
      router.push('/sign-in')
    },
    onError: (errorResponse: AxiosError<{details: string}>) => {
      if (errorResponse.message === 'Network Error') {
        alert(errorResponse.message)
        return
      }
      const errorMessage = errorResponse.response?.data.details
      if (errorResponse) {
        alert(errorMessage)
        return
      }
    },
  })
  return {postSignUpMutate}
}

export default useSignUpMutation
