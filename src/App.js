import React, { useState } from "react";
import "./App.css";
import { WiDaySunny } from "react-icons/wi";
import { MdNightlightRound } from "react-icons/md";
import styled,{ ThemeProvider } from "styled-components";
import {lightTheme, darkTheme, GlobalStyle} from "./themes"

function App() {
  const [input, setinput] = useState("");
const [theme, setTheme] = useState("dark");
const lightToggle = () =>{
   setTheme("light") 
}

const darkToggle = ()=>{
  setTheme("dark");

}
 const StyledApp =  styled.div`
 color: ${(props)=> props.theme.fontColor};
 `


  const handleClick = (e) => {
    setinput(input.concat(e.target.name));
  };
  const clear = () => {
    setinput("");
  };
  const backspace = () => {
    setinput(input.slice(0, -1));
  };
  const result = () => {
    try {
      setinput(eval(input).toString());
      console.log();
    } catch (error) {
      setinput("Error");
    }
  };

  return (
    <ThemeProvider theme={theme ==="light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledApp>
    <div 
   
    className="container"
    >
      <div className="calculator">
        <div  
        
        className="icons">
          <WiDaySunny
            style={{
              backgroundColor : "transparent"
            }}
           onClick={lightToggle}
            fill="#cb5c5e"
            size={32}
          />
          <MdNightlightRound 
            style={{
              backgroundColor : "transparent"
            }}
          onClick={darkToggle} fill="#26e2c1" size={26} />
        </div>
        <input type="text" value={input} />
        <div className="buttons">
          <button id="clear" className="function" onClick={clear}>
            AC
          </button>
          <button id="delete" onClick={backspace}>
            C
          </button>

          <button name="/" className="operator" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" className="operator" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" className="operator" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" className="operator" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button id="result" className="function" onClick={result}>
            =
          </button>
        </div>
      </div>
    </div>
    </StyledApp>
    </ThemeProvider>
  );
}

export default App;
