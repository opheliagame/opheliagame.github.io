import { CMS_NAME } from '../lib/constants'
import Header from './header'

const Intro = () => {
  return (
    <section className="flex-col mt-16 mb-16 md:mb-12">
      <Header />
      <section className='max-w-2xl mx-auto'>
        <h1 className='font-bold text-4xl pb-4'>About me</h1>
        <p>
          Anushka Trivedi / opheliagame as a creative technologist uses code to write computer programs that create images and poems. As a net artist, her practice also involves making tools, websites and <a className='underline underline-offset-2 decoration-[#3066BE]' href="/live-coding">live coding visuals.</a> Coming from a technology background, she is always thinking about and exploring what it means to make art and to be an artist. 
        </p>
      </section>
      
      
    </section>
  )
}

export default Intro
