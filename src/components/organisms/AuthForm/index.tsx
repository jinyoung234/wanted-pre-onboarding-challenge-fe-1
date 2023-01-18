import {ErrorText, FormButton} from '@/components/atoms'
import Input from '@/components/atoms/Input'
import {FormLayout, InputLayout} from '@/wrappers'
import {AuthContext} from '@/wrappers/auth/Auth.layout'
import React from 'react'
import {useFormContext} from 'react-hook-form'

interface AuthFormProps {
  btnContent: string
}

const AuthForm = ({btnContent}: AuthFormProps) => {
  const {
    inputProps: {email, password},
    formProps: {handleValidAuth, authFormStyle},
  } = React.useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useFormContext()
  return (
    <FormLayout formStyle={authFormStyle} handleSubmit={handleSubmit(handleValidAuth)}>
      <InputLayout>
        <Input
          inputStyle='m-2 w-[20rem] h-[2.5rem] rounded-[0.5rem] px-2 text-[12px]'
          type={email.type}
          {...register('email')}
          placeholder={email.placeholder}
        />
        {errors?.email && <ErrorText errorContent={errors?.email?.message as string} />}
      </InputLayout>
      <InputLayout>
        <Input
          inputStyle='m-2 w-[20rem] h-[2.5rem] rounded-[0.5rem] px-2 text-[12px]'
          type={password.type}
          {...register('password')}
          placeholder={password.placeholder}
        />
        {errors?.password && <ErrorText errorContent={errors?.password?.message as string} />}
      </InputLayout>
      <FormButton>{btnContent}</FormButton>
    </FormLayout>
  )
}

export default AuthForm
