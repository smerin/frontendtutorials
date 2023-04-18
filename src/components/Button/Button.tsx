import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  buttonStyle: ButtonStyles;
  children: ReactNode;
  handleClick: () => void;
}

export enum ButtonStyles {
  WHITE = "white",
  BLACK = "black",
}

const Button = ({
  buttonStyle = ButtonStyles.WHITE,
  children,
  handleClick,
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={handleClick}
      className={styles.button}
      data-style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default Button;
