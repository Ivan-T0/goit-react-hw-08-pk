import cl from './ContactForm.module.css';
import { useCreateContactMutation } from '../../redux/servises/contactsApi';
import { startTransition } from 'react';



const ContactForm = () => {
  const [newContact, { isLoading: isDeleting }] = useCreateContactMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const phone = e.currentTarget.elements.phone.value;

    e.currentTarget.reset();
    try {
       startTransition(() => {
        newContact({ name, phone });
      });
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className={cl.label}>Name</label>
        <input
          className={cl.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label className={cl.label}>Number</label>
        <input
          className={cl.input}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button disabled={isDeleting} className={cl.button} type="submit">
          {isDeleting ? 'Loading...' : 'Add Contact'}
        </button>
      </form>
       
      
    </div>
  );
};

export default ContactForm;
