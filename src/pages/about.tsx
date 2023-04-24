import Head from "next/head";
import AboutPage from "@src/components/About/About";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Frontend Tutorials</title>
        <meta
          name="description"
          content="A showcase of best practices in frontend development, covering topics such as UX, typography, accessibility and animation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AboutPage />
      </main>
    </>
  );
}
