import React, {TextareaHTMLAttributes} from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string
  textareaStyle: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({placeholder, textareaStyle, ...rest}: TextareaProps, ref) => {
    return <textarea ref={ref} placeholder={placeholder} className={textareaStyle} {...rest} />
  },
)

Textarea.displayName = 'Textarea'

export default Textarea
