import { startTransition } from 'react';
import { useRegisterMutation } from '../../redux/servises/contactsApi';

const Register = () => {
  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const email = e.currentTarget.elements.login.value;
    const password = e.currentTarget.elements.password.value;

    try {
      // Используйте startTransition перед асинхронным вызовом
      startTransition(() => {
        register({ name, email, password }); // Вызов функции регистрации
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" placeholder="User name..."></input>
      </label>
      <label>
        Login
        <input name="login" type='email'></input>
      </label>
      <label>
        Password
        <input name="password" type='password'></input>
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
};

export default Register;