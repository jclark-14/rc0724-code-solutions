import './Button.css';
import { useState } from 'react';

let color = 'black';
let fontColor = 'font-white';

export function Button() {
  const [index, setIndex] = useState(1);

  function handleClick() {
    setIndex(index + 1);
    console.log(index);
    if (index >= 18) {
      color = 'white';
    } else if (index >= 15) {
      color = 'yellow';
    } else if (index >= 12) {
      color = 'orange';
      fontColor = 'font-black';
    } else if (index >= 9) {
      color = 'red';
    } else if (index >= 6) {
      color = 'purple';
    } else if (index >= 3) {
      color = 'dark-purple';
    }
  }

  return (
    <button onClick={handleClick} className={color}>
      <p className={fontColor}>Hot Button</p>
    </button>
  );
}
