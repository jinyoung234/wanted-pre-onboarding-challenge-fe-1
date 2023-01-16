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

export type {LayoutProps, ButtonProps, UserInterface, FormInterface}
