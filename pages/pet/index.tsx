import { InputButton } from "../../layouts/homePage.style";
import {
  PetContainer,
  PetImage,
  PetName,
  PetRowContainer,
} from "../../layouts/pet.style";

const page = () => {
  return (
    <div>
      <InputButton>
        {" "}
        <a href="../"> back </a>{" "}
      </InputButton>
      <PetRowContainer>
        <PetContainer>
          {/* take image from public testDog */}
          <a href="/pet/anything">
            <PetImage src="/images/testDog.png" />
          </a>
          <PetName>My Pet Name</PetName>
        </PetContainer>
        <PetContainer>
          {/* take image from public testDog */}
          <a>
            <PetImage src="/images/testDog.png" />
          </a>
          <PetName>My Pet Name</PetName>
        </PetContainer>
        <PetContainer>
          {/* take image from public testDog */}
          <a>
            <PetImage src="/images/testDog.png" />
          </a>
          <PetName>My Pet Name</PetName>
        </PetContainer>
      </PetRowContainer>
      <PetRowContainer>
        <PetContainer>
          {/* take image from public testDog */}
          <a>
            <PetImage src="/images/testDog.png" />
          </a>
          <PetName>My Pet Name</PetName>
        </PetContainer>
        <PetContainer>
          {/* take image from public testDog */}
          <a>
            <PetImage src="/images/testDog.png" />
          </a>
          <PetName>My Pet Name</PetName>
        </PetContainer>
        <PetContainer>
          {/* take image from public testDog */}
          <a>
            <PetImage src="/images/testDog.png" />
          </a>
          <PetName>My Pet Name</PetName>
        </PetContainer>
      </PetRowContainer>
    </div>
  );
};
export default page;
