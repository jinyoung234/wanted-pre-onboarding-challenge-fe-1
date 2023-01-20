import {updateTodo} from '@/apis'
import {QUERY_KEY} from '@/constants'
import {CreateToDoType} from '@/types'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {AxiosError} from 'axios'
import {useRouter} from 'next/router'

const useModifyTodo = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const {mutate: requestModifyTodo} = useMutation(
    (modifyConfig: CreateToDoType & {id: string}) =>
      updateTodo(modifyConfig.id, {title: modifyConfig.title, content: modifyConfig.content}),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY.TODO])
        alert('수정이 완료되었습니다.')
        router.reload()
      },
      onError: (errorResponse: AxiosError) => {
        if (errorResponse?.message === 'Network Error') alert(errorResponse?.message)
      },
    },
  )
  return {requestModifyTodo}
}

export default useModifyTodo
