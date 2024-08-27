import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

let stockText = 'Password must ';
let lengthText;

export function PasswordInput() {
  const [password, setPassword] = useState('');
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  let xClass = 'x';
  let checkClass = 'check hidden';

  lengthText = password.length >= 8 ? '' : 'contain at least 8 characters';
  stockText = password.length >= 8 ? '' : 'Password must ';
  if (password.length >= 8) {
    xClass = 'x hidden';
  }
  if (password.length >= 8) {
    checkClass = 'check';
  }

  return (
    <form>
      <div>
        <label>
          Password:
          <input
            value={password}
            type="Password"
            onChange={handleChange}></input>
          <FaCheck className={checkClass} />
          <FaTimes className={xClass} />
        </label>
      </div>
      <p>
        {stockText}
        {lengthText}
      </p>
    </form>
  );
}
