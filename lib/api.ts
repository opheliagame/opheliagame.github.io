import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const projectsDirectory = join(process.cwd(), '_projects')

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory)
}

export function getProjectBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(projectsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllProjects(fields: string[] = []) {
  const slugs = getProjectSlugs()
  console.log(slugs)
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    // sort projects by date in descending order
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1))

  console.log(projects)
  return projects
}

const poemsData = [
  {
    slug: 'loading',
    title:'loading',
    date: '2021-10-05',
    src: 'https://editor.p5js.org/opheliagame/full/3dhkFTGg9'
  },
  {
    slug: 'find-more',
    title:'find more',
    date: '2021-10-06',
    src: 'https://editor.p5js.org/opheliagame/full/S2-AvnyjO'
  },
  {
    slug: 'web-of-lies',
    title:'web of lies',
    date: '2021-10-08',
    src: 'https://editor.p5js.org/opheliagame/full/YOFbK8CiH'
  },
  {
    slug: 'तल से ताल',
    title:'तल से ताल',
    date: '2021-10-11',
    src: 'https://editor.p5js.org/opheliagame/full/USailXa9v'
  },
  {
    slug: 'ठहराव',
    title:'ठहराव',
    date: '2021-10-12',
    src: 'https://editor.p5js.org/opheliagame/full/0Zn5nzwSo'
  },
  {
    slug: 'लोग क्या कहेंगे',
    title:'लोग क्या कहेंगे',
    date: '2021-10-15',
    src: 'https://editor.p5js.org/opheliagame/full/C-vCf-AhN'
  },
  {
    slug: 'curfew',
    title:'curfew',
    date: '2021-10-19',
    src: 'https://editor.p5js.org/opheliagame/full/hoeHU2dDn'
  },
  {
    slug: 'life in a metro (train)',
    title:'life in a metro (train)',
    date: '2021-10-20',
    src: 'https://editor.p5js.org/opheliagame/full/ka9pysss1'
  },
  {
    slug: 'कैमरा',
    title:'कैमरा',
    date: '2021-11-08',
    src: 'https://editor.p5js.org/opheliagame/full/Y2PwyKOklm'
  },
  {
    slug: 'हिंदुस्तानी',
    title:'हिंदुस्तानी',
    date: '2021-11-16',
    src: 'https://editor.p5js.org/opheliagame/full/-iS9Z-GGc'
  },
  {
    slug: 'neckline politics',
    title:'neckline politics',
    date: '2021-11-16',
    src: 'https://editor.p5js.org/opheliagame/full/2NmrB6k2O'
  },
  {
    slug: 'ज़बान',
    title:'ज़बान',
    date: '2021-11-17',
    src: 'https://editor.p5js.org/opheliagame/full/oyP4-lkdH'
  },
  {
    slug: "mens-womens",
    title:"men's / women's",
    date: '2021-11-23',
    src: 'https://editor.p5js.org/opheliagame/full/yteORHSdi'
  },
  {
    slug: 'a-free-man',
    title:'a free man',
    date: '2021-12-06',
    src: 'https://editor.p5js.org/opheliagame/full/nAayWshNB'
  },
  {
    slug: 'friends',
    title: 'friends',
    date: '2021-12-16',
    src: 'https://editor.p5js.org/opheliagame/full/u3_6Umpzd'
  },
  {
    slug: 'वापस पास',
    title:'वापस पास',
    date: '2023-01-09',
    src: 'https://editor.p5js.org/opheliagame/full/Y9RCMO3Xl'
  },
]

export function getPoemBySlug(slug: string) {
  const poem = poemsData.find(poem => poem.slug == slug)
  return poem
}

export function getAllPoems() { return poemsData }