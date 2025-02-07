import React from "react";

export const DataContainer = ({ show, users, otro }) => {
  return (
    <>
      {users.length > 0 && users.map(show)}
      {!users.length && otro()}
    </>
  );
};
