import React, { useState } from "react";
import data from "./data/data";
import { InfoCard } from "./components/InfoCard";

export const App = () => {
  const [users, setUsers] = useState([]);
  React.useEffect(() => {
    data().then((users) => setUsers(users.data.results));
  }, []);
  const cardInfo = users.map((user) => <InfoCard key={user.id} {...user} />);
  return (
    <div className="centered-container">
      <div className="row row-cols-1 row-cols-md-4 g-4">{cardInfo}</div>
    </div>
  );
};
