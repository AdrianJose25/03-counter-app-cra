import React from "react";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";

export const App = () => {
  return (
    <div>
      <LoginForm />
      <RegisterForm />
    </div>
  );
};
