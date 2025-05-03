import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps'
import { selectError, selectLoading } from './redux/contactsSlice'

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">Книга контактів</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Завантаження...</p>}
      {error && <p className="error-message">Помилка: {error}</p>}
      <ContactList />
    </div>
  );
}
