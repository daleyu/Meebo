import styled from "styled-components";

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
  margin-top: 0.7vw;
  margin-bottom: 0.7vw;
  padding: 0.65vw;
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
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
  padding: 10px;
  justify-content: center;
`;

export const WhiteSpace = styled.div`
  padding: 2.77vw;
`;

export const HomeScreen = styled.div`
  background: linear-gradient(106.07deg, #a9dcc5 8.55%, #60a888 93.3%);
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  align-items: center;
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
export const QueryArea = styled.textarea`
  text-align: center;
  margin-top: 0.7vw;
  margin-bottom: 0.7vw;
  padding: 0.65vw;
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

//button with type="submit" and nice and round
export const ChatButton = styled.button`
  text-align: center;
  margin: 20px;
  padding: 0.65vw;
  border: black;
  border-radius: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

//chat bubble for animal talking
export const ChatBubble = styled.div`
  position: absolute;
  left: 50vw;
  top: 20vh;
  text-align: center;
  margin: 20px;
  padding: 0.65vw;
  border: black;
  border-radius: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #ffffff;
  background: -webkit-gradient(
    linear,
    left top,
    left 25,
    from(#ffffff),
    color-stop(4%, #eeeeee),
    to(#eeeeee)
  );
  width: 600px;
  height: 300px;
`;
