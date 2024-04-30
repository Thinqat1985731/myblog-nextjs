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
        <meta content="follow, index" name="robots" />
        <meta content={meta.description} name="description" />
        <meta content={meta.title} property="og:site_name" />
        <meta content={meta.description}  property="og:description" />
        <meta content={meta.title} property="og:title" />
        <meta content={meta.image} property="og:image" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@yourname" name="twitter:site" />
        <meta content={meta.title} name="twitter:title" />
        <meta content={meta.description} name="twitter:description" />
        <meta content={meta.image} name="twitter:image" />
        <link
          crossOrigin="anonymous"
          href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css"
          integrity="sha256-tkzDFSl16wERzhCWg0ge2tON2+D6Qe9iEaJqM4ZGd4E="
          rel="stylesheet"
          type="text/css"
        />
        <link
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css"
          integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
