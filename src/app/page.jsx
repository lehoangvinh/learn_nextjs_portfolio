import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png";
import Link from "next/link";

export const metadata = {
  title: "Blogger",
  description: "Builted by Le Hoang Vinh",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Learn for your future</h1>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
          doloribus illum velit error, ex quidem perferendis consequuntur
          expedita repudiandae consequatur mollitia repellat blanditiis
          doloremque possimus totam sequi incidunt quo voluptate?
        </p>
        <Link href="/portfolio">
          <button className={styles.button}>See Our Work </button>
        </Link>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="V1nh hero" className={styles.img} />
      </div>
    </div>
  );
}
