import {useGetTodos} from '@/queries'
import React from 'react'
import ToDoCard from '@/components/molecules/ToDoCard'
import {Spinner} from '@/components/atoms'

const ToDoCardList = () => {
  const {todos, isLoading} = useGetTodos()
  if (isLoading) return <Spinner />
  return (
    <section className='w-full flex flex-col items-center justify-center'>
      {todos.map((todo, _) => (
        <ToDoCard todo={todo} key={_} />
      ))}
    </section>
  )
}

export default ToDoCardList
