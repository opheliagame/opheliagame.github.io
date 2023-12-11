import { CMS_NAME } from '../lib/constants'
import Header from './header'

const Intro = () => {
  return (
    <section className="flex-col mt-16 mb-16 md:mb-12">
      {/* <h1 className='font-bold text-4xl pb-4'>opheliagame</h1> */}
      <Header />
      <p className='italic'>Hey 👋 <br/> 
      I am a creative technologist and software artist. My practice revolves around code, visuals and typography. Code is my primary medium of creative expression and I use it to make websites, generative sketches and everything in between.</p>
    </section>
  )
}

export default Intro
