import React from "react";
import Player from "./Player";
import players from "./players";

const PlayerList = () => {
  return (
    <div>
      <h1>player’s details</h1>
      {players.map((player, i) => (
        <Player key={i} {...player} />
      ))}
    </div>
  );
};

export default PlayerList;
