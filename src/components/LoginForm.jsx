import React from "react";
import { useForm } from "./useForm";

const initialState = {
  contactName: "",
  password: "",
};
export const pass = "jsx";

export const LoginForm = () => {
  const { handleForm, handlePassword, dataForm } = useForm(initialState);
  return (
    <section>
      <form action="" onSubmit={handlePassword}>
        <input
          type="text"
          name="contactName"
          onChange={handleForm}
          value={dataForm.contactName}
        />
        <input
          type="password"
          name="password"
          onChange={handleForm}
          value={dataForm.password}
        />
        <button>Login</button>
      </form>
    </section>
  );
};
