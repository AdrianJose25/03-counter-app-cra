import React from "react";

export const Item = ({ on, id, fact }) => {
  return (
    <div>
      {on && <h4>Id: {id}</h4>}
      <h3>Fact: {fact}</h3>
      <hr />
    </div>
  );
};
