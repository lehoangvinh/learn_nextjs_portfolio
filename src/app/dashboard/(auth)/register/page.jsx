"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setErr] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    const router = useRouter;

    e.preventDefault();

    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setPassword(e.target[2].value);
    console.log(
      "🚀 ~ file: page.jsx:52 ~ Register ~ e:",
      name,
      email,
      password
    );

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push("/dashboard/login?sussess= Account has been created");
    } catch {
      setErr(true);
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className={styles.input}
          required
        ></input>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          required
        ></input>
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        ></input>
        <button
          className={styles.button}
          onClick={(e) => {
            alert("Feature is updating...");
          }}
        >
          Register
        </button>
      </form>

      {err && "Something went wrong"}
      <Link href="/dashboard/login" className={styles.signin}>
        Sign in with another account
      </Link>
    </div>
  );
};

export default Register;
