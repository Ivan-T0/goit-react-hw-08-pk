import { useDispatch } from 'react-redux';
import { setUserAndToken } from '../../redux/servises/authSlice';
import { useLoginMutation } from '../../redux/servises/contactsApi';

  const Login = () => {
    const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.currentTarget.elements.login.value;
    const password = e.currentTarget.elements.password.value;

    try {
      // Вызывайте функцию login и дождитесь ответа
      const response = await login({ email, password });

      if (response.data) {
        const { user, token } = response.data;

        // После успешной аутентификации сохраните пользователя и токен в состоянии Redux
        dispatch(setUserAndToken({ user, token }));
      } else {
        // Обработка ошибки аутентификации
      }
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