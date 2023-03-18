import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <Script
                        id='ads'
                        strategy="afterInteractive"
                        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6663847551285629`}
                        onReady={() => console.log("adsbygoogle started.")}
                        onError={() => console.log('adsbygoogle load error')}
                    />

                    {/* <Script
                        id='push-ads'
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                                (adsbygoogle = window.adsbygoogle || []).push({
                                google_ad_client: "ca-pub-6663847551285629",
                                enable_page_level_ads: true
                                });
                            `,
                        }}
                    /> */}

                    <Script
                        id="googletagmanager"
                        strategy="afterInteractive"
                        src="https://www.googletagmanager.com/gtag/js?id=G-ZZXTTEB55X"
                        onReady={() => console.log("googletagmanager started.")}
                        onError={() => console.log('googletagmanager load error')}
                    />

                    <Script
                        id="push-analytics"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-ZZXTTEB55X', {
                                page_path: window.location.pathname,
                            });`,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
