import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post } from "@src/types";

const postsDirectory = join(process.cwd(), "src/posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const {
    data: { title, excerpt, meta_description, date, tags },
    content,
  } = matter(fileContents);

  const post: Post = {
    date,
    title,
    excerpt,
    content,
    tags,
    meta_description,
    slug: realSlug,
  };

  return post;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts: Post[] = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
