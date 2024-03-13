import React, { FC } from "react";
import { Modal } from "@/components/Modal";
import { Info } from "@/components/Info";
import { Button } from "@/components/Button";
import { Banner } from "@/components/Banner";

export interface IThankYouProps {}

export const ThankYou: FC<IThankYouProps> = () => {
  return (
    <Modal isOpen>
      <Banner imgSrc="2.png" />
      <Info
        imgSrc="1.svg"
        title="Дякуємо за ваш час та важливу відповідь!"
        text="Ваші відгуки допомагають нам покращувати якість наших послуг"
      />
      <Button title="Завершити" />
    </Modal>
  );
};

export default ThankYou;
