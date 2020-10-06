import React, { useCallback, useState } from "react";
import {
  Box,
  CloseIcon,
  Image,
  Data,
  Name,
  Message,
  Controls,
} from "./Greeting.styles";
import { Button } from "../Button";

interface IProps {
  name?: string;
  message: string;
  onClose(): void;
  onCreate?(): void;
}

export const Greeting = (props: IProps) => {
  const { name, message, onClose, onCreate, ...args } = props;

  const clickHandlerClose = useCallback(() => {
    if (typeof onClose === "function") {
      onClose();
    }
  }, [onClose]);

  const clickHandlerCreate = useCallback(() => {
    if (typeof onCreate === "function") {
      onCreate();
    }
  }, [onCreate]);

  return (
    <Box {...args}>
      <CloseIcon onClick={clickHandlerClose} />
      <Image />
      <Data>
        <Name>Здравствуйте, {name}</Name>
        <Message>{message}</Message>
        <Controls>
          <Button onClick={clickHandlerCreate}>Создать</Button>
          <Button onClick={clickHandlerClose}>Скрыть баннер</Button>
        </Controls>
      </Data>
    </Box>
  );
};
export default Greeting;
