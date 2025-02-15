import React from "react";
import { Main } from "./components/Main";
import { DataContainer } from "./components/DataContainer";
import { ShowData } from "./components/ShowData";
import { OtroCompo } from "./components/OtroCompo";

const users = [
  { userName: "Angela", id: "1" },
  { userName: "Marvin", id: "2" },
  { userName: "Eduard", id: "3" },
];

export const App = () => {
  return (
    <div>
      <Main>
        <DataContainer
          users={users}
          show={(user) => <ShowData key={user.id} userName={user.userName} />}
          otro={() => <OtroCompo />}
        />
      </Main>
    </div>
  );
};
