import Script from 'next/script';
import Layout from '../src/components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="Jee6" />
        <meta name="robots" content="index,follow" />
        <meta name="Rating" content="General" />
        <meta name="audience" content="all" />
        <meta httpEquiv="Content-Language" content="en_US" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta itemProp="isFamilyFriendly" content="true" />
        <meta name="theme-color" content="#000000" />

        <meta property="og:site_name" content="jee6.in" />
        <meta property="og:title" content="Jee6" />
        <meta property="og:description" content="Jee6 allows you to download popular and trending songs for free. Download the latest songs at Jee6. Songs download website" />
        <meta property="og:url" content="https://jee6.in" />
        <meta property="og:image" content="https://jee6.in/apple-touch-icon.png" />

        <meta name="twitter:card" content="jee6.in" />
        <meta name="twitter:url" content="https://jee6.in" />
        <meta name="twitter:title" content="Jee6" />
        <meta name="twitter:description" content="Jee6 allows you to download popular and trending songs for free. Download the latest songs at Jee6. Songs download website" />
        <meta name="twitter:image" content="https://hightool.net/apple-touch-icon.png" />

        <meta name="google-site-verification" content="vH97xdO0p3T4lidmLNaW6w05iWQKG9mqo2ZjUc7Sd0w" />

        <link rel="icon" href="/favicon.ico" />
        <link href="https://www.jee6.in" rel="canonical" />
      </Head>

      <Script id="analytics" strategy="lazyOnload">
        {
          ` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZZXTTEB55X');`
        }
      </Script>

      <Script
        id="googletagmanager"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-ZZXTTEB55X"

        onReady={() => console.log("googletagmanager started.")}
        onError={() => console.log('googletagmanager load error')}
      />

      <Script
        async
        id="adsbygoogle"
        strategy="lazyOnload"
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6663847551285629"

        onReady={() => console.log("adsbygoogle started.")}
        onError={() => console.log('adsbygoogle load error')}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
