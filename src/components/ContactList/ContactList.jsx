import cl from '../ContactList/ContactList.module.css'
import { getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useDeleteContactMutation } from '../../redux/servises/contactsApi'
import { useGetContactByNameQuery } from '../../redux/servises/contactsApi'

const ContactList = () => {
  const filter = useSelector(getFilter);
  const [deleteContact, { isLoading }] = useDeleteContactMutation()
  const { data  } = useGetContactByNameQuery()

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return data.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <ul className={cl.contactList}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={cl.contactItem}>
            <span className={cl.contactName}>{contact.name}:</span> <br />
            <span className={cl.contactPhone}>{contact.phone}</span>
            <button
              className={`${cl.text__Button} ${cl.deleteButton}`}
              onClick={() => deleteContact(contact.id)}
              disabled={isLoading}
            >
              {isLoading ? 'Deleting...' : 'Delete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
