import React, {InputHTMLAttributes} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string
  placeholder: string
  type: string
  inputStyle: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({defaultValue, type, placeholder, inputStyle, ...rest}: InputProps, ref) => {
    return (
      <input
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        ref={ref}
        className={inputStyle}
        {...rest}
      />
    )
  },
)

Input.displayName = 'Input'

export default Input
