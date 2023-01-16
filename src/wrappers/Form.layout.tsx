import {LayoutProps} from '@/types'
import React from 'react'

type FormLayoutProps = LayoutProps & {
  handleSubmit?: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
}

const FormLayout = ({children, handleSubmit}: FormLayoutProps) => {
  return (
    <form className={'w-full flex flex-col items-center'} onSubmit={handleSubmit}>
      {children}
    </form>
  )
}

export default FormLayout
