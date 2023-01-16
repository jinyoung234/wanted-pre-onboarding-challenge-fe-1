import {LayoutProps} from '@/types'
import React from 'react'

interface InputPropsInterface {
  id: {placeholder: string}
  pw: {placeholder: string}
}
interface AuthContextInterface {
  inputProps: InputPropsInterface
}

export const AuthContext = React.createContext<AuthContextInterface>({
  inputProps: {} as InputPropsInterface,
})

const AuthLayout = ({children}: LayoutProps) => {
  const inputProps = {
    id: {
      placeholder: '아이디',
    },
    pw: {
      placeholder: '비밀번호',
    },
  }
  return (
    <AuthContext.Provider value={{inputProps}}>
      <div className='w-full flex flex-col justify-center items-center'>{children}</div>
    </AuthContext.Provider>
  )
}

export default AuthLayout
