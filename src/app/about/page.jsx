import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import about from "../../../public/about.jpg";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Image src={about} className={styles.img}></Image>
        <p className={styles.details}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor
          nulla ipsum perferendis maxime facilis illo saepe odio alias, aliquid
          minus suscipit minima non consequatur porro, quis earum eveniet fuga.
        </p>
      </div>
      <div className={styles.subContainer}>
        <div className={styles.subContainerFirst}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.contexts}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
          </p>
          <p className={styles.contexts}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            natus similique dolores porro officia hic veniam recusandae, ratione
            nihil quibusdam illum voluptatem nam sit doloribus error saepe
            earum, laborum architecto?
          </p>
        </div>
        <div className={styles.subContainerFirst}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.contexts}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
          </p>
          <ul className={styles.lists}>
            <li className={styles.list}>Dynamic Websites</li>
            <li className={styles.list}>Fast and Handy</li>
            <li className={styles.list}>Mobile Apps</li>
          </ul>
          <Link href="/contact">
            <button className={styles.button}>Contact </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
