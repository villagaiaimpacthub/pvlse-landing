import { Html, Head, Main, NextScript } from 'next/document'
import data from '@/data/pvlse.json'

export default function Document() {
  const { meta, seo } = data
  
  return (
    <Html lang={meta.language}>
      <Head>
        {/* Favicon with cache busting */}
        <link rel="icon" href="/assets/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="shortcut icon" href="/assets/favicon.svg?v=2" />
        <link rel="apple-touch-icon" href="/assets/favicon.svg?v=2" />
        
        {/* Force browser refresh */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        
        {/* SEO Meta Tags */}
        <meta name="description" content={seo.description} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seo.og.title} />
        <meta property="og:description" content={seo.og.description} />
        <meta property="og:image" content={seo.og.image} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content={seo.twitter.card} />
        <meta name="twitter:creator" content={seo.twitter.creator} />
        <meta name="twitter:title" content={seo.og.title} />
        <meta name="twitter:description" content={seo.og.description} />
        <meta name="twitter:image" content={seo.og.image} />
        
        {/* Theme */}
        <meta name="theme-color" content="#7C5CFF" />
        <meta name="color-scheme" content={meta.colorScheme} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}