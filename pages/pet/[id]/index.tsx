/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import ChatWindow from "../../../components/ChatWindow";
import { CenteringDiv, TextArea } from "../../../layouts/homePage.style";
import {
  BootLegBody,
  OptionText,
  PetContainer,
  PetNameBubble,
  QuestionText,
} from "../../../layouts/pet.style";

const PetPage = ({ data, pageName }) => {
  return (
    <div>
      <BootLegBody>
        <PetContainer>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src={`/images/${pageName}.png`}
              alt="your image"
              width={500}
              height={400}
            />
          </div>
        </PetContainer>
        <PetNameBubble>
          <QuestionText>{pageName}</QuestionText>
        </PetNameBubble>
        <CenteringDiv>
          <TextArea type="text" />
          <OptionText>⚙️</OptionText>
        </CenteringDiv>
        <CenteringDiv>
          <ChatWindow />
        </CenteringDiv>
      </BootLegBody>
    </div>
  );
};

export async function getStaticPaths() {
  const { animals_categories } = await import("../../../data/data.json");
  const allPaths = animals_categories.map((ev) => {
    return {
      params: {
        id: ev.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const post = await import("../../../data/data.json");
  const data = post.animals_categories.find((ev) => ev.id === id);
  return {
    props: {
      data,
      pageName: id,
    },
  };
}

export default PetPage;
