import {DetailButton} from '@/components/atoms'

const ToDoCard = ({todo}: any) => {
  return (
    <div className='flex w-[20rem] h-[6rem] bg-slate-50 m-2 rounded-lg'>
      <div className='flex flex-col justify-center w-[50%] p-3'>
        <p className='text-gray-500 text-[14px]'>Date - {todo.createAt}</p>
        <p className='text-gray-500 text-[14px] my-1'>제목 - {todo.title}</p>
        <p className='text-gray-500 text-[14px]'>내용 - {todo.content}</p>
      </div>
      <div className='flex items-center justify-end w-[50%] p-3'>
        <DetailButton>상세 보기</DetailButton>
      </div>
    </div>
  )
}

export default ToDoCard
