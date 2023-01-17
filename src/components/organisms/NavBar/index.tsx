import {Svg} from '@/components/atoms'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='fixed flex justify-between top-0 w-[36rem] h-[4rem] border-solid border border-[#d8dcd4] bg-white '>
      <ul className='flex items-center justify-start w-[50%] pl-6'>
        <Svg alt='icon' src={'/images/chevron-left.jpeg'} />
      </ul>
      <ul className='flex items-center justify-end w-[50%] pr-6'>
        <span className='text-gray-500'>로그 아웃</span>
      </ul>
    </nav>
  )
}

export default NavBar
