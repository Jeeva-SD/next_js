import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { host } from '../src/constants/navigation';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetch(`${host}/api/youtube/videos?urls=1`).then(res => res.json()).then(data => setUrls(data));
  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title>Jee6 | Trending Songs</title>
        <meta name="description" content="Download trending songs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {urls?.map((url, index) =>
        <li
          key={index}
          onClick={() => router.push(`download/${url}`)}>
          {url}
        </li>)}
    </div >
  );
}