import { Popup } from './Popup';
import { useState, useRef } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const positionTo = useRef(null);

  return (
    <>
      <button ref={positionTo} onClick={() => setIsOpen((prev) => !prev)}>
        Pop up!
      </button>
      {isOpen && (
        <Popup
          onClose={() => setIsOpen((prev) => !prev)}
          positionTo={positionTo.current}>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            <li>Menu Item 4</li>
          </ul>
        </Popup>
      )}
    </>
  );
}

export default App;
