import Head from "next/head";
import HomePage from "@src/components/Home/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Tutorials</title>
        <meta
          name="description"
          content="Frontend tips, tricks and tutorials from George Smerin"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}
