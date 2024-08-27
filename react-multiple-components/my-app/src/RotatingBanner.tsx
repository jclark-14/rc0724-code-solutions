type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  return (
    <div className="container">
      <Banner items={items} />
      <NextButton />
      <Indicators items={items} />
      <PrevButton />
    </div>
  );
}

function Banner({ items }: Props) {
  return <h1>{items[0]}</h1>;
}

function PrevButton() {
  return (
    <div className="button-div">
      <button>Prev</button>
    </div>
  );
}

function NextButton() {
  return (
    <div className="button-div">
      <button>Next</button>
    </div>
  );
}

function Indicators({ items }: Props) {
  const buttons = [];
  for (let i = 0; i < items.length; i++) {
    buttons.push(<button className="indicator-button">{[i]}</button>);
  }
  return <div className="button-div">{buttons}</div>;
}
