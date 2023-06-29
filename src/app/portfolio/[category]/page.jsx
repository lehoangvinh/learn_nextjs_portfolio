import React from "react";
import styles from "./page.module.css";
import Button from "../../button/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { items } from "./data.js";

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.items} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See more" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              width={600}
              height={500}
              className={styles.img}
              alt=""
              src={item.image}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
