import upIcon from "../assets/img/up.png";
import downIcon from "../assets/img/down.png";

export default function MintCounter({ setCounter = () => null, counter }) {
  const onIncrement = () => {
    setCounter((p) => (p >= 5 ? 5 : ++p));
  };
  const onDecrement = () => {
    setCounter((p) => (p <= 1 ? 1 : --p));
  };
  return (
    <div className="counter-buttons-container">
      <button onClick={onDecrement} className="counter-button">
        <picture>
          <img src={downIcon.src} alt="down-icon" />
        </picture>
      </button>
      <div className="counter-display-container">
        <span className="counter-display">{counter}</span>
      </div>
      <button onClick={onIncrement} className="counter-button">
        <picture>
          <img src={upIcon.src} alt="up-icon" />
        </picture>
      </button>
    </div>
  );
}
