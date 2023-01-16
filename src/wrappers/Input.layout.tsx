import {LayoutProps} from '@/types'
import React from 'react'

const InputLayout = ({children}: LayoutProps) => {
  return <div className={'w-full flex flex-col items-center'}>{children}</div>
}

export default InputLayout
