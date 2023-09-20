import { NavLink, Outlet} from 'react-router-dom';
import cl from './Layout.module.css';

const Layout = () => {
    console.log('ldlfcd')
  
  return (
     <div>
      <header className={cl.header}>
        <nav className={cl.navLink}>
          <ul className={cl.list}>
            <li className={cl.list_item}>
              <NavLink to="/contacts" className={cl.list_link}>
                Контакты
              </NavLink>
            </li>
            <li className={cl.list_item}>
              <NavLink to="/login" className={cl.list_link}>
                Логин
              </NavLink>
            </li>
            <li className={cl.list_item}>
              <NavLink to="/register" className={cl.list_link}>
                Регистрация
              </NavLink>
                      </li>
                      <li className={cl.list_item}>
              <NavLink to="/menu" className={cl.list_link}>
                Меню користувача
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={cl.container}>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
