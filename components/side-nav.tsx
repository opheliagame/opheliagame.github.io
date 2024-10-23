import Link from "next/link";

export default function SideNav({ allItems }) {
  return (
    <div className='container overflow-y-scroll order-last md:order-first mx-auto px-4 pt-4 md:px-8 md:pt-8'>
      <h1 className="font-bold pb-4">Recent</h1>
      <ul>
        {allItems.map((item, index) => (
          <li className="pb-2" key={index}>
            <Link href={`/projects/${item.slug}`}>
              {item.title}
            </Link>
          </li>
        ))}

        <li className="pb-2">
          <Link href={"/zines/queering-families"}>
            Queering Families, a generative zine 
          </Link>
        </li>
      </ul>
    </div>
  );

}

