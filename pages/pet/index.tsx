import { PetContainer, PetImage, PetName } from "../../layouts/pet.style";

const page = () => {
  return (
    <div>
      <h1>My Pet</h1>
      <PetContainer>
        {/* take image from public testDog */}
        <PetImage src="/images/testDog.png" />
        <PetName>My Pet Name</PetName>
      </PetContainer>
      <PetContainer>
        {/* take image from public testDog */}
        <PetImage src="/images/testDog.png" />
        <PetName>My Pet Name</PetName>
      </PetContainer>
      <PetContainer>
        {/* take image from public testDog */}
        <PetImage src="/images/testDog.png" />
        <PetName>My Pet Name</PetName>
      </PetContainer>
    </div>
  );
};
export default page;
