import { useState } from "react";
import { pass } from "./LoginForm";
import { users } from "./RegisterForm";

export const useForm = (initialState) => {
  const [dataForm, setDataForm] = useState(initialState);

  const handleForm = (e) => {
    const { name, value, type, checked } = e.target;
    setDataForm((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handlePassword = (e) => {
    e.preventDefault();
    dataForm.password === pass && dataForm.contactName === "isa"
      ? console.log("Puede pasar")
      : console.log("No puede pasar");

    resetForm(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    users.push(dataForm);
    console.log(users);
  };

  const resetForm = (state) => {
    setDataForm(state);
  };

  return { handleForm, handlePassword, dataForm, handleSubmit };
};

// export const useForm = (initialState) => {
//   //form-object
//   const [dataForm, setDataForm] = useState(initialState);

//   //updater-function
//   const handleForm = (e) => {
//     const { name, value, type, checked } = e.target;
//     setDataForm((prevState) => ({
//       ...prevState,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   //reset-function
//   const resetDataForm = (initialState) => {
//     setDataForm(initialState);
//   };
//   return { dataForm, handleForm, resetDataForm };
// };
