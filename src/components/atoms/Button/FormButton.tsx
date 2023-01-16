import {ButtonProps} from '@/types'

const FormButton = ({children}: ButtonProps) => {
  return <button className='bg-blue-500 w-[6rem] h-[2rem] mt-5 text-white rounded-lg'>{children}</button>
}

export default FormButton
