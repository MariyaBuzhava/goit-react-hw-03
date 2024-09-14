const Contact = ({ id, name, number, handleDeleteContact }) => {
  return (
    <label htmlFor={id}>
      <div>
        <span>{name}</span>
        <span>{number}</span>
      </div>
      <button onClick={() => handleDeleteContact(id)}>Delete</button>
    </label>
  );
};

export default Contact;
