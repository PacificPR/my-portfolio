import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyPortfolio({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Prashant Jha</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyPortfolio;
