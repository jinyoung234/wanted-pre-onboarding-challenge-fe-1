import {Text} from '@/components/atoms'
import {AuthForm} from '@/components/organisms'
import {AuthLayout} from '@/wrappers'

interface AuthTemplateProps {
  textContent: string
  btnContent: string
}

const AuthTemplate = ({textContent, btnContent}: AuthTemplateProps) => {
  return (
    <AuthLayout>
      <Text textStyle='text-[2rem] mb-5'>{textContent}</Text>
      <AuthForm btnContent={btnContent} />
    </AuthLayout>
  )
}

export default AuthTemplate
