import React, {InputHTMLAttributes} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  type: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({type, placeholder, ...rest}: InputProps, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      ref={ref}
      className='m-2 w-[20rem] h-[2.5rem] rounded-[0.5rem] px-2'
      {...rest}
    />
  )
})

Input.displayName = 'Input'

export default Input
