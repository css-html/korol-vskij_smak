import React, { FC, DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title?: string;
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({ onClick, title, ...props }) => {
  return (
    <button className={cn(styles.c_button)} onClick={onClick} {...props}>
      {title}
    </button>
  );
};

export default Button;
