import {getStoredToken} from '@/utils'
import {AxiosError} from 'axios'
import {client} from '@/apis'
import {END_POINT} from '@/constants'
import {CreateToDoType, ResponseToDoListInterface, ToDoListDetailInterface, ToDoListInterface} from '@/types'

interface ErrorMessageInterface {
  details: string
}

const getTodosDetail: (todoId: string) => Promise<ToDoListDetailInterface> = async (todoId: string) => {
  if (!todoId) return null
  const accessToken = getStoredToken()
  const {data} = await client.get(`${END_POINT.GET_TODOS}/${todoId}`, {
    headers: {
      Authorization: accessToken,
    },
  })
  return data
}

const deleteTodo = async (token: string, id: string) => {
  try {
    const response = await client.delete(`${END_POINT.DELETE_DELETE_TODO}${id}`, {
      headers: {
        Authorization: token,
      },
    })
    return response.data
  } catch (error) {
    const {response} = error as unknown as AxiosError
    const {details} = response?.data as unknown as ErrorMessageInterface
    if (response?.status === 400) alert(details)
  }
}

const updateTodo = async (token: string, config: object, id: string) => {
  try {
    const response = await client.put(`${END_POINT.PUT_UPDATE_TODO}${id}`, config, {
      headers: {
        Authorization: token,
      },
    })
    return response.data
  } catch (error) {
    const {response} = error as unknown as AxiosError
    const {details} = response?.data as unknown as ErrorMessageInterface
    if (response?.status === 400) alert(details)
  }
}

const createTodos = async (userTodo: CreateToDoType) => {
  const accessToken = getStoredToken()
  await client.post(END_POINT.POST_CREATE_TODO, userTodo, {
    headers: {
      Authorization: accessToken,
    },
  })
}

const getTodos: () => Promise<ToDoListInterface> = async () => {
  const accessToken = getStoredToken()
  const {data}: ResponseToDoListInterface = await client.get(END_POINT.GET_TODOS, {
    headers: {
      Authorization: accessToken,
    },
  })
  return data
}

export {getTodos, createTodos, updateTodo, deleteTodo, getTodosDetail}
