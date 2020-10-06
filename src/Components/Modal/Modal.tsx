import React, { useEffect } from "react";
import { Fade, Box, CloseIcon } from "./Modal.styles";

interface IProps {
  onClose(): void;
}
export const Modal = (props: React.PropsWithChildren<IProps>) => {
  useEffect(() => {
    return () => {
      console.log("closed");
    };
  }, []);

  return (
    <Fade onClick={props.onClose}>
      <Box>
        <CloseIcon onClick={props.onClose} />
        {props.children}
      </Box>
    </Fade>
  );
};

export default Modal;
