import {deleteTodo} from '@/apis'
import {QUERY_KEY} from '@/constants'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {AxiosError} from 'axios'
import {useRouter} from 'next/router'

const useDeleteTodo = (id: string) => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const {mutate: requestDeleteTodo} = useMutation((id: string) => deleteTodo(id), {
    onSuccess: () => {
      alert('삭제가 완료되었습니다.')
      router.reload()
      queryClient.invalidateQueries([QUERY_KEY.TODO])
    },
    onError: (errorResponse: AxiosError) => {
      if (errorResponse?.message === 'Network Error') alert(errorResponse?.message)
    },
  })
  const handleDeleteTodo = () => {
    requestDeleteTodo(id)
  }
  return {handleDeleteTodo}
}

export default useDeleteTodo
