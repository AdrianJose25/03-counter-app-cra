import React from "react";

export const Posts = ({ nData }) => {
  const dataPosts = nData
    ? nData.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
          </div>
        );
      })
    : "no data yet";
  return <div>{dataPosts}</div>;
};
