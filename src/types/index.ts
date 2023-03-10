import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

interface ButtonProps {
  children: React.ReactNode
}

interface UserInterface {
  email: string
  password: string
}

interface FormInterface {
  [key: string]: string
}

interface ToDoInterface {
  title: string
  content: string
  id: string
  createdAt: string
  updatedAt: string
}

type CreateToDoType = Pick<ToDoInterface, 'title' | 'content'>

interface ToDoListDetailInterface {
  data: ToDoInterface
}

interface ResponseToDoListInterface {
  data: ToDoListInterface
}

interface ToDoListInterface {
  data: ToDoInterface[]
}

interface ToDoListContextInterface {
  handleSubmitTodo: (todo: CreateToDoType) => void
  handleViewDetailTodo: (id?: string) => void
}

interface MainPageContextInterface {
  todoList: ToDoListContextInterface
}

export type {
  LayoutProps,
  ButtonProps,
  UserInterface,
  FormInterface,
  ToDoInterface,
  ToDoListInterface,
  ToDoListDetailInterface,
  CreateToDoType,
  ResponseToDoListInterface,
  ToDoListContextInterface,
  MainPageContextInterface,
}
