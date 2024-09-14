import { Field, Form, Formik } from "formik";
// import { useState } from "react";

const ContactForm = () => {
  const initialValues = {
    username: "",
    number: "",
  };
  // const [formData, setFormData] = useState({
  //   username: "",
  //   number: "",
  // });
  // const [newContact, setNewContact] = useState('');

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormData({
  //     username: "",
  //     number: "",
  //   });
  // };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    value((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {
          handleSubmit;
        }}
      >
        <Form>
          <label>
            <span>Name</span>
            <Field
              value={initialValues.username}
              onChange={handleChangeInput}
              name="username"
              type="name"
            />
          </label>
          <label>
            <span>Number</span>
            <Field
              value={initialValues.number}
              onChange={handleChangeInput}
              name="number"
              // type="number"
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
