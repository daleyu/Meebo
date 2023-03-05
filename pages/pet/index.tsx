import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
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
  currentOffsetY = offsetYBody[(nameIndex % 360) / 60];
  currentImgPath = imgsrcsFull[(nameIndex % 360) / 60];
  path = currentImgPath.slice(8, -4);
  console.log(currentOffsetY);
};
const descriptions = [
  "Georgie the dog loves to recycle, he even barks at people who don't!",
  "Patrick the penguin is a master of energy conservation, he only waddles as fast as he needs to!",
  "Clifford the pig is a composting champ, he turns food scraps into garden gold!",
  'Jake the rabbit is all about "slow food", he chews every bite at a snail\'s pace to savor the flavor!',
  "Andrej the chicken is an egg-cellent conservationist, she turns off the lights as she leaves the coop!",
  "Del the bear is a real tree-hugger, he gives every trunk a big ol' bear hug to show his appreciation!",
];

const imgsrcsBody = [
  "/images/Dog_Body.png",
  "/images/Penguin_Body.png",
  "/images/pig_body.png",
  "/images/bunny_body.png",
  "/images/chicken_body.png",
  "/images/bear_body.png",
];

const imgsrcsHead = [
  "/images/Dog_Head.png",
  "/images/Penguin_Head.png",
  "/images/pig_head.png",
  "/images/bunny_head.png",
  "/images/chicken_head.png",
  "/images/bear_head.png",
];

const imgsrcsFull = [
  "/images/dog.png",
  "/images/penguin.png",
  "/images/pig.png",
  "/images/bunny.png",
  "/images/chicken.png",
  "/images/bear.png",
];

const offsetYBody = ["0", "1", "6", "0", "2", "2"];

var currentOffsetY = offsetYBody[(nameIndex % 360) / 60];
var path = imgsrcsFull[(nameIndex % 360) / 60];
var currentImgPath = imgsrcsFull[(nameIndex % 360) / 60];

function page() {
  const [rotate, setRotate] = React.useState(false);
  var imgSrc = imgsrcsFull[(nameIndex % 360) / 60];
  var path = imgSrc.slice(8, -4);
  return (
    <div
      style={{
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
        position: "fixed",
      }}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        style={{
          width: "30vw",
          height: "7vw",
          borderRadius: "50%",
          position: "absolute",
          zIndex: "0",
          top: "27vw",
          left: "50vw",
          transform: "translateX(-50%)",
          backgroundColor: "red",
          background: "#649A82",
        }}
      ></div>
      <BootLegBody>
        <PetContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              top: `${currentOffsetY}vw`,
            }}
          >
            <a href={"pet/" + path}>
              console.log({path});
              <Image
                src={imgsrcsFull[(nameIndex % 360) / 60]}
                alt="your image"
                width={500}
                height={400}
              />
            </a>
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
        <Description>{descriptions[(nameIndex % 360) / 60]}</Description>
      </BootLegBody>
    </div>
  );
}
export default page;
