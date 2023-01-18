import {ToDoBoard, ToDoList} from '@/components/organisms'
import {useUser} from '@/hooks'
import {Dimmed, ToDoLayout} from '@/wrappers'
import type {NextPage} from 'next'

const Home: NextPage = () => {
  useUser()
  return (
    <ToDoLayout>
      <ToDoList />
      <Dimmed />
      <ToDoBoard todo={{createAt: '2022-01-17', title: '끝내주게 쉬기', content: '낮잠을 자며 쉰다'}} />
    </ToDoLayout>
  )
}
export default Home
