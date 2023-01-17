import Image from 'next/image'
import React from 'react'

interface SvgProps {
  alt: string
  src: string
  svgStyle?: string
}

const Svg = ({svgStyle, alt, src}: SvgProps) => {
  return <Image className={svgStyle} width={24} height={24} alt={alt} src={src} />
}

export default Svg
