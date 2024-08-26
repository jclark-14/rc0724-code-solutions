import { FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('username', userName);
    console.log('password', password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          onChange={(e) => setUserName(e.target.value)}
          name="username"></input>
      </label>
      <label>
        Password
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"></input>
      </label>
      <button>Submit</button>
    </form>
  );
}
