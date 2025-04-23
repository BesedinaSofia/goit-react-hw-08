import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} вже є у контактах.`);
      return;
    }

    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.input} type="text" name="name" required placeholder="Ім'я" />
      <input className={css.input} type="tel" name="number" required placeholder="Телефон" />
      <button className={css.button} type="submit">Додати контакт</button>
    </form>
  );
}