import {DetailButton} from '@/components/atoms'
import {MainPageContext} from '@/contexts'
import React from 'react'

interface ToDoCardProps {
  todo: any
}

const ToDoCard = ({todo}: ToDoCardProps) => {
  const {
    todoList: {handleViewDetailTodo},
  } = React.useContext(MainPageContext)
  return (
    <div className='flex w-[20rem] h-[6rem] bg-slate-50 m-2 rounded-lg'>
      <div className='flex flex-col justify-center w-[50%] p-3'>
        <p className='text-gray-500 text-[14px] my-1'>제목 - {todo.title}</p>
        <p className='text-gray-500 text-[14px]'>내용 - {todo.content}</p>
      </div>
      <div className='flex items-center justify-end w-[50%] p-3'>
        <DetailButton handleViewDetailTodo={() => handleViewDetailTodo(todo.id)}>상세 보기</DetailButton>
      </div>
    </div>
  )
}

export default ToDoCard
