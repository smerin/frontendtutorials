import { ReactNode } from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  buttonStyle?: ButtonStyles;
  disabled?: boolean;
  children: ReactNode;
  handleClick: () => void;
}

export enum ButtonStyles {
  WHITE = "white",
  CHARCOAL = "charcoal",
  TURQUOISE = "turquoise",
}

const Button = ({
  buttonStyle = ButtonStyles.WHITE,
  disabled,
  children,
  handleClick,
}: ButtonProps): JSX.Element => {
  return (
    <button
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
