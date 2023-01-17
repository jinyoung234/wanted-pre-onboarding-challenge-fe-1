import {useUser} from '@/hooks'
import type {NextPage} from 'next'

const Home: NextPage = () => {
  useUser()
  return <div>home</div>
}
export default Home
