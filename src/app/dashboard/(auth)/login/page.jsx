"use client";

import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import intro from "../../../../../public/logo_rm.png";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const session = useSession();

  const handleLoginGoogle = async () => {
    await signIn("google");
    router.push("/dashboard");
  };
  const handleLoginGithub = async () => {
    await signIn("github");
    router.push("/dashboard");
  };

  if (session.status === "authenticated") {
    router.push("/dashboard");
    // return <button onClick={handleLogin}>Login with Google</button>;
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.intro}>
          {/* <p>Wellcome to My page</p> */}
          <Image src={intro} width={400} height={400}></Image>
        </div>
        <div className={styles.form}>
          <input
            type="text"
            className={styles.info}
            placeholder="Username"
          ></input>
          <input
            type="text"
            className={styles.info}
            placeholder="Password"
          ></input>
          <button
            onClick={(e) => {
              alert("Feature is updating...");
            }}
            className={styles.buttond}
          >
            Sign In
          </button>
          <button onClick={handleLoginGoogle} className={styles.buttond}>
            Login with Google
          </button>
          <button onClick={handleLoginGithub} className={styles.buttond}>
            Login with Github
          </button>
          <Link href="/dashboard/register" className={styles.regis}>
            Register Now
          </Link>
        </div>
      </div>
    );
  }
};

export default Login;
