import {createTodos} from '@/apis'
import {QUERY_KEY} from '@/constants'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {AxiosError} from 'axios'
import {CreateToDoType} from '../../types'

function useCreateTodo() {
  const queryClient = useQueryClient()
  const {mutate: requestCreateTodo} = useMutation((userToDo: CreateToDoType) => createTodos(userToDo), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.TODO])
      alert('등록이 완료되었습니다 :)')
    },
    onError: (errorResponse: AxiosError) => {
      if (errorResponse.message === 'Network Error') alert(errorResponse.message)
    },
  })
  return {requestCreateTodo}
}

export default useCreateTodo
