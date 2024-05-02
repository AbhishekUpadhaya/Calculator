
import style from "./App.module.css"
import ButtonsContainer from "./components/ButtonsContainer"
import Display from "./components/Display"
import { useState } from "react"
import Calheader from "./components/Calheader"
function App() {

  const [calVal, setcalVal] = useState("");

  const onBottonClick = (buttonText) => {
    // console.log(buttonText);
    if (buttonText === 'C') {
      setcalVal("");
    }
    else if (buttonText === '=') {
      const result = eval(calVal);
      setcalVal(result);
    }
    else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  }
  return (

    <div className={style.container}>
      <Calheader></Calheader>
      <div className={style.calculator}>
        <Display displayValue={calVal} />
        <ButtonsContainer onBottonClick={onBottonClick} />
      </div>
    </div>

  )
}

export default App
