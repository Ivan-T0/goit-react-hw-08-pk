import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';
import cl from '../ContactForm/ContactForm.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleChange = event =>
    dispatch(setFilter(event.currentTarget.value.trim()));
  return (
    <label className={cl.label}>
      Find contacts by name:
      <input
        className={cl.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;
