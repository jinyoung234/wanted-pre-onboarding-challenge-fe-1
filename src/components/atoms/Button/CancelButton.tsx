interface CancelButtonProps {
  handleModify: () => void
}

const CancelButton = ({handleModify}: CancelButtonProps) => {
  return (
    <p
      className='bg-red-500 cursor-pointer flex justify-center items-center w-[4rem] h-[1.5rem] rounded-md text-[14px] text-white'
      onClick={handleModify}
    >
      취소
    </p>
  )
}

export default CancelButton
