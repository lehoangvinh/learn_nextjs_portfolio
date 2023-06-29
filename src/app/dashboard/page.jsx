"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useSWR from "swr";

const DashBoard = () => {
  // const [item, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json();
  //     console.log("🚀 ~ file: page.jsx:23 ~ getData ~ data:", data);

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  const session = useSession();
  console.log("🚀 ~ file: page.jsx:35 ~ DashBoard ~ session:", session);
  // const [content, setContent] = useState();
  const router = useRouter();

  // async function getData(id) {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts/${id}`,
  //     {
  //       cache: "no-store",
  //     }
  //   );
  //   if (!res.ok) {
  //     return notFound();
  //   }
  //   return res.json();
  // }

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (session.status === "authenticated") {
    router.push("/dashboard");

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    // console.log(data);
    // return <div>hello {data.name}!</div>;
    if (data) {
      return data.map((item) => (
        <div className={styles.mainContainer}>
          <div className={styles.topContainer}>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.body}</p>
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
                explicabo omnis fuga molestias enim a magnam rem? Eveniet
                nostrum voluptate dolores eius, optio eligendi qui iusto at,
                amet repellat fugit? Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Est explicabo omnis fuga molestias enim a
                magnam rem? Eveniet nostrum voluptate dolores eius, optio
                eligendi qui iusto at, amet repellat fugit? Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Est explicabo omnis fuga
                molestias enim a magnam rem? Eveniet nostrum voluptate dolores
              </p>
            </div>
          </div>
        </div>
      ));
    }
  } else {
    router.push("/dashboard/login");
  }
};

export default DashBoard;
