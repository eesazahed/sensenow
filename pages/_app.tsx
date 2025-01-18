import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Analytics />
    <Component {...pageProps} />
  </>
);

export default App;
