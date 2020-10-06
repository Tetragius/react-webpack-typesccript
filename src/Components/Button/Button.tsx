import React from "react";
import { Box } from "./Button.styles";

interface IProps {
  onClick(): void;
}

export const Button = (props: React.PropsWithChildren<IProps>) => {
  return <Box onClick={props.onClick}>{props.children}</Box>;
};

export default Button;
