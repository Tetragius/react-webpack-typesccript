import React from "react";
import { Box } from "./TableItem.styles";

export const TableItem = (props: React.PropsWithChildren<any>) => {
  return <Box>{props.children}</Box>;
};

export default TableItem;
