"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import { signOut, useSession } from "next-auth/react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  console.log("🚀 ~ file: Navbar.jsx:45 ~ Navbar ~ session:", session);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo_rm.png" alt="logo" width={40} height={40}></Image>
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />

        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.links}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.button} onClick={signOut}>
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
