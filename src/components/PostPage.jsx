import React from "react";

export const PostPage = ({ setDataQt, setCurrentPage }) => {
  const handlePages = (qPages) => {
    setDataQt(qPages);
    setCurrentPage(1);
  };
  return (
    <>
      <select
        name="post"
        id="post"
        onChange={(e) => handlePages(e.target.value)}
      >
        <option value={5}>--Default--</option>
        <option value={2}>2</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>
    </>
  );
};
