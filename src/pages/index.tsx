import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const getInitialImg = () => {
    return "https://res.cloudinary.com/da0bwxike/image/upload/v1680709774/cld-sample-5.jpg";
  };

  const [url, setUrl] = useState(() => getInitialImg());

  useEffect(() => {
    const id = setTimeout(() => {
      setUrl(
        "https://res.cloudinary.com/da0bwxike/image/upload/v1680709772/cld-sample.jpg"
      );
    }, 1000);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <Head>
        <title>Progressive image loading</title>
        <meta
          name="description"
          content="Checking Progressive image loading in nextjs using img tag"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <img
          src={url}
          height={500}
          width={500}
          alt="photo of a dog kissing a girl"
        />
      </main>
    </>
  );
}
