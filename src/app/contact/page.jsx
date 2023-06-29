"use client";
import React from "react";
import styles from "./page.module.css";
import contact from "../../../public/contact.png";
import Image from "next/image";

// export const metadata = {
//   title: "LHV Contact Information",
//   description: "This is Contact Page",
// };

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep In Touch</h1>
      <div className={styles.body}>
        <Image src={contact} alt="" className={styles.img}></Image>
        <form className={styles.form}>
          <input type="text" className={styles.info} placeholder="Name"></input>
          <input
            type="text"
            className={styles.info}
            placeholder="Email"
          ></input>
          <textarea
            className={styles.messages}
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};
// export async function getStaticProps() {
//   return {
//     props: {
//       metadata: {
//         title: "LHV Contact Information",
//         description: "This is Contact Page",
//       },
//     },
//   };
// }

export default Contact;
