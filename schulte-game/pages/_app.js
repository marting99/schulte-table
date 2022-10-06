import { useEffect } from 'react';
import dynamic from 'next/dynamic';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
