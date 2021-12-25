import "../src/styles/globals.css";
import type { AppProps } from "next/app";

function MyPortfolio({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyPortfolio;
