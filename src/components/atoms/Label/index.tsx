import {LayoutProps} from '@/types'
import {LabelHTMLAttributes} from 'react'

type LabelProps = LayoutProps &
  LabelHTMLAttributes<HTMLLabelElement> & {
    labelStyle: string
  }

const Label = ({labelStyle, children, htmlFor, ...rest}: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={labelStyle} {...rest}>
      {children}
    </label>
  )
}

export default Label
