interface ModifyButtonProps {
  handleModify: () => void
}

const ModifyButton = ({handleModify}: ModifyButtonProps) => {
  return (
    <p
      onClick={handleModify}
      className='bg-orange-400 cursor-pointer flex justify-center items-center w-[4rem] h-[1.5rem] rounded-md text-[14px] text-white'
    >
      수정
    </p>
  )
}

export default ModifyButton
