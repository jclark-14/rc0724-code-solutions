import { useState } from 'react';

type Props = {
  items: string[];
  currentIndex?: number;
  onClick?: (index: number) => void;
};

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(3);

  function handlePrevClick() {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }

  function handleNextClick() {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  function handleIndicatorClick(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div className="container">
      <Banner items={items} currentIndex={currentIndex} />
      <NextButton onClick={handleNextClick} />
      <Indicators
        items={items}
        currentIndex={currentIndex}
        onClick={handleIndicatorClick}
      />
      <PrevButton onClick={handlePrevClick} />
    </div>
  );
}

function Banner({ items, currentIndex }: Props) {
  return <h1>{items[currentIndex ?? 0]}</h1>;
}

function PrevButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="button-div prev">
      <button onClick={onClick}>Prev</button>
    </div>
  );
}

function NextButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="button-div">
      <button onClick={onClick}>Next</button>
    </div>
  );
}

function Indicators({ items, currentIndex, onClick }: Props) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const eventTarget = e.currentTarget as HTMLElement;
    console.log(eventTarget.innerHTML);
    const index = Number(eventTarget.innerHTML);
    if (onClick) {
      onClick(index);
    }
  }

  const buttons = [];
  for (let i = 0; i < items.length; i++) {
    buttons.push(
      <button
        className={
          i === currentIndex ? 'indicator-button selected' : 'indicator-button '
        }
        onClick={handleClick}>
        {i}
      </button>
    );
  }
  return <div className="button-div">{buttons}</div>;
}
