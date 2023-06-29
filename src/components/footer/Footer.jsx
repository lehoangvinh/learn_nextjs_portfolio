"use client ";

import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <p>©2023 V1nh. All rights reserved.</p>
      </div>
      <div className={styles.images}>
        <a className={styles.icon} href="https://www.facebook.com/V1nh.flux.8">
          <Image src="/1.png" width={20} height={20} />
        </a>
        <a className={styles.icon} href="https://www.facebook.com/V1nh.flux.8">
          <Image src="/2.png" width={20} height={20} />
        </a>
        <a className={styles.icon} href="https://www.facebook.com/V1nh.flux.8">
          <Image src="/3.png" width={20} height={20} />
        </a>
        <a className={styles.icon} href="https://www.facebook.com/V1nh.flux.8">
          <Image src="/4.png" width={20} height={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
