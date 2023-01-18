import {LayoutProps} from '@/types'

const ToDoLayout = ({children}: LayoutProps) => {
  return <div className='flex flex-col relative mt-[4rem]'>{children}</div>
}

export default ToDoLayout
