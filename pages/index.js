import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container, ListGroup } from 'react-bootstrap';
import { host } from '../src/constants/navigation';
import { GET } from '../src/helper/api';
import { generateUrl } from '../src/helper/generateUrl';

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

      <ListGroup className='shadow'>
        {videos?.map((video, index) =>
          <ListGroup.Item
            action
            key={index}
            onClick={() => router.push(`download/${generateUrl(video.title)}`)}
            variant={index % 2 === 0 ? "primary" : "light"}
          >
            {video.title}
          </ListGroup.Item>)}
      </ListGroup>
    </Container >
  );
}
