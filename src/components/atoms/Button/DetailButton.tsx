import {LayoutProps} from '@/types'

type DetailButtonProps = LayoutProps
const DetailButton = ({children}: DetailButtonProps) => {
  return <button className='w-[4rem] bg-purple-400 rounded-md h-[2rem] text-[14px] text-white p-1'>{children}</button>
}

export default DetailButton
