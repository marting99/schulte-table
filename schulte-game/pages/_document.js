import React from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,

} from 'next/document';
import { ServerStyleSheet } from 'styled-components';


export default class CustomDocument extends Document{
    static async getInitialProps(ctx){
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try{
            ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App{...props}/>),
            });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
                ),
            };
            } finally {
                sheet.seal();
            }            
        }
        render(){
             return (
             <Html lang='en' >
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Allura&display=swap" rel="stylesheet"/>
                <link rel="icon" href={"https://media.graphassets.com/VBD13HVTQ5eSgWiqrF60?_gl=1*a8q2yt*_ga*NDgzNTQ3OTQ3LjE2NTgxMDYwNjY.*_ga_G6FYGSYGZ4*MTY1ODEwNjA2NS4xLjEuMTY1ODEwNjE0My42MA.."} />
                </Head>
                <body style={{margin:'0', padding:'0'}}  >
                    <Main />
                    <div id="modal-root"/>
                    <NextScript />
                </body>
            </Html>
            );
        }
}