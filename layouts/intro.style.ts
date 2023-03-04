import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const Main = styled.div`
  flex: 1;
  position: relative;
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  width: 206px;
  height: 116px;
`;
