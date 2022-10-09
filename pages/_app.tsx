import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/outfit";
import "@fontsource/space-grotesk"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
