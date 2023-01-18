import {ToDoCardList, ToDoCreateForm} from '@/components/molecules'
import React from 'react'

const ToDoList = () => {
  return (
    <div className='w-full pb-6'>
      <ToDoCreateForm />
      <ToDoCardList />
    </div>
  )
}

export default ToDoList
