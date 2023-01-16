import {END_POINT} from '@/constants'
import {client} from '@/apis'
import {FormInterface} from '@/types'

interface UserInterface {
  email: string
  password: string
}

interface ResponseDataInterface {
  message: string
  token: string
}

interface ResponseInterface {
  data: ResponseDataInterface
  status: number
}

async function postSignUp(userParams: FormInterface): Promise<ResponseInterface> {
  const {data, status}: ResponseInterface = await client.post(END_POINT.POST_SIGN_UP, userParams)
  return {data, status}
}

async function postSignIn(userParams: UserInterface): Promise<ResponseInterface> {
  const {data, status}: ResponseInterface = await client.post(END_POINT.POST_SIGN_IN, userParams)
  return {data, status}
}

export {postSignUp, postSignIn}
