import styled from "styled-components";

//make a new styled component called PetContainer that wraps image in circle
export const PetContainer = styled.div`
  overflow: hidden;
  width: 28%;
  margin: 0 auto;
  margin-top: 12vw;
  margin-bottom: 20px;
`;
export const PetContainers = styled.div`
  overflow: hidden;
  width: 30%;
  margin: 0 auto;
  margin-top: 15vw;
  margin-bottom: 20px;
`;
//make a new styled component called PetImage that is the image of the pet
export const PetImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
//make a new styled component called PetName that is the name of the pet
export const PetName = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 0;
  margin-bottom: 10px;
`;

export const BootLegBody = styled.div`
  background: linear-gradient(106.07deg, #a9dcc5 8.55%, #60a888 93.3%);
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const GearL = styled.div`
  width: 50vw;
  position: absolute;
  top: 0px;
  left: -32vw;
  overflow: hidden;
`;

export const GearR = styled.div`
  width: 50vw;
  position: absolute;
  top: 0px;
  left: 82vw;
  overflow: hidden;
`;

export const Description = styled.div`
  width: 100vw;
  position: absolute;
  top: 40vw;
  left: 0vw;
  overflow: hidden;
  font-size: 1.5vw;
  font-family: heebo;
  text-align: center;
`;

//create petname bubble
export const PetNameBubble = styled.div`
  background: #ffffff;
  border-radius: 90px;
  width: 10%;
  height: 50px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

// create text entry round box for asking questions
export const QuestionBox = styled.div`
  background: #ffffff;
  border-radius: 90px;
  width: 80%;
  height: 50px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

// center text in question box
export const QuestionText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin: 0;
`;

//make option font larger
export const OptionText = styled.p`
  font-size: 3rem;
  margin: 0;
`;
