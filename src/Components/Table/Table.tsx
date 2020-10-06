import React from "react";
import { Box } from "./Table.styles";
import { TableItem } from "./TableItem";

interface IProps {}

export const Table = (props: React.PropsWithChildren<IProps>) => {
  return <Box>{props.children}</Box>;
};

Table.Item = TableItem;

export default Table;
