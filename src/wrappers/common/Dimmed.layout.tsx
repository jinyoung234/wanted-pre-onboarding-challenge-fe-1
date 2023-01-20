interface DimmedProps {
  handleViewDetailTodo?: () => void
}
const Dimmed = ({handleViewDetailTodo}: DimmedProps) => {
  return (
    <div onClick={handleViewDetailTodo} className='fixed top-0 w-[36rem] h-full z-[998] opacity-60 bg-[#191919]'></div>
  )
}

export default Dimmed
