import { FormEvent, useState } from 'react';

type User = {
  username: string;
  password: string;
};

type Props = {
  user?: User;
};

export function UserForm({ user }: Props) {
  const [userName, setUserName] = useState(user?.username ?? '');
  const [password, setPassword] = useState(user?.password ?? '');
  const isCreating = user === undefined;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('username', userName);
    console.log('password', password);
    console.log(isCreating ? 'created' : 'updated');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          name="username"></input>
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"></input>
      </label>
      <button>{isCreating ? 'Submit' : 'Update'}</button>
    </form>
  );
}
