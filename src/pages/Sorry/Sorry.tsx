import React, { FC } from "react";
import { Modal } from "@/components/Modal";
import { Radio } from "@/components/Radio";
import { Info } from "@/components/Info";
import { Button } from "@/components/Button";
import { Banner } from "@/components/Banner";

export interface ISorryProps {}

export const Sorry: FC<ISorryProps> = () => {
  return (
    <Modal isOpen>
      <Banner imgSrc="2.png" />
      <Info
        imgSrc="1.svg"
        title="До зустрічі!"
        text="Ми завжди цінуємо ваш час. Сподіваємось, наступного разу у нас буде шанс поспілкуватися з вами. Дякуємо за розуміння!"
      />
      <Button title="Завершити" />
    </Modal>
  );
};

export default Sorry;
