import s from "./Contact.module.css";

const Contact = ({ id, name, number, handleDeleteContact }) => {
  return (
    <label htmlFor={id} className={s.lable}>
      <div className={s.contact}>
        <span>{name}</span>
        <span>{number}</span>
      </div>
      <button className={s.button} onClick={() => handleDeleteContact(id)}>
        Delete
      </button>
    </label>
  );
};

export default Contact;
