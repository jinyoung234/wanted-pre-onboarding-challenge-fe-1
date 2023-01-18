import {DUMMY_TODOCARD} from '@/constants'
import ToDoCard from '@/components/molecules/ToDoCard'

const ToDoCardList = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center'>
      {DUMMY_TODOCARD.map((todo, _) => (
        <ToDoCard todo={todo} key={_} />
      ))}
    </section>
  )
}

export default ToDoCardList
