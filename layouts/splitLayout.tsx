import Image from "next/image";
import { ReactNode } from "react";
import logo from "../public/images/logo.png";
import {
  Container,
  LogoContainer,
  Main,
  MainContent,
  Sidebar,
} from "./splitLayout.style";

interface Props {
  sidebar: ReactNode;
  main: ReactNode;
}

export function SplitLayout({ sidebar, main }: Props) {
  return (
    <Container>
      <Sidebar>{sidebar}</Sidebar>
      <Main>
        <LogoContainer>
          <Image src={logo} layout="responsive" />
        </LogoContainer>
        <MainContent>{main}</MainContent>
      </Main>
    </Container>
  );
}
