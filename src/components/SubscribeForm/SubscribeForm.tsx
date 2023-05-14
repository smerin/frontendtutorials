import { useState, FormEvent } from "react";

import styles from "./SubscribeForm.module.css";
import Button, { ButtonStyles } from "../Button/Button";

interface SubscribeFormProps {
  buttonStyle?: ButtonStyles;
}

const SubscribeForm = ({ buttonStyle }: SubscribeFormProps) => {
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
    <>
      <form className={styles.subscribe} onSubmit={subscribeUser}>
        <label htmlFor="email-input" className={styles.label}>
          <span className={styles.labelText}>Sign up now</span>
          <input
            className={styles.input}
            id="email-input"
            type="email"
            name="email"
            value={email}
            placeholder="Email address"
            required
            autoCapitalize="off"
            autoCorrect="off"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <Button
          type="submit"
          buttonStyle={buttonStyle || ButtonStyles.TURQUOISE}
          className={styles.button}
        >
          Subscribe
        </Button>
      </form>
      {failure && (
        <p className={styles.failure}>
          There was an error subscribing to the newsletter. Hit me up at{" "}
          <a href="mailto:mail@smerin.io">mail@smerin.io</a> and I’ll add you
          the old fashioned way.
        </p>
      )}
    </>
  );
};

export default SubscribeForm;
