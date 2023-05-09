import { useState, FormEvent } from "react";

import styles from "./Subscribe.module.css";
import Button, { ButtonStyles } from "../Button/Button";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

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
    })
      .then(({ status }) => {
        if (status >= 400) {
          return setFailure(true);
        }
        setSuccess(true);
        setFailure(false);
      })
      .catch(() => {
        setFailure(true);
        setSuccess(false);
      });
  };

  if (success) {
    return <p>Success!</p>;
  }

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

      {failure && (
        <p className={styles.failure}>
          There was an error subscribing to the newsletter. Hit me up at{" "}
          <a href="mailto:mail@smerin.io">mail@smerin.io</a> and I'll add you
          the old fashioned way.
        </p>
      )}
    </form>
  );
};

export default Subscribe;
