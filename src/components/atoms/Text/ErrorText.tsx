import {classNames} from '@/utils'

interface ErrorTextProps {
  errorContent: string
  extraStyle?: string
}

const ErrorText = ({errorContent, extraStyle}: ErrorTextProps) => {
  return <p className={`w-[20rem] text-red-500 text-[12px] ${extraStyle && classNames(extraStyle)}`}>{errorContent}</p>
}

export default ErrorText
