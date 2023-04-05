import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const getInitialImg = () => {
    return "https://res.cloudinary.com/da0bwxike/image/upload/v1680709774/cld-sample-5.jpg";
  };
  const [isBlur, setIsBlur] = useState(true);
  const [url, setUrl] = useState(() => getInitialImg());

  useEffect(() => {
    const id = setTimeout(() => {
      setUrl(
        "https://res.cloudinary.com/da0bwxike/image/upload/v1680709772/cld-sample.jpg"
      );
      setIsBlur(false);
    }, 1000);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="zwIVyOQOxjDGxqlOy9R6PMjVy8bCiKRzy8pNSqp9Kqc"
        />
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
          className={isBlur ? styles.imageStyle : ""}
          alt="photo of a dog kissing a girl"
        />
      </main>
    </>
  );
}
