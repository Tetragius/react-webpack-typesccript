import styled from "styled-components";

export const Fade = styled.div`
  position: absolute;
  background: rgba(216, 216, 216, 0.5);
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: 0px 2px 12px 0px rgba(43, 45, 51, 0.12);
  height: 426px;
  width: 552px;
  position: relative;
  box-sizing: border-box;
  padding: 48px;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 14px;
  height: 14px;
  background: #000;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #cccc;
  }
`;
