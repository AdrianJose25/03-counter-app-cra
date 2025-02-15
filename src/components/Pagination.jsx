import React from "react";

export const Pagination = ({ currentPage, nPages, setCurrentPage }) => {
  const handleNext = () => {
    if (currentPage < nPages) setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <h3 onClick={handlePrev}>Prev</h3>
      {currentPage}/{nPages}
      <h3 onClick={handleNext}>Next</h3>
    </div>
  );
};
