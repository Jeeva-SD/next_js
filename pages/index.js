import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import SongCard from '../src/components/song/SongCard';
import { host } from '../src/constants/config';
import { GET } from '../src/helper/api';

export const getStaticProps = async () => {
  const response = await GET(`${host}/api/youtube/videos`, { page: 1, count: 18 });
  // const totalVideos = await GET(`${host}/api/youtube/videos`, { videoCount:1 });

  return {
    props: { videos: response },
    // revalidate: 600
  };
};

export default function Home({ videos }) {
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>Jee6 | Trending Songs</title>
        <meta name="description" content="Download trending songs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SongCard videos={videos} router={router} />
    </Container >
  );
}
