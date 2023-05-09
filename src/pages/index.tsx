import { NextPage } from "next";
import Head from "next/head";
import { getAllPosts } from "@src/services";
import { Post } from "@src/types";
import HomePage from "@src/components/HomePage/HomePage";
import Header from "@src/components/Header/Header";

interface Props {
  posts: Post[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>smerin.io</title>
        <meta
          name="description"
          content="Frontend tips, tricks and tutorials from George Smerin"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <HomePage posts={posts} />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
};

export default Home;
