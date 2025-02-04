import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { LikeCompo } from "./components/LikeCompo";

export const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <LikeCompo />
    </div>
  );
};
