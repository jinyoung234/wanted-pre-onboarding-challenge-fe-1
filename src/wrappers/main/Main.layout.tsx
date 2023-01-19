import {CreateToDoType, LayoutProps} from '@/types'
import React from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useCreateTodo} from '@/queries'
interface ToDoListProps {
  handleSubmitTodo: (todo: CreateToDoType) => void
}
interface MainPageContextInterface {
  todoList: ToDoListProps
}

export const MainPageContext = React.createContext<MainPageContextInterface>({
  todoList: {} as ToDoListProps,
})

const ToDoLayout = ({children}: LayoutProps) => {
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
  return (
    <FormProvider {...method}>
      <MainPageContext.Provider value={{todoList: {handleSubmitTodo}}}>
        <div className='flex flex-col mt-[4rem] relative'>{children}</div>
      </MainPageContext.Provider>
    </FormProvider>
  )
}

export default ToDoLayout
