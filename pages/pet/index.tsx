import Image from "next/image";
import { BootLegBody, PetContainer } from "../../layouts/pet.style";

const page = () => {
  return (
    <div>
      <BootLegBody>
        <PetContainer>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="pet/dog">
              <Image
                src="/images/doggyDooDoo.png"
                alt="your image"
                width={500}
                height={400}
              />
            </a>
          </div>
        </PetContainer>
      </BootLegBody>
      {/* <PetRowContainer>
        <PetContainer>
          <a href="/pet/anything">
            <PetImage src="/images/dog.png" />
          </a>
          <PetName>My Pet Name</PetName>
        </PetContainer>
        <PetContainer>
          <a>
            <PetImage src="/images/dog.png" />
          </a>
          <PetName>My Pet Name</PetName>
        </PetContainer>
        <PetContainer>
          <a>
            <PetImage src="/images/dog.png" />
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
            <PetImage src="/images/dog.png" />
          </a>
          <PetName>My Pet Name</PetName>
        </PetContainer>
        <PetContainer>
          <a>
            <PetImage src="/images/dog.png" />
          </a>
          <PetName>My Pet Name</PetName>
        </PetContainer>
      </PetRowContainer> */}
    </div>
  );
};
export default page;
