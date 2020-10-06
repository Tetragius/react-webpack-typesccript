import styled from "styled-components";

export const Box = styled.div`
  background: rgb(3, 112, 128);
  border-radius: 4px;
  height: 40px;
  width: 145px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 24px;
  cursor: pointer;
  transition: all 0.2s;
  box-sizing: border-box;
  &:hover {
    background: transparent;
    border: 2px solid rgb(0, 68, 84);
    color: rgb(3, 112, 128);
  }
`;
