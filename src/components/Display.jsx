
import style from "./Display.module.css"

const Display = (props) => {
  return (
    <input type="text" className={style.display} value={props.displayValue} readOnly />
  )
}
export default Display