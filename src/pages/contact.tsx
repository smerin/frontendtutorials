import Head from "next/head";
import ContactPage from "@src/components/Contact/Contact";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Frontend Tutorials</title>
        <meta
          name="description"
          content="Contact us with any feedback on the tutorials, or to enquire about hiring us for your project."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ContactPage />
      </main>
    </>
  );
}
