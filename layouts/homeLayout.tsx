import { ReactNode } from "react";
import { Container, Main, MainContent } from "./homeLayout.style";

interface Props {
  main: ReactNode;
}

export function homeLayout({ main }: Props) {
  return (
    <Container>
      <Main>
        <MainContent>{main}</MainContent>
      </Main>
    </Container>
  );
}
