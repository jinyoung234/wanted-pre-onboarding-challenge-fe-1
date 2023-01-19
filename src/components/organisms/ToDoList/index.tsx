import {Spinner} from '@/components/atoms'
import {ToDoCreateForm} from '@/components/molecules'
import dynamic from 'next/dynamic'
import React from 'react'

const ToDoCardList = dynamic(() => import('@/components/molecules/ToDoCardList'), {
  ssr: false,
  loading: () => <Spinner />,
})

const ToDoList = () => {
  return (
    <div className='w-full pb-6'>
      <ToDoCreateForm />
      <ToDoCardList />
    </div>
  )
}

export default ToDoList
