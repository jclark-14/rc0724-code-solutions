import { useState } from 'react';
import { Modal } from './Modal';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleDeleteClick() {
    setIsOpen(false);
    alert('Something was deleted!');
  }

  return (
    <>
      <button className="delete" onClick={() => setIsOpen(true)}>
        Delete!
      </button>
      <Modal isOpen={isOpen}>
        <div className="modal-div">
          <p>Are you sure you want to delete?</p>
          <div className="buttons">
            <button className="modal-button" onClick={() => setIsOpen(false)}>
              Cancel
            </button>
            <button className="modal-button" onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default App;
