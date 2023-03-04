import { ReactNode } from "react";
import { Container, Main, MainContent } from "./splitLayout.style";

interface Props {
  sidebar: ReactNode;
  main: ReactNode;
}

export function SplitLayout({ sidebar, main }: Props) {
  return (
    <Container>
      <Main>
        <MainContent>{main}</MainContent>
      </Main>
    </Container>
  );
}
