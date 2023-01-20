import {ToDoList} from '@/components/organisms'
import {useUser} from '@/hooks'
import {CreateToDoType, FormInterface} from '@/types'
import {Dimmed, ToDoLayout} from '@/wrappers'
import type {NextPage} from 'next'
import React from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useCreateTodo, useModifyTodo} from '@/queries'
import {MainPageContext} from '@/contexts'
import useGetTodoDetail from '@/queries/main/useGetTodoDetail'
import dynamic from 'next/dynamic'

const ToDoBoard = dynamic(() => import('@/components/organisms').then(mod => mod.ToDoBoard), {
  ssr: false,
})

const Home: NextPage = () => {
  useUser()
  const schema = yup.object().shape({
    title: yup.string().required('제목을 입력해주세요.'),
    content: yup.string().required('내용을 입력해주세요.'),
  })
  const method = useForm<CreateToDoType>({defaultValues: {title: '', content: ''}, resolver: yupResolver(schema)})

  const {requestCreateTodo} = useCreateTodo()
  const handleSubmitTodo = (todo: CreateToDoType) => {
    requestCreateTodo(todo)
    method.reset()
  }
  const [viewDetail, setViewDetail] = React.useState(false)
  const {todoDetail, todoId, setTodoId} = useGetTodoDetail()
  const handleViewDetailTodo = (id?: string) => {
    setViewDetail(!viewDetail)
    if (id && typeof id === 'string') setTodoId(id)
  }
  const [modify, setModify] = React.useState(false)
  const handleModifyTodo = () => {
    setModify(!modify)
  }
  const {requestModifyTodo} = useModifyTodo(setModify)
  const handleValidModify = (modifyTodo: FormInterface) => {
    const [title, content] = Object.values(modifyTodo)
    if (!title) {
      alert('제목을 입력해주세요')
      return
    }
    if (!content) {
      alert('내용을 입력해주세요')
      return
    }
    requestModifyTodo({
      id: todoId,
      title,
      content,
    })
  }
  return (
    <FormProvider {...method}>
      <MainPageContext.Provider
        value={{
          todoList: {handleSubmitTodo, handleViewDetailTodo},
        }}
      >
        <ToDoLayout>
          <ToDoList />
          {viewDetail && (
            <>
              <Dimmed handleViewDetailTodo={handleViewDetailTodo} />
              <ToDoBoard
                handleValidModify={handleValidModify}
                handleViewDetailTodo={handleViewDetailTodo}
                modify={modify}
                handleModifyTodo={handleModifyTodo}
                todoDetail={todoDetail}
              />
            </>
          )}
        </ToDoLayout>
      </MainPageContext.Provider>
    </FormProvider>
  )
}
export default Home
