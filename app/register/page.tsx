import {AuthDetails} from '../../src/components/authentication/AuthDetails';
import {LoginForm} from '../../src/components/authentication/LoginForm';
import {RegisterForm} from '../../src/components/authentication/RegisterForm';

export default function register() {
  return (
    <div>
      <RegisterForm />
      <LoginForm />
      <AuthDetails />
    </div>
  );
}
