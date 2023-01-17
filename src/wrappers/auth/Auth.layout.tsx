import {FormInterface, LayoutProps} from '@/types'
import React from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useRouter} from 'next/router'
import {useSignInMutation, useSignUpMutation} from '@/queries'

interface FormPropsInterface {
  handleValidAuth: (data: FormInterface) => void
}
interface InputPropsInterface {
  email: {placeholder: string; type: string}
  password: {placeholder: string; type: string}
}
interface AuthContextInterface {
  inputProps: InputPropsInterface
  formProps: FormPropsInterface
}

export const AuthContext = React.createContext<AuthContextInterface>({
  inputProps: {} as InputPropsInterface,
  formProps: {} as FormPropsInterface,
})

const AuthLayout = ({children}: LayoutProps) => {
  const schema = yup.object().shape({
    email: yup.string().email('이메일 형식을 올바르게 입력해주세요').required('이메일을 입력해주세요.'),
    password: yup.string().min(8, '비밀번호를 8자리 이상 입력해주세요.').required('비밀 번호를 입력해주세요.'),
  })
  const method = useForm<FormInterface>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })
  const inputProps: InputPropsInterface = {
    email: {
      placeholder: '이메일',
      type: 'text',
    },
    password: {
      placeholder: '비밀번호',
      type: 'password',
    },
  }
  const {postSignUpMutate} = useSignUpMutation()
  const handleValidSignUp = (userInfo: FormInterface) => {
    postSignUpMutate(userInfo)
  }
  const {postSignInMutate} = useSignInMutation()
  const handleValidSignIn = (userInfo: FormInterface) => {
    postSignInMutate(userInfo)
  }
  const {pathname} = useRouter()
  const handleValidAuth = pathname === '/sign-up' ? handleValidSignUp : handleValidSignIn
  const formProps: FormPropsInterface = {
    handleValidAuth,
  }
  return (
    <FormProvider {...method}>
      <AuthContext.Provider value={{inputProps, formProps}}>
        <div className='w-full flex flex-col justify-center items-center'>{children}</div>
      </AuthContext.Provider>
    </FormProvider>
  )
}

export default AuthLayout
