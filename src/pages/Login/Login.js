import { startTransition } from 'react';
import { useLoginMutation } from '../../redux/servises/contactsApi';

  const Login = () => {
    const [login, { isLoading }] = useLoginMutation();

    const handleLogin = async (e) => {
      e.preventDefault();
      
      const email = e.currentTarget.elements.login.value;
      const password = e.currentTarget.elements.password.value;

      try {
        // Используйте startTransition перед асинхронным вызовом
        startTransition(() => {
          login({ email, password }); // Вызов функции логина
        });
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="login" type='email'></input>
        </label>
        <label>
          Password
          <input name="password" type='password'></input>
        </label>
        <button  disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
    );
  };

  export default Login;