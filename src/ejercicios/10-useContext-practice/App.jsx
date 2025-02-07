import React from "react";
import { StateCompo } from "./context/StateCompo";
import { Header } from "./components/Header";
import { TopBar } from "./components/TopBar";
import { Footer } from "./components/Footer";
import { InfoCard } from "./components/InfoCard";

export const App = () => {
  return (
    <StateCompo>
      <div>
        <Header>
          <TopBar />
        </Header>
        <Footer>
          <InfoCard />
        </Footer>
      </div>
    </StateCompo>
  );
};
