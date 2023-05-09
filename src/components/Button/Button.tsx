import { ReactNode } from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  type?: "button" | "submit";
  buttonStyle?: ButtonStyles;
  disabled?: boolean;
  children: ReactNode;
  handleClick?: () => void;
}

export enum ButtonStyles {
  WHITE = "white",
  CHARCOAL = "charcoal",
  TURQUOISE = "turquoise",
}

const Button = ({
  type = "button",
  buttonStyle = ButtonStyles.WHITE,
  disabled,
  children,
  handleClick,
}: ButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      className={styles.button}
      data-style={buttonStyle}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
