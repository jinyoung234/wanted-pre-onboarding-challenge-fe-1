import React from 'react'

interface TextProps {
  children: React.ReactNode
  textStyle: string
}

const Text = ({children, textStyle}: TextProps) => {
  return <h2 className={textStyle}>{children}</h2>
}

export default Text
