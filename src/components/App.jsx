
// import { useGetContactByNameQuery } from '../redux/servises/contactsApi';
import { Routes, Route } from 'react-router-dom';


import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Register from '../pages/Register/Regicter';
import Filter from './Filter/Filter';
import Layout from './Layout/Layout';
import Login from '../pages/Login/Login';
import UserMenu from './UserMenu/UserMenu';


const App = () => {
  


  return (
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="contacts" element={<ContactForm />}>
          <Route path='list' element={<ContactList />} />
          <Route path="filter" element={<Filter />} />
        </Route> 
        <Route path='menu' element={<UserMenu/>}></Route>
        
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
