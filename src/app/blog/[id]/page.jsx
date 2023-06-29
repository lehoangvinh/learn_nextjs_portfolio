import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
// import { NOTFOUND } from "dns";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image
              className={styles.authorImg}
              width={40}
              height={40}
              src="https://images.pexels.com/photos/17058050/pexels-photo-17058050/free-photo-of-wood-light-sea-city.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
            <p className={styles.authorName}>LHV</p>
          </div>
        </div>
        <Image
          className={styles.img}
          width={450}
          height={250}
          src="https://images.pexels.com/photos/6335643/pexels-photo-6335643.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
      </div>
      <div className={styles.botContainer}>
        <div className={styles.content}>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            explicabo omnis fuga molestias enim a magnam rem? Eveniet nostrum
            voluptate dolores eius, optio eligendi qui iusto at, amet repellat
            fugit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            explicabo omnis fuga molestias enim a magnam rem? Eveniet nostrum
            voluptate dolores eius, optio eligendi qui iusto at, amet repellat
            fugit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            explicabo omnis fuga molestias enim a magnam rem? Eveniet nostrum
            voluptate dolores eius, optio eligendi qui iusto at, amet repellat
            fugit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            explicabo omnis fuga molestias enim a magnam rem? Eveniet nostrum
            voluptate dolores eius, optio eligendi qui iusto at, amet repellat
            fugit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            explicabo omnis fuga molestias enim a magnam rem? Eveniet nostrum
            voluptate dolores eius, optio eligendi qui iusto at, amet repellat
            fugit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            explicabo omnis fuga molestias enim a magnam rem? Eveniet nostrum
            voluptate dolores eius, optio eligendi qui iusto at, amet repellat
            fugit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            explicabo omnis fuga molestias enim a magnam rem? Eveniet nostrum
            voluptate dolores eius, optio eligendi qui iusto at, amet repellat
            fugit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            explicabo omnis fuga molestias enim a magnam rem? Eveniet nostrum
            voluptate dolores eius, optio eligendi qui iusto at, amet repellat
            fugit?
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
