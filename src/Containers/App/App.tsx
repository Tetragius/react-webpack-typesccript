import React, { useState, useCallback, useEffect } from "react";
import { Box } from "./App.styles";
import { Head, Greeting, Table, Modal, Button } from "../../Components";
import { getList } from "../../EndPoints";

const oldItems = ["item11", "item12"];
export default function App() {
  const [showGreeting, setShowGreeting] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);
  const [isCurrent, setIsCurrent] = useState(true);

  const clickHandlerClose = useCallback(() => {
    setShowGreeting(false);
  }, []);

  const clickHandlerCreate = useCallback(() => {
    setShowModal(true);
  }, []);

  const clickHandlerCloseModa = useCallback(() => {
    setShowModal(false);
  }, []);

  const toggleItems = useCallback(() => {
    setIsCurrent(!isCurrent);
  }, [isCurrent]);

  const addItem = useCallback(() => {
    setItems((_items) => [..._items, `item${_items.length + 1}`]);
  }, []);

  useEffect(() => {
    getList("url").then(setItems);
  }, []);

  return (
    <Box>
      <Head />
      {showGreeting && (
        <Greeting
          message={"message"}
          name={"name"}
          onClose={clickHandlerClose}
          onCreate={clickHandlerCreate}
        />
      )}
      {showModal && (
        <Modal onClose={clickHandlerCloseModa}>
          <Button onClick={addItem}>Добавить</Button>
        </Modal>
      )}
      {items.length === 0 ? (
        "loading"
      ) : (
        <Table>
          <Button onClick={toggleItems}>Ближайшие</Button>
          <Button onClick={toggleItems}>Архив</Button>
          {(isCurrent ? items : oldItems).map((elem, index) => (
            <Table.Item key={index}>{elem}</Table.Item>
          ))}
        </Table>
      )}
    </Box>
  );
}
