import styled from "styled-components";
import { Colors } from "../styles/tokens";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const Sidebar = styled.div`
  flex: 1;
  background-color: ${Colors.offWhite};
  word-wrap: break-word;
  overflow: hidden;
  box-sizing: border-box;
`;

export const Main = styled.div`
  flex: 2;
  position: relative;
`;

export const SideContainer = styled.div`
  position: absolute;
  display: inline-block;
  left: 10px;
  top: 10px;
  flex-direction: row;
  padding-left: 20px;
`;

export const SideText = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  font-weight: 700;
`;

export const TextSideContainer = styled.div`
  position: relative;
  max-width: 33%;
  white-space: pre-wrap;
  display: inline-block;
  word-wrap: break-word;
  flex: 1;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  text-align: center;
  font-size: 30px;
  margin-left: 69px;
  margin-top: 50px;
`;

export const CenterDiv = styled.div`
  position: absolute;
  left: 170px;
  top: 540px;
`;

export const NextButton = styled.button`
  display: flex;
  display: inline-block;
  text-align: center;
  padding: 0px 15px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  height: 43px;
  vertical-align: middle;
  background: #4293ef;
  border: 0;
  font-size: 34px;
  color: #ffffff;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  width: 600px;
`;

export const PrevSubmitButton = styled.button`
  display: flex;
  display: inline-block;
  text-align: center;
  padding: 0px 15px;
  width: 100px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  height: 43px;
  vertical-align: middle;
  background: #4293ef;
  border: 0;
  font-size: 15px;
  color: #ffffff;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  margin: 15px;
`;
