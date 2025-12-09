// import styles
import "./Button.css";
export default function Button({ buttonText, handleClick }) {
  return <button onClick={handleClick}> {buttonText} </button>;
}
