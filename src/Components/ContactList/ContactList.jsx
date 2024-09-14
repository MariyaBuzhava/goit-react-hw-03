import Contact from "../Contact/Contact";

const ContactList = ({ contactList, setContacts }) => {
  const handleDeleteContact = (id) => {
    console.log(id);
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div>
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
