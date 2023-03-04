import styled from "styled-components";
import { Colors } from "../styles/tokens";

export const InputButton = styled.div`
  text-align: center;
  color: white;
  font-weight: 600;
  text-decoration: None;
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
  border-radius: 96px;
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
`;

export const CenteringSection = styled.div`
  display: flex;
  position: absolute;
  margin-left: 27%;
  transform: translate(0, 20%);
  padding: 10px;
  justify-content: center;
`;

export const WhiteSpace = styled.div`
  padding: 40px;
`;

export const HomeScreen = styled.div`
  background-color: ${Colors.green}; //linear-gradient(106.07deg, #a9dcc5 8.55%, #60a888 93.3%);
  width: 100%;
  height: 100vw;
  overflow-x: hidden;
`;

// export const StyledLink = styled(withRouter(Link))`
//   color: white;
//   text-decoration: none;
// `;

export const NextLabel = styled.p`
  color: white;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: grey;
  }
`;
