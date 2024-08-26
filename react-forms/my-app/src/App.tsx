// import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
// import { RegistrationFormControlled } from './RegistrationFromControlled';
import { UserForm } from './UserForm';
import './App.css';

const user = {
  username: 'Jody',
  password: 'hello',
};

function App() {
  return (
    <>
      <UserForm />
      <UserForm user={user} />
    </>
  );
}

export default App;
