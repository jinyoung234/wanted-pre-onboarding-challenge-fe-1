import {MainPageContextInterface, ToDoListProps} from '@/types'
import React from 'react'

export const MainPageContext = React.createContext<MainPageContextInterface>({
  todoList: {} as ToDoListProps,
})
