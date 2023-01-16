import {classNames} from '@/utils/utils'
import type {NextPage} from 'next'

const Home: NextPage = () => {
  const homeStyle = classNames('bg-red-200')
  return <div className={homeStyle}>home</div>
}
export default Home
