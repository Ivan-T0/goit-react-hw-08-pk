import { useLogoutMutation } from '../../redux/servises/contactsApi';

const UserMenu = () => {
  const [logout] = useLogoutMutation();

  const handleLogout = () => {
    // Вызов функции logout для выполнения выхода пользователя
    logout();
  };

  return (
    <div>
      <p>mango@mail.com</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;