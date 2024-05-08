import ProjectTitle from './project-title'

type Props = {
  title: string
  coverImage: string
  date: string
}

const ProjectHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <ProjectTitle>{title}</ProjectTitle>
    </>
  )
}

export default ProjectHeader
