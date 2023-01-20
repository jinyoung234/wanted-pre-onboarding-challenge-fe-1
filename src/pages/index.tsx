import {ToDoBoard, ToDoList} from '@/components/organisms'
import {useUser} from '@/hooks'
import {CreateToDoType} from '@/types'
import {Dimmed, ToDoLayout} from '@/wrappers'
import type {NextPage} from 'next'
import React from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useCreateTodo} from '@/queries'
import {MainPageContext} from '@/contexts'

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
  const handleViewDetailTodo = () => {
    setViewDetail(!viewDetail)
  }
  return (
    <FormProvider {...method}>
      <MainPageContext.Provider value={{todoList: {handleSubmitTodo, handleViewDetailTodo}}}>
        <ToDoLayout>
          <ToDoList />
          {viewDetail && (
            <>
              <Dimmed handleViewDetailTodo={handleViewDetailTodo} />
              <ToDoBoard todo={{createAt: '2022-01-17', title: '끝내주게 쉬기', content: '낮잠을 자며 쉰다'}} />
            </>
          )}
        </ToDoLayout>
      </MainPageContext.Provider>
    </FormProvider>
  )
}
export default Home
