import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Книга контактів</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
