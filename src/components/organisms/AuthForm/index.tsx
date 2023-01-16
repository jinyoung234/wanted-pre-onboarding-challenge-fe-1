import {FormButton, Input} from '@/components/atoms'
import {FormLayout} from '@/wrappers'
import {AuthContext} from '@/wrappers/Auth.layout'
import React from 'react'

interface AuthFormProps {
  btnContent: string
}

const AuthForm = ({btnContent}: AuthFormProps) => {
  const {
    inputProps: {id, pw},
  } = React.useContext(AuthContext)
  return (
    <FormLayout>
      <Input placeholder={id.placeholder} />
      <Input placeholder={pw.placeholder} />
      <FormButton>{btnContent}</FormButton>
    </FormLayout>
  )
}

export default AuthForm
