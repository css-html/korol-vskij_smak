import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Icon from "@/icons";

export interface IModalProps {
  children?: ReactNode;
  isOpen?: boolean;
  isSurvey?: boolean;
  onClick?: () => void;
}

export const Modal: FC<IModalProps> = ({
  onClick,
  children,
  isOpen,
  isSurvey,
}) => {
  return (
    <div
      className={cn(
        styles.c_modal,
        isOpen && "c_modal__isOpen",
        isSurvey && "c_modal__isSurvey"
      )}
    >
      <div className={styles.c_modal__content}>
        <>
          <button
            className={styles.c_modal__close}
            onClick={onClick}
            type="button"
          >
            <Icon.IconXmark />
          </button>
          {children}
        </>
      </div>
    </div>
  );
};

export default Modal;
