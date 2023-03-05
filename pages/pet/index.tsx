import { motion } from "framer-motion";
import * as React from "react";
import {
  BootLegBody,
  Description,
  GearL,
  GearR,
  PetContainer,
} from "../../layouts/pet.style";
let nameIndex = 0;
const rotateGear = () => {
  nameIndex = nameIndex + (60 % 360);
};
const descriptions = [
  "Georgie the dog loves to recycle, he even barks at people who don't!",
  "Patrick the penguin is a master of energy conservation, he only waddles as fast as he needs to!",
  "Clifford the pig is a composting champ, he turns food scraps into garden gold!",
  'Jake the rabbit is all about "slow food", he chews every bite at a snail\'s pace to savor the flavor!',
  "Andrej the chicken is an egg-cellent conservationist, she turns off the lights as she leaves the coop!",
  "Del the bear is a real tree-hugger, he gives every trunk a big ol' bear hug to show his appreciation!",
];

const page = () => {
  const [rotate, setRotate] = React.useState(false);

  return (
    <div
      style={{
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
        position: "fixed",
      }}
    >
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

        <GearL>
          <motion.div
            animate={{ rotate: nameIndex }}
            initial={{ rotate: 0 }}
            onClick={() => {
              setRotate(!rotate);
              rotateGear();
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <motion.img
                src="/images/gearL.png"
                alt="your image"
                style={{
                  width: "100%",
                  filter: "drop-shadow(0px 0px 10px rgba(121, 165, 146, 0.41))",
                }}
              />
            </div>
          </motion.div>
        </GearL>
        <GearR>
          <motion.div
            animate={{ rotate: nameIndex }}
            initial={{ rotate: 0 }}
            onClick={() => {
              setRotate(!rotate);
              rotateGear();
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <motion.img
                src="/images/gearR.png"
                alt="your image"
                style={{
                  width: "100%",
                  filter: "drop-shadow(0px 0px 10px rgba(121, 165, 146, 0.41))",
                }}
              />
            </div>
          </motion.div>
        </GearR>
        <Description>But I'll alright</Description>
      </BootLegBody>
    </div>
  );
};
export default page;
