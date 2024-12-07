import Link from 'next/link';
import { getDatabase } from '../lib/notion';
import styles from './index.module.css';
import Text from '../components/notion/text';

export const databaseId = process.env?.NOTION_DATABASE_ID ?? '134653a5da5480249152c450a40300e2';

async function getPosts() {
  const database = await getDatabase();

  return database;
}

export default async function Page() {
  const posts = await getPosts();
  const slugs = posts.map(p => p.properties.Slug?.rich_text[0].text.content).join(",")
  console.log(slugs)

  return (
    <div>
      <main className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logos}>
            
          </div>
        
        </header>

        <ol className={styles.posts}>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              'en-US',
              {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              },
            );
            const slug = post.properties?.Slug?.rich_text[0].text.content;
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/essays/${slug}`}>
                    <Text title={post.properties?.Name?.title} />
                  </Link>
                </h3>

                <p className={styles.postDescription}>{date}</p>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}