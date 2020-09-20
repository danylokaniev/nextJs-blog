import NextNprogress from 'nextjs-progressbar';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress color="#29D" startPosition="0.3" stopDelayMs="600" height="5" />
      <Component {...pageProps} />
      <style jsx global>
        {`
         html {
           overflow-y: scroll;
         }
        `}
      </style>
    </>
  );
}
