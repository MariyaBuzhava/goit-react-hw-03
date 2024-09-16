import Contact from "../Contact/Contact";
import c from "./ContactList.module.css";

const ContactList = ({ contactList, setContacts }) => {
  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };
  return (
    <div className={c.contactList}>
      {contactList.map((contact) => (
        <Contact
          key={contact.id}
          {...contact}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
