import {getStoredToken} from '@/utils'
import {client} from '@/apis'
import {END_POINT} from '@/constants'
import {CreateToDoType, ResponseToDoListInterface, ToDoListDetailInterface, ToDoListInterface} from '@/types'

const getTodosDetail: (todoId: string) => Promise<ToDoListDetailInterface> = async (todoId: string) => {
  const accessToken = getStoredToken()
  if (!todoId || !accessToken) return
  const {data} = await client.get(`${END_POINT.GET_TODOS}/${todoId}`, {
    headers: {
      Authorization: accessToken,
    },
  })
  return data
}

const deleteTodo = async (id: string) => {
  const accessToken = getStoredToken()
  await client.delete(`${END_POINT.DELETE_DELETE_TODO}${id}`, {
    headers: {
      Authorization: accessToken,
    },
  })
}

const updateTodo: (id: string, modifyTodo: CreateToDoType) => Promise<ToDoListDetailInterface> = async (
  id: string,
  modifyTodo: CreateToDoType,
) => {
  const accessToken = getStoredToken()
  const {data} = await client.put(`${END_POINT.PUT_UPDATE_TODO}${id}`, modifyTodo, {
    headers: {
      Authorization: accessToken,
    },
  })
  return data
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
