import styled from "styled-components";
import { Colors } from "../styles/tokens";

export const InputButton = styled.div`
  background-color: ${Colors.primary};
  text-align: center;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  padding: 5px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

export const TextArea = styled.input`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 9px;
  border: black;
  padding-top: 10px;
  padding-bottom: 10px;
  border: solid 2px #e5e5e5;
  outline: 1;
  font: normal 13px/100% Verdana, Tahoma, sans-serif;
  background: #ffffff url("bg_form.png") left top repeat-x;
  width: 600px;
  background: -webkit-gradient(
    linear,
    left top,
    left 25,
    from(#ffffff),
    color-stop(4%, #eeeeee),
    to(#ffffff)
  );
  background: -moz-linear-gradient(top, #ffffff, #eeeeee 1px, #ffffff 25px);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
  -moz-box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
`;

export const CenteringDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: black;
  border-width: 1px;
`;

export const CenteringSection = styled.div`
  display: flex;
  position: absolute;
  margin-left: 13%;
  transform: translate(0, 50%);
  padding: 10px;
  justify-content: center;
  outline: 1px solid;
`;

export const WhiteSpace = styled.div`
  padding: 40px;
`;
