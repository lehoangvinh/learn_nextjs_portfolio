"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }
export const metadata = {
  title: "Contact Page",
  description: "Builted by Le Hoang Vinh",
};

const Blog = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  // const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          key={item.id}
          className={styles.container}
          href={`/blog/${item.id}`}
        >
          <Image
            className={styles.img}
            width={350}
            height={250}
            src="https://images.pexels.com/photos/17058050/pexels-photo-17058050/free-photo-of-wood-light-sea-city.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="image"
          />
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
