import React, { useState } from "react";

export const App = () => {
  const human = { name: "Adrian", age: 28, on: 1, status: false };
  const otherName = "Jose";
  const [obj, setObj] = useState(human);
  const [status, setStatus] = useState(human.status);
  const change = () => {
    const setName = obj.name == "Adrian" ? otherName : "Adrian";
    setObj((prevState) => ({ ...prevState, name: setName }));
  };
  const change2 = () => {
    setStatus((prevStatus) => {
      const newStatus = !prevStatus;
      setObj((prevState) => ({ ...prevState, status: newStatus }));
      return newStatus;
    });
  };

  return (
    <div className="container">
      <div className="card">
        <p className={obj.status ? "text-del" : ""}>{obj.name}</p>
        {obj.status && <p className="text-del">{status}Eliminado</p>}
        <div>
          <button className="add" onClick={change}>
            Add
          </button>
          <button className="del" onClick={change2}>
            Del
          </button>
        </div>
      </div>
    </div>
  );
};
