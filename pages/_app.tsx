import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Barlow_Semi_Condensed } from "@next/font/google";

const barlow = Barlow_Semi_Condensed({
  weight: ["100", "200", "400", "700"],
  variable: "--font-barlow",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={barlow.variable}>
      <Component {...pageProps} />
    </main>
  );
}
