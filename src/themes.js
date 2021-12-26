import { createGlobalStyle } from "styled-components";

export const lightTheme = {
	calculator:"#ffffff",
	buttons:"#F9F9F9",
	button:"#272b33",
  btnBgColor:"#F7F7F7",
buttonColor:"#000",
inputBgColor:"#fff",
inputColor:"#000",

icons:"#F9F9F9"

}
export const darkTheme = {
	calculator:"#22252D",
	fontColor:"#fff",
	buttons:"#292d36",
	button:"#272b33",
	buttonColor:"#fff",
  btnBgColor:"#272B33",
	inputBgColor:"#22252d",
	inputColor:"#fff",
  icons:"#292D36"
}

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
	background-color:#F5F3F3;

}

.container {
  width: 100%;
  display: flex;
  align-items: center;

  justify-content: center;
}

.calculator {
  width: 300px;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  border-radius: 2rem;
  margin-top: 4rem;
  background-color: ${props => props.theme.calculator};
}


input {
  width: 80%;
  height: 60%;
  background-color: transparent;
  border: none;
  padding: 1rem;
  padding-top: 7rem;

  font-size: 30px;
  text-align: right;
  color:  ${props => props.theme.inputColor};
}
input:focus {
  outline: none;
}
.buttons {
  width: 100%;
  margin-top: 1rem;
  border-top-right-radius: 3rem;
  border-top-left-radius: 3rem;
  border-radius: 2rem;
  background-color: ${props => props.theme.buttons};
  padding: 2rem;

  justify-content: center;
  flex-wrap: wrap;
}

.buttons2 {
  background-color: yellow;
}
button {
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  margin: 0.3rem;
  background-color: ${props => props.theme.btnBgColor};
  border: none;
  color: ${props => props.theme.buttonColor};
}
.operator {
  color: #cb5c5e;
}

.function {
  color: #26e2c1;
  width: 110px;
}
.icons {
  border-radius: 50%;
  padding: 0.5rem 1.5rem;
  align-items: center;
  background-color: ${props => props.theme.icons};
  display: flex;
}

#switch {
  width: 2rem;
}


`