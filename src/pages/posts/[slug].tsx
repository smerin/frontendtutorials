import type { NextPage } from "next";
import Head from "next/head";
import { getAllPosts, getPostBySlug, markdownToHtml } from "@src/services";
import { Post } from "@src/types";
import Header from "@src/components/Header/Header";
import PostPage from "@src/components/PostPage/PostPage";

interface Props {
  post: Post;
}

const SinglePost: NextPage<Props> = ({ post }) => {
  return (
    <>
      <Head>
        <title>George Smerin</title>
        <meta name="description" content="Frontend development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <PostPage post={post} />
      </main>
    </>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug);

  const htmlContent = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content: htmlContent,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default SinglePost;
