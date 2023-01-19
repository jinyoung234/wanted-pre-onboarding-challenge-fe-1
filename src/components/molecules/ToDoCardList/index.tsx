import {useGetTodos} from '@/queries'
import React from 'react'
import {ToDoCard} from '@/components/molecules'

const ToDoCardList = () => {
  const {todos} = useGetTodos()
  return (
    <section className='w-full flex flex-col items-center justify-center'>
      {todos.map((todo, _) => (
        <ToDoCard todo={todo} key={_} />
      ))}
    </section>
  )
}

export default ToDoCardList
