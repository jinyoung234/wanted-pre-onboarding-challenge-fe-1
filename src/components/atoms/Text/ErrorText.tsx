interface ErrorTextProps {
  errorContent: string
}

const ErrorText = ({errorContent}: ErrorTextProps) => {
  return <p className='w-[20rem] text-red-500 text-[12px]'>{errorContent}</p>
}

export default ErrorText
