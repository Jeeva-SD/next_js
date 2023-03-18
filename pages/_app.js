import Head from 'next/head';
import Layout from '../src/components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jee6 - Trending Songs Downloader</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jee6" />

        <meta property="og:title" content="Jee6 - Trending Songs Downloader" />
        <meta property="og:description" content="Looking for the latest and greatest music? Look no further than Jee6, your one-stop-shop for all your favorite trending songs! With our easy-to-use downloader, you can get access to the hottest tracks on the charts right now. Whether you're into pop, hip hop, or rock, we've got you covered. Don't miss out on the music everyone's talking about, visit Jee6 today!" />
        <meta property="og:image" content="https://jee6.in/apple-touch-icon.png" />
        <meta property="og:url" content="https://jee6.in" />

        <meta name="twitter:title" content="Jee6 - Trending Songs Downloader" />
        <meta name="twitter:description" content="Looking for the latest and greatest music? Look no further than Jee6, your one-stop-shop for all your favorite trending songs! With our easy-to-use downloader, you can get access to the hottest tracks on the charts right now. Whether you're into pop, hip hop, or rock, we've got you covered. Don't miss out on the music everyone's talking about, visit Jee6 today!" />
        <meta name="twitter:image" content="https://jee6.in/apple-touch-icon.png" />
        <meta name="twitter:card" content="jee6.in" />
        <meta name="twitter:url" content="https://jee6.in" />

        <meta name="robots" content="index,follow" />
        <meta name="google-site-verification" content="eLWcIiSBBF6QW6elsI37ip5n2ar1JzT7kIPn9TdMnDQ" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;