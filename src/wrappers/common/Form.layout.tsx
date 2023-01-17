import {LayoutProps} from '@/types'
import React from 'react'

type FormLayoutProps = LayoutProps & {
  formStyle?: string
  handleSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
}

const FormLayout = ({children, formStyle, handleSubmit}: FormLayoutProps) => {
  return (
    <form className={formStyle} onSubmit={handleSubmit}>
      {children}
    </form>
  )
}

export default FormLayout
