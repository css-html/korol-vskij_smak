import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Icon from "@/icons";

export interface IBannerProps {
  imgSrc?: string;
}

export const Banner: FC<IBannerProps> = ({ imgSrc }) => {
  return (
    <div className={cn(styles.c_banner)}>
      {imgSrc && <img src={imgSrc} alt="image" loading="lazy" />}
    </div>
  );
};

export default Banner;
