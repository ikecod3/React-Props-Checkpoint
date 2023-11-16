// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./Player";
import { players } from "./Players";

const PlayerList = () => {
  return (
    <div
      className="flex-"
      style={{
        display: "grid",
        placeContent: "center",
        alignItems: "center",
        gap: "5em",
        gridTemplateColumns: "repeat(auto-fill, 30rem)",
        padding: 10,
        margin: "3rem",
      }}
    >
      {players.map((item) => {
        return (
          <div key={item.id}>
            <Player {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default PlayerList;
