import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import SearchBox from "./Components/SearchBox/SearchBox";
import ContactList from "./Components/ContactList/ContactList";
import { nanoid } from "nanoid";

function App() {
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    return savedContacts ? savedContacts : initialContacts;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const contactWithId = { ...newContact, id: nanoid() };
    setContacts((prevContacts) => [...prevContacts, contactWithId]);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList setContacts={setContacts} contactList={filteredContacts} />
    </>
  );
}

export default App;
