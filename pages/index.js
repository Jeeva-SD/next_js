import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import HomeContent from '../src/components/home/Home';
import { host } from '../src/constants/navigation';
import { GET } from '../src/helper/api';

export const getStaticProps = async () => {
  const response = await GET(`${host}/api/youtube/videos`);

  return {
    props: { videos: response }
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

      <HomeContent videos={videos} router={router} />
    </Container >
  );
}
