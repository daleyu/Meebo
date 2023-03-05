/* eslint-disable jsx-a11y/alt-text */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ChatWindow from "../../../components/ChatWindow";
import { CenteringDiv, TextArea } from "../../../layouts/homePage.style";
import {
  BootLegBody,
  OptionText,
  PetContainer,
  PetNameBubble,
  QuestionText
} from "../../../layouts/pet.style";
var counter = 0;
var frequency = 1 / 45.0;
const PetPage = ({ data, pageName }) => {
  var [headWobble, setHeadWobble] = useState(0);
  var amplitude = 0.01;
  useEffect(() => {
    const animationId = setInterval(() => {
      setHeadWobble((prev) => prev + 0.05);
    }, 10);
    return () => clearInterval(animationId);
  }, []);

  return (
    <div>
      <BootLegBody>
        <PetContainer>
          <div>
            <motion.img
              src={`/images/${pageName}_body.png`}
              alt="your image"
              width={250}
              height={200}
              style={{
                position: "absolute",
                top: "5vw",
                left: "21vw",
              }}
            />
            <motion.img
              src={`/images/${pageName}_head.png`}
              alt="your image"
              width={250}
              height={200}
              style={{
                position: "absolute",
                top: "6vw",
                left: "21vw",
              }}
              animate={{
                y: (headWobble =
                  amplitude * headWobble * Math.sin(frequency * counter++)),
              }}
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
