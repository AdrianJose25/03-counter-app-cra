import React from "react";
import { Circle } from "./components/Circle";
//import facts from "./data/facts";
//import { Item } from "./components/Item";

export const App = () => {
  const showColor = [
    {
      id: "a",
      show: 1,
      hide: 1,
    },
    {
      id: "b",
      show: 2,
      hide: 0,
    },
    {
      id: "c",
      show: 3,
      hide: 1,
    },
  ];

  const circles = showColor.map((circle) => (
    <Circle key={circle.id} className="item" {...circle} />
  ));

  //   const caract = facts.map((fact) => (
  //     <Item key={fact.id} on={fact.on} id={fact.id} fact={fact.fact} />
  //   ));

  return <div>{circles}</div>;
};
