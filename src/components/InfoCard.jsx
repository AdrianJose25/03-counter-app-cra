import React from "react";

export const InfoCard = (props) => {
  const style = {
    width: "18rem",
    height: "30rem",
  };
  return (
    <div className="col">
      <div className="card" style={style}>
        <img
          src={`${props.thumbnail.path}.${props.thumbnail.extension}`}
          className="card-img-top"
          alt="..."
          style={{ width: "100%", height: "80%" }}
        />
        <div className="card-body">
          <p className="card-text" style={{ width: "100%" }}>
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
};
