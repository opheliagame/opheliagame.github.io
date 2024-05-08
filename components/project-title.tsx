import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const ProjectTitle = ({ children }: Props) => {
  return (
    <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 md:text-right md:pr-8">
      {children}
    </h1>
  )
}

export default ProjectTitle
