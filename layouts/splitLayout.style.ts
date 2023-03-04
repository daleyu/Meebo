import styled from "styled-components";
import { Colors } from "../styles/tokens";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const Sidebar = styled.div`
  flex: 1;
  background-color: ${Colors.offWhite};
`;

export const Main = styled.div`
  flex: 2;
  position: relative;
`;

export const MainContent = styled.div`
  padding: 60px 30px 30px 30px;
  position: relative;
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  width: 206px;
  height: 116px;
`;
