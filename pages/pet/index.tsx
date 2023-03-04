import { BootLegBody, PetContainer } from "../../layouts/pet.style";

const page = () => {
  return (
    <div>
      <BootLegBody>
        <PetContainer>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/images/doggyDooDoo.png"
              alt="your image"
              style={{ width: "100%" }}
            />
          </div>
        </PetContainer>
      </BootLegBody>
      {/* <PetRowContainer>
        <PetContainer>
          <a href="/pet/anything">
            <PetImage src="/images/testDog.png" />
          </a>
          <PetName>My Pet Name</PetName>
        </PetContainer>
        <PetContainer>
          <a>
            <PetImage src="/images/testDog.png" />
          </a>
          <PetName>My Pet Name</PetName>
        </PetContainer>
        <PetContainer>
          <a>
            <PetImage src="/images/testDog.png" />
          </a>
          <PetName>My Pet Name</PetName>
        </PetContainer>
      </PetRowContainer>
      <PetRowContainer>
        <PetContainer>
          <a>
          </a>
          <PetName>My Pet Name</PetName>
        </PetContainer>
        <PetContainer>
          <a>
            <PetImage src="/images/testDog.png" />
          </a>
          <PetName>My Pet Name</PetName>
        </PetContainer>
        <PetContainer>
          <a>
            <PetImage src="/images/testDog.png" />
          </a>
          <PetName>My Pet Name</PetName>
        </PetContainer>
      </PetRowContainer> */}
    </div>
  );
};
export default page;
