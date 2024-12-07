import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import {
  getDatabase, getBlocks, getPageFromSlug,
} from '../../../lib/notion';
import Text from '../../../components/notion/text';
import { renderBlock } from '../../../components/notion/renderer';
import Header from '../../../components/header';
import Container from '../../../components/container';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const database = await getDatabase();
  return database?.map((page) => {
    const slug = page.properties.Slug?.formula?.string;
    return ({ id: page.id, slug });
  });
}

export default async function Page({ params }) {
  const page = await getPageFromSlug(params?.slug);
  console.log("here")
  console.log(page)
  const blocks = await getBlocks(page?.id);

 
  console.log(blocks)

  if (!page || !blocks) {
    return <div />;
  }

  return (
    <Container>
      <Head>
        <title>{page.properties.Title?.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <article className="">
        <h1 className="">
          <Text title={page.properties.Title?.title} />
        </h1>
        <section>
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
          <Link href="/" className="">
            ← Go home
          </Link>
        </section>
      </article>
    </Container>
  );
}

// export const getStaticPaths = async () => {
//   const database = await getDatabase(databaseId);
//   return {
//     paths: database.map((page) => {
//       const slug = page.properties.Slug?.formula?.string;
//       return ({ params: { id: page.id, slug } });
//     }),
//     fallback: true,
//   };
// };

// export const getStaticProps = async (context) => {
//   const { slug } = context.params;
//   const page = await getPage(id);
//   const blocks = await getBlocks(id);

//   return {
//     props: {
//       page,
//       blocks,
//     },
//     revalidate: 1,
//   };
// };