import {LayoutProps} from '@/types'
import React from 'react'

const ToDoLayout = ({children}: LayoutProps) => {
  return <div className='flex flex-col mt-[4rem] relative'>{children}</div>
}

export default ToDoLayout
