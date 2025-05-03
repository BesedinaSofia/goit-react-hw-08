import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <span>{contact.name}: {contact.number}</span>
      <button className={css.button} onClick={() => dispatch(deleteContact(contact.id))}>
        Видалити
      </button>
    </div>
  );
}
