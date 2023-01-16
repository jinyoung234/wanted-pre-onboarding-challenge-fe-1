interface InputProps {
  placeholder: string
}

const Input = ({placeholder, ...rest}: InputProps) => {
  return <input placeholder={placeholder} {...rest} className='m-2 w-[20rem] h-[2.5rem] rounded-[0.5rem] px-2' />
}

export default Input
