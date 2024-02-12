import { ReactNode } from 'react'
import { randomColor } from '../lib/utils'

type Props = {
  children?: ReactNode
}

const ProjectBackground = ({ children }: Props) => {
  return (
    <>
      <div className='flex flex-col justify-end container absolute bottom-0'>
        
        {
        Array(12).fill(0).map((i, index) => {
          let c = randomColor(index)
        
          return (
            <div key={index} style={{backgroundColor: c, height: `${index}px`}}></div>
          )
        })}
      </div>
      <div className='absolute'>
        {children}
      </div>
      <div className='opacity-0'>
        {children}
      </div>
    </>


  )
}

export default ProjectBackground
