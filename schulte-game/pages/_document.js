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
                <link rel="icon" href={`https://i.ibb.co/vL8N9sZ/logo.png`} />
                </Head>
                <body style={{margin:'0', padding:'0', backgroundColor:'#0c4e56'}}  >
                    <Main />
                    <div id="modal-root"/>
                    <NextScript />
                </body>
            </Html>
            );
        }
}