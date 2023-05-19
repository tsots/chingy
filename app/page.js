import Image from "next/image";
import styles from "./page.module.css";
//import Posts from "./components/Posts";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

// type Props = {
//   post: BlogPost;
// };

export default function Home() {
  const posts = getSortedPostsData();
  // const { id, title, date, description } = post;
  return (
    <main className={styles.main}>
      {/* <Posts /> */}

      <h1 style={{ marginBottom: "2rem" }}> Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
            <div>{post.description}</div>
            <br />
            {/* <p>{formattedDate}</p> */}
            <div>
              {post.image ? <img src={post.image} alt="tototo" /> : null}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
