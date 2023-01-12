import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Barlow_Semi_Condensed } from "@next/font/google";
import Layout from "../components/Layout";
import LocalProvider from "../context/localContext";

const barlow = Barlow_Semi_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocalProvider>
      <Layout>
        <main className={barlow.variable}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </LocalProvider>
  );
}
