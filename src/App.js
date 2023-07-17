import "./App.css";
import React from "react";
import PlayerList from "./component/PlayersList";
import "./styles.css";

const App = () => {
  return (
    <div>
      <h1>Football Players</h1>
      <PlayerList />
    </div>
  );
};

export default App;
