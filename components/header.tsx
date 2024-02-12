import Link from 'next/link'
import { random, randomColor } from '../lib/utils'

const Header = () => {
  return (

    <Link href="/" className="text-2xl lowercase md:text-6xl font-display mb-10 md:mb-12 mt-8
    flex w-full">
      {'opheliagame'.split('').map((l, index) => {
        let c = randomColor(index)
        let isFlex = random(index) < 0.5 ? 'none' : '1 1 0%'
        // let r = Math.random() < 0.5
        // if (r) {
        //   return (
        //     <>
        //       <span className='p-1' style={{ backgroundColor: c, color: 'white', flex: isFlex }} key={index}>{l}</span>
        //       <span className='p-1' style={{ backgroundColor: c, color: 'white', flex: isFlex }} key={index}>{ }</span>
        //     </>

        //   )
        // }

        // else {
        //   return (
        //     <span className='p-1' style={{ backgroundColor: c, color: 'white', flex: isFlex }} key={index}>{l}</span>
        //   )
        // }

        return (
          <div key={index} className='flex flex-col' style={{ flex: isFlex }}>
            <span className='p-1'>{l}</span>
            <span className='p-1 mt-1 h-4 md:h-8' style={{ backgroundColor: c, color: 'white' }}>{ }</span>

          </div>


        )

      })}
    </Link>


  )
}

export default Header
