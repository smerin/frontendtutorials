import { useState, FormEvent } from "react";

import styles from "./Subscribe.module.css";
import Button, { ButtonStyles } from "../Button/Button";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const subscribeUser = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  return (
    <form className={styles.subscribe} onSubmit={subscribeUser}>
      <label htmlFor="email-input" className={styles.label}>
        Subscribe to my monthly newsletter for frontend tips and technqiues
      </label>

      <input
        className={styles.input}
        id="email-input"
        type="email"
        name="email"
        value={email}
        placeholder="Enter your email"
        required
        autoCapitalize="off"
        autoCorrect="off"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button type="submit" buttonStyle={ButtonStyles.TURQUOISE}>
        Subscribe
      </Button>
    </form>
  );
};

export default Subscribe;
