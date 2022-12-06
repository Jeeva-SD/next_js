import Head from 'next/head';
import { useRouter } from 'next/router';
import { host } from '../src/constants/navigation';
import { GET } from '../src/helper/api';
import styles from '../styles/Home.module.css';

export const getStaticProps = async () => {
  const response = await GET(`${host}/api/youtube/videos`, { urls: 1 });

  return {
    props: { data: response }
  };
};

export default function Home({ data }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Jee6 | Trending Songs</title>
        <meta name="description" content="Download trending songs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data?.map((url, index) =>
        <li
          key={index}
          onClick={() => router.push(`download/${url}`)}>
          {url}
        </li>)}
    </div >
  );
}
