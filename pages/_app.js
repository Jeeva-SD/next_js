import NavBar from '../src/components/layout/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component
        {...pageProps}
      />
    </>
  );
}

export default MyApp;