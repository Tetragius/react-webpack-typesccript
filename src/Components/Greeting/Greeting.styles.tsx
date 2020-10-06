import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  background-color: #c2efe2;
  margin-bottom: 40px;
  border-radius: 16px;
  height: 328px;
  width: 1024px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding: 48px;
  box-sizing: border-box;
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

export const Image = styled.div`
  width: 264px;
  height: 100%;
  background-color: #bec7d2;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 72px;
`;

export const Name = styled.div`
  color: rgb(43, 45, 51);
  font-family: SFProDisplay-Semibold;
  font-size: 22px;
  font-weight: 600;
`;

export const Message = styled.div`
  color: rgb(43, 45, 51);
  font-family: SFProText-Regular;
  font-size: 14px;
  font-weight: normal;
  line-height: 24px;
`;

export const Controls = styled.div`
  display: flex;
`;
