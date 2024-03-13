import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Icon from "@/icons";

export interface IInfoProps {
  text?: string;
  title?: string;
  imgSrc?: string;
}

export const Info: FC<IInfoProps> = ({ text, title, imgSrc }) => {
  return (
    <div className={cn(styles.c_info)}>
      {imgSrc && (
        <div className={styles.c_info__img}>
          <img src={imgSrc} alt="image" loading="lazy" />
        </div>
      )}
      {title && <div className={styles.c_info__title}>{title}</div>}
      {text && <div className={styles.c_info__text}>{text}</div>}
    </div>
  );
};

export default Info;
