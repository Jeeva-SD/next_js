import { memo } from 'react';
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

const Home = ({ videos }) => {
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>Jee6 - Trending Songs Downloader</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Looking for the latest and greatest music? Look no further than Jee6, your one-stop-shop for all your favorite trending songs! With our easy-to-use downloader, you can get access to the hottest tracks on the charts right now. Whether you're into pop, hip hop, or rock, we've got you covered. Don't miss out on the music everyone's talking about – visit Jee6 today!" />
        <meta name="keywords" content='Hindi songs, bollywood songs, Tamil movie songs, Hindi movie songs, Tamil songs download, songs, latest Tamil songs, love songs download, ringtones download, whatsapp status download' />

        <link rel="canonical" href="https://www.jee6.in" />
      </Head>

      <SongCard videos={videos} router={router} />
    </Container >
  );
};

export default memo(Home);