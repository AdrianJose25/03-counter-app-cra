import React from "react";
import { useForm } from "./useForm";

const initialState = {
  contactName: "",
  condition: false,
};

export const users = [];

export const RegisterForm = () => {
  const { handleForm, dataForm, handleSubmit } = useForm(initialState);

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="contactName"
          onChange={handleForm}
          value={dataForm.contactName}
        />
        <input
          type="checkbox"
          name="condition"
          onChange={handleForm}
          checked={dataForm.condition}
        />
        <button>Login</button>
      </form>
    </section>
  );
};
