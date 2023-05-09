import { ReactNode } from "react";
import cx from "classnames";

import styles from "./Button.module.css";

interface ButtonProps {
  type?: "button" | "submit";
  buttonStyle?: ButtonStyles;
  className: string;
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
  className,
  disabled,
  children,
  handleClick,
}: ButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      className={cx(styles.button, className)}
      data-style={buttonStyle}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
