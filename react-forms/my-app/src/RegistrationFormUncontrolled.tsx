import type { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { username, password } = Object.fromEntries(formData);
    console.log('username:', username);
    console.log('password:', password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input type="username" name="username"></input>
      </label>
      <label>
        Password
        <input type="password" name="password"></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
