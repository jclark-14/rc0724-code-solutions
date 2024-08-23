import { useState } from 'react';

const buttonOffStyling = [
  'w-36 h-18 bg-slate-400 rounded-full border-4 border-slate-700',
  'w-16 h-16 bg-white rounded-full float-left border-slate-700 border-4',
];
const buttonOnStyling = [
  'w-36 h-18 bg-green-700 rounded-full border-4 border-slate-700',
  'w-16 h-16 bg-white rounded-full float-right border-slate-700 border-4',
];
const textOnOff = ['OFF', 'ON'];
const height = [
  'relative bottom-40 flex align-center',
  'relative bottom-10 flex align-center ',
];

export function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  let styleButton = isOn ? buttonOnStyling[0] : buttonOffStyling[0];
  let styleToggle = isOn ? buttonOnStyling[1] : buttonOffStyling[1];
  let text = isOn ? textOnOff[1] : textOnOff[0];
  let position = isOn ? height[1] : height[0];
  function handleClick() {
    if (!isOn) {
      setIsOn(true);
    } else {
      setIsOn(false);
    }
    styleButton = isOn ? buttonOnStyling[0] : buttonOffStyling[0];
    styleToggle = isOn ? buttonOnStyling[1] : buttonOffStyling[1];
    text = isOn ? textOnOff[1] : textOnOff[0];
    position = isOn ? height[1] : height[0];
  }

  return (
    <div className={position}>
      <button onClick={handleClick} className={styleButton}>
        <div className={styleToggle}></div>
      </button>
      <p className="text-black text-2xl font-bold ml-4 my-auto">{text}</p>
    </div>
  );
}
