import {getTodos} from '@/apis/main'
import {QUERY_KEY} from '@/constants'
import {ToDoInterface, ToDoListInterface} from '@/types'
import {useQuery} from '@tanstack/react-query'
import {AxiosError} from 'axios'

function useGetTodos() {
  const fallback: ToDoListInterface = {data: [] as ToDoInterface[]}
  const {
    data = fallback,
    isLoading,
    isError,
  } = useQuery([QUERY_KEY.TODO], getTodos, {
    onError: (errorResponse: AxiosError) => {
      if (errorResponse.message === 'Network Error') alert(errorResponse.message)
    },
  })
  const todos = data?.data
  return {todos, isLoading, isError}
}

export default useGetTodos
