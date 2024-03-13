import React, { FC } from "react";
import { Modal } from "@/components/Modal";
import { Radio } from "@/components/Radio";
import { Info } from "@/components/Info";
import { Button } from "@/components/Button";
import { Banner } from "@/components/Banner";

export interface ISurveyProps {}

export const Survey: FC<ISurveyProps> = () => {
  return (
    <Modal isOpen isSurvey>
      <Banner imgSrc="2.png" />
      <Info
        title="Допоможіть нам стати краще та надайте, будь ласка, відповідь на запитання"
        text="Чи подобається Вам асортимент TM «Королівській Смак» в магазині, де Ви придбали наш товар?"
      />
      <Radio title="Yes" name="radio" variant="Yes" />
      <Radio title="No" name="radio" variant="No" />
      <Button title="Далі" disabled />
    </Modal>
  );
};

export default Survey;
