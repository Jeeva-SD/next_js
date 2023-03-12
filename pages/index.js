import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import SongCard from '../src/components/song/SongCard';
import { host } from '../src/constants/config';
import { GET } from '../src/helper/api';

export const getStaticProps = async () => {
  const response = await GET(`${host}/api/youtube/video/list`, { page: 1, count: 18, description: 0 });

  return {
    props: { videos: response?.data },
    revalidate: 600
  };
};

export default function Home({ videos }) {
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>Jee6 | Download your favorite songs</title>
        <meta name="description" content='Jee6 allows you to download the latest songs, Download latest songs,movie songs download, Tamil movie songs, Hindi movie songs, Hindi songs, bollywood songs, Tamil songs download, songs' />
        <meta name="keywords" content='Hindi songs, bollywood songs, Tamil movie songs, Hindi movie songs, Tamil songs download, songs, latest Tamil songs, love songs download, ringtones download, whatsapp status download' />
      </Head>

      <SongCard videos={videos} router={router} />
    </Container >
  );
}
