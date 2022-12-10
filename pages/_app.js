import Layout from '../src/components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

export const getStaticProps = async () => {
  const response = await GET(`${host}/api/youtube/videos`);

  return {
    props: { videos: response }
  };
};

function MyApp({ Component, pageProps, videos }) {

  return (
    <Layout videos={videos}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;