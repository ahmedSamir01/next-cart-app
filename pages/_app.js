import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>cart app</title>
        <meta name="keywords" content="next" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
