import React from "react";
import facts from "./data/facts";
import { Item } from "./Item";

export const App = () => {
  const caract = facts.map((fact) => (
    <Item on={fact.on} id={fact.id} fact={fact.fact} />
  ));
  return <div>{caract}</div>;
};
