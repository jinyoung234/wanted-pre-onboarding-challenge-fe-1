interface DeleteButtonProps {
  handleDeleteTodo: () => void
}

const DeleteButton = ({handleDeleteTodo}: DeleteButtonProps) => {
  return (
    <p
      onClick={handleDeleteTodo}
      className='flex justify-center items-center cursor-pointer bg-red-500 w-[4rem] h-[1.5rem] rounded-md text-[14px] text-white'
    >
      삭제
    </p>
  )
}

export default DeleteButton
