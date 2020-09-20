import NextNprogress from 'nextjs-progressbar';


export default function App({Component, pageProps}) {

    return (<>
        <NextNprogress color="#29D" startPosition="0.3" stopDelayMs="600" height="5"/>
        <Component {...pageProps} />
        <style jsx global>{`
         html {
           overflow-y: scroll;
         }
        `}
        </style>
    </>);
}
