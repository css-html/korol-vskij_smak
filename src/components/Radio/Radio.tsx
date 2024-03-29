import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface IRadioProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title?: string;
  variant?: "Yes" | "No";
}

export const Radio: FC<IRadioProps> = ({ title, variant, ...props }) => {
  return (
    <label className={cn(styles.c_radio, styles.c_radio + variant)}>
      <input type="radio" defaultChecked={false} {...props} />
      {title && <span className={styles.c_radio__title}>{title}</span>}
    </label>
  );
};

export default Radio;
