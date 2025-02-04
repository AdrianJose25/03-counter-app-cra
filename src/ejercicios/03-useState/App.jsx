import React, { useState } from "react";

export const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="container">
      <div className="card">
        {value}
        <div>
          <button className="add" onClick={() => setValue(value + 1)}>
            Add
          </button>
          <button className="del" onClick={() => setValue(value - 1)}>
            Del
          </button>
        </div>
      </div>
    </div>
  );
};
