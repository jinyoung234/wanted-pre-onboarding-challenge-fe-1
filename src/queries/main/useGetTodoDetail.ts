import {useQuery} from '@tanstack/react-query'
import {AxiosError} from 'axios'
import React from 'react'
import {useGetTodos} from '@/queries'
import {ToDoInterface, ToDoListDetailInterface} from '@/types'
import {QUERY_KEY} from '@/constants'
import {getTodosDetail} from '@/apis'

function useGetTodoDetail() {
  const {todos} = useGetTodos()
  const initialTodo = todos[0]?.id
  const [todoId = initialTodo, setTodoId] = React.useState<string>()
  const fallback: ToDoListDetailInterface = {data: {} as ToDoInterface}
  const {data = fallback} = useQuery([QUERY_KEY.TODO, todoId], () => getTodosDetail(todoId), {
    enabled: !!todoId,
    onError: (errorResponse: AxiosError<{details: string}>) => {
      if (errorResponse.message === 'Network Error') {
        alert(errorResponse.message)
        return
      }
      const STATUS_400_ERROR = errorResponse?.response?.status
      const ERROR_MESSAGE = errorResponse?.response?.data.details
      if (STATUS_400_ERROR) alert(ERROR_MESSAGE)
    },
  })
  const {title, content, createdAt, id} = data?.data
  const todoDetail = {createdAt: createdAt?.split('T')[0], title, content, id}

  return {todoDetail, todoId, setTodoId}
}

export default useGetTodoDetail
