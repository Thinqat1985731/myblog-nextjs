import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Next.js Blog Starter Kit",
    description: "Clone and deploy your own Next.js portfolio in minutes.",
    image: "https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css"
          integrity="sha256-tkzDFSl16wERzhCWg0ge2tON2+D6Qe9iEaJqM4ZGd4E="
          crossOrigin="anonymous"
          type="text/css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css"
          integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
